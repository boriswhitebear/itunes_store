import {ARTIST_POS_ARRAY} from '../data/constants'

const getGraphData = (albums : any) =>{
  let artistNodes = [];
  let links = [];
  
  let index = 0;
  for(let i = 0; i < albums.length; i++)
  {
    const artistName = albums[i].albums.results[0].artistName;
    let obj = { id: artistName, x: ARTIST_POS_ARRAY[i].x, y: ARTIST_POS_ARRAY[i].y, label:"1", size:100, fontSize:15};
    
    for(let j = 1; j < albums[i].albums.resultCount; j++){
      let radius = 150;
      let angle = 360/albums[i].albums.resultCount;
      
      var x = ARTIST_POS_ARRAY[i].x + radius * Math.cos(j * angle);
      var y = ARTIST_POS_ARRAY[i].y + radius * Math.sin(j * angle);
      index++;
      const albumName = albums[i].albums.results[j].collectionName;
      let obj_small = {id: albumName + "_" + index, x: Math.round(x), y: Math.round(y), label:"1", fontSize:10};
      artistNodes.push(obj_small);
      let link = { source: artistName, target:  albumName + "_" + index}
      links.push(link);
    }
    artistNodes.push(obj);
  }

  return {nodes: artistNodes, links: links};
}

const groupByArtistId = function(xs:any, key:any) {
  return xs.reduce(function(rv:any, x:any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export {getGraphData, groupByArtistId}
