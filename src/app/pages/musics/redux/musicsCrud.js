import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3011';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': "adsf",
    'withCredentials': true,
    'mode' : 'no-cors',
	},
}

export function getMusics(searchFilter) {  
  let url = `https://itunes.apple.com/search?media=music&entity=song&term=${searchFilter.search === "" ?  "jack+johnson" : searchFilter.search}&limit=${searchFilter.limit}`;
  return axios.get(url, config);
}

export function getAlbums(artistId) {
  let url = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=10`;
  return axios.get(url, config);
}
