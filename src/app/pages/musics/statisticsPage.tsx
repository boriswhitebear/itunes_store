import { useEffect } from 'react'
import { connect } from 'react-redux'

import * as musics from './redux/musicsRedux'
import { Graph } from 'react-d3-graph'
import { Spinner } from 'react-bootstrap-v5'
import {getGraphData, groupByArtistId} from '../../../helper/music.helper'
import {GRAPH_CONFIG} from '../../../data/constants'

const StatisticsPage = (props:any) => {
const { favoriteMusics, getAlbums, albums, isLoading} = props;

let fvGBObj = groupByArtistId(favoriteMusics, 'artistId')
const fvTop5Arr = Object.entries(fvGBObj).sort(function(a:any, b:any){return b[1].length - a[1].length}).slice(0,5)

useEffect(() => {
  getAlbums(fvTop5Arr)
}, [getAlbums])

let graphData = getGraphData(albums);

const gData = {
  nodes: graphData.nodes,
  links: graphData.links
}

  return (
    <section className="page-section" id="statistics">
      <div className="container wow fadeIn">
        {isLoading && (
          <div className="text-center m-t-40">
            <Spinner className="" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!isLoading && (
          <div id="network">
            <Graph
              id='graph-id'
              data={gData}
              config={GRAPH_CONFIG}
            />
          </div>
        )}
      </div>
    </section>
  )
}

const mapStatesToProps = (state: any) => ({
  favoriteMusics: state.musics.favoriteMusics,
  albums: state.musics.albums,
  isLoading: state.musics.isLoading
})

export default connect(mapStatesToProps, musics.actions)(StatisticsPage)