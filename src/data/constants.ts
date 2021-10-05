const ARTIST_POS_ARRAY = [
  {x: 200, y:200}, {x: 200, y:600}, {x: 200, y:900}, {x: 700, y:200}, {x: 700, y:600}
];

const GRAPH_CONFIG = {
  nodeHighlightBehavior: true,
  width:1900,
  height:1500,
  staticGraph: true,
  node: {
      color: 'blue',
      size: 30,
      highlightStrokeColor: 'red',
      highlightFontSize: 14,
      highlightColor:'red',
      symbolType : 'circle'
  },
  maxZoom: 8, minZoom: 3, focusZoom: 0,
  link: {
      highlightColor: 'lightblue'
  }
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again later.'

export {
  ARTIST_POS_ARRAY,
  GRAPH_CONFIG,
  DEFAULT_ERROR_MESSAGE,
}
