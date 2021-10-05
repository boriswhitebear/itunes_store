import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Table, Dropdown, InputGroup, FormControl, Row, Col, Button, Spinner } from 'react-bootstrap-v5'

import * as musics from './redux/musicsRedux'
import {toast} from 'react-hot-toast'

const MusicsPage = (props: any) => {
  const { getMusics, musics,  addFavoriteMusic, isLoading, favoriteIds, removeFavoriteMusic} = props;

  const [limit, setLimit] = useState(10);

  let input: any = "";

  useEffect(() => {
    getMusics({search: input.value, limit: limit})
  }, [getMusics])

  const handleClickAddFavorite = (event: any, music: any) => {
    addFavoriteMusic(music);
    toast.success("Add this music to favorite list");
  }

  const handleClickRemoveFavorite = (event: any, music: any) => {
    removeFavoriteMusic(music);
    toast.success("Remove this music from favorite list");
  }

  const _selectLimitItem = (e: any) => {
    setLimit(e);
  }

  const searchFunc = (event : any, is_button: boolean) => {
    if(is_button === true) getMusics({search: input.value, limit: limit});
    else{
      if(event.charCode === 13){
        getMusics({search: input.value, limit: limit});
      }
    }
  }

  return (
    <>
      <section className="page-section" id="musics">
        <div className="container">
          <Row className="wow fadeInRight">
            <Col lg="4" md="5">
              <InputGroup >
                  <FormControl
                    placeholder="music name"
                    aria-label="Musicname"
                    aria-describedby="basic-addon1"
                    ref={(node : any) => {input = node;}}
                    type="text"
                    onKeyPress={(event : any) => searchFunc(event, false)}
                  />
                  <Button variant="info" onClick={(event : any) => searchFunc(event, true)}>Search</Button>
                </InputGroup>
            </Col>
            <Col lg="4" md="2">
                <Dropdown >
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    {limit}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {
                      [5, 10, 15, 20].map((value: number, i:number) => (
                        <Dropdown.Item key={i} eventKey={value.toString()} onSelect={(e)=>_selectLimitItem(e)} >{value}</Dropdown.Item>
                      ))
                    }
                  </Dropdown.Menu>
                </Dropdown>
            </Col>
          </Row>
          <Table className="mt-3 wow fadeInLeft" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>collectionName</th>
                <th>artistName</th>
                <th>releaseDate</th>
                <th>Price/currency</th>
                <th><i>Favor</i></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={6} className="text-center">
                    <Spinner className="" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </td>
                </tr>
              )}
              {!!musics && !isLoading && 
                musics.results.map((item: any, key: number) => (
                  <tr key={key + 1}>
                    <td>{key + 1}</td>
                    <td><a target="_blank" rel="noreferrer" href={item.collectionViewUrl}>{item.collectionName}</a></td>
                    <td>{item.artistName}</td>
                    <td>{item.releaseDate}</td>
                    <td>{item.collectionPrice} / {item.currency}</td>
                    <td>
                    {                      
                      favoriteIds.includes(item.trackId) ? 
                      <button  className="btn_bg_none" onClick={(event) => handleClickRemoveFavorite(event, item)} >
                        <img width="50px" alt="favor" className="td_favor" src="/img/favor.png" />
                      </button> : 
                      <button  className="btn_bg_none" onClick={(event) => handleClickAddFavorite(event, item)} >
                        <img width="50px" alt="favor" className="td_favor" src="/img/unfavor.png" />
                      </button>
                    }
                    </td>
                  </tr>
                ))
              }
              {
                !!musics && !isLoading && !musics.results.length && (
                <tr>
                  <td colSpan={6} className="text-center">There's no data</td>
                </tr>
                ) 
              }
            </tbody>
          </Table>
        </div>
      </section>
    </>
  )
}

const mapStatesToProps = (state: any) => ({
  musics: state.musics.musics,
  isLoading: state.musics.isLoading,
  favoriteIds: state.musics.favoriteIds,
})

export default connect(mapStatesToProps, musics.actions)(MusicsPage)