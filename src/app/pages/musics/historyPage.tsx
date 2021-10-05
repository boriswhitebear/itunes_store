import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap-v5'
import {toast} from 'react-hot-toast'

import * as musics from './redux/musicsRedux'
import MyPagination from "../../components/myPagination"

const MusicsPage = (props: any) => {
  const {historyMusics, getHistoryMusics, removeFavoriteMusic} = props;
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    afterPageClicked(currPage);
    getHistoryMusics({currentPage:currPage})
  }, [getHistoryMusics])

  let index = 0;

  const handleClickRemoveFavorite = (event: any, music: any) => {
    removeFavoriteMusic(music);
    getHistoryMusics({currentPage:currPage})

    if(currPage > 0 && historyMusics.data.length === 1)
    {
      let tempPage = currPage;
      afterPageClicked(tempPage-1);
    }

    toast.success("Remove this music from favorite list");
  }

  const afterPageClicked = (page_number:any) => {
    setCurrPage(page_number);
    getHistoryMusics({currentPage:page_number})
  };

  return (
    <>
      <section className="page-section" id="history">
        <div className="container">
          <Table className="wow fadeInUp" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>collectionName</th>
                <th>artistName</th>
                <th>releaseDate</th>
                <th>Price/currency</th>
                <th><i className="fa-hand-o-up">Favor</i></th>
              </tr>
            </thead>
            <tbody>
              {!!historyMusics.data && 
                historyMusics.data.map((item: any, key: number) => (
                  <tr key={key + 1}>
                    <td>{++index}</td>
                    <td><a target="_blank" rel="noreferrer" href={item.collectionViewUrl}>{item.collectionName}</a></td>
                    <td>{item.artistName}</td>
                    <td>{item.releaseDate}</td>
                    <td>{item.collectionPrice} / {item.currency}</td>
                    <td>
                    {
                      <button  className="btn_bg_none" onClick={(event) => handleClickRemoveFavorite(event, item)} >
                        <img alt="favor" className="td_favor" src="/img/favor.png" />
                      </button> 
                    }
                    </td>
                  </tr>
                ))
              }
              {
                historyMusics.data && (!historyMusics.data.length) && (
                <tr className="text-center">
                  <td colSpan={6}>There's no data</td>
                </tr>
                ) 
              }
            </tbody>
          </Table>
        </div>
        <MyPagination
          totPages={historyMusics.topPages}
          currentPage={currPage}
          pageClicked={(ele:any) => {
            afterPageClicked(ele);
          }}
        />
      </section>
    </>
  )
}

const mapStatesToProps = (state: any) => ({
  historyMusics: state.musics.historyMusics
})

export default connect(mapStatesToProps, musics.actions)(MusicsPage)