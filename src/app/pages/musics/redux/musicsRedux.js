import { put, takeLatest } from "redux-saga/effects";
import { getMusics, getAlbums } from "./musicsCrud";

export const actionTypes = {
  GetMusics: "[GetMusics] Action",
  GetMusicsSuccess: "[GetMusicsSuccess] Action",
  SetLoadingFlag: "[SetLoadingFlag] Action",
  AddFavoriteMusic: "[AddFavoriteMusic] Action",
  RemoveFavoriteMusic: "[RemoveFavoriteMusic] Action",
  GetAlbums: "[GetAlbums] Action",
  GetAlbumsSuccess: "[GetAlbumsSuccess] Action",
  GetHistoryMusics: "[GetHistoryMusics] Action"
};

const initialQuotesState = {
  musics: null,
  isLoading: false,
  favoriteMusics: [],
  favoriteIds:[],
  albums:[],
  historyMusics:{
    data: [],
    topPages: null,
  }
};

export const reducer = (state = initialQuotesState, action) => {
  switch (action.type) {
    case actionTypes.GetMusicsSuccess: {
      const { musics } = action.payload;
      return {...state, musics };
    }
    case actionTypes.SetLoadingFlag: {
      const { isLoading } = action.payload;
      return {...state, isLoading };
    }
    case actionTypes.AddFavoriteMusic: {
      
      const {music} = action.payload;
      let favoriteMusics = state.favoriteMusics.slice();
      let favoriteIds = state.favoriteIds.slice();
  
      favoriteMusics.push(music);
      favoriteIds.push(music.trackId);

      return {...state,  favoriteIds: favoriteIds, favoriteMusics: favoriteMusics};
    }
    case actionTypes.RemoveFavoriteMusic: {
      const {music} = action.payload;

      let favoriteMusics = state.favoriteMusics.slice();
      let favoriteIds = state.favoriteIds.slice();
      
      favoriteMusics.map((item, index, arr) => {
        if(item.trackId === music.trackId) arr.splice(index, 1);
        return arr;
      })

      favoriteIds.map((item, index, arr) =>{
        if(item === music.trackId) arr.splice(index, 1);
        return arr;
      })

      return {...state,  favoriteMusics: favoriteMusics, favoriteIds: favoriteIds};
    }
    case actionTypes.GetAlbumsSuccess:{
      const { albums } = action.payload;
      return {...state, albums };
    }
    case actionTypes.GetHistoryMusics:{
      const { currentPage  } = action.payload;
      let fvMusics = state.favoriteMusics.slice();
      const perPage = 10;

      let data = fvMusics.slice(perPage*(currentPage.currentPage-1), perPage*currentPage.currentPage);

      let topPages = Math.ceil(fvMusics.length / perPage);
      let historyMusics = {data: data, topPages : topPages};
      return {...state, historyMusics };
    }
    default:
      return state;
  }
}

export const actions = {
  getMusics: (searchFilter = {}) => ({ type: actionTypes.GetMusics, payload: { searchFilter } }),
  getMusicsSuccess: (musics) => ({ type: actionTypes.GetMusicsSuccess, payload: { musics } }),
  SetLoadingFlag: (isLoading) => ({ type: actionTypes.SetLoadingFlag, payload: { isLoading } }),
  addFavoriteMusic: (music) => ({type: actionTypes.AddFavoriteMusic, payload:{music}}),
  removeFavoriteMusic: (music) => ({type: actionTypes.RemoveFavoriteMusic, payload:{music}}),
  getAlbums: (searchFilter = {}) => ({ type: actionTypes.GetAlbums, payload: { searchFilter } }),
  getAlbumsSuccess: (albums) => ({ type: actionTypes.GetAlbumsSuccess, payload: { albums } }),
  getHistoryMusics: (currentPage = {}) => ({ type: actionTypes.GetHistoryMusics, payload: { currentPage } }),
};

export function* saga() {
  yield takeLatest(actionTypes.GetMusics, function* getMusicsRequested(action) {
    const { searchFilter } = action.payload;
    yield put(actions.SetLoadingFlag(true));
    const { data } = yield getMusics(searchFilter);
    yield put(actions.SetLoadingFlag(false));

    yield put(actions.getMusicsSuccess(data));
  });

  yield takeLatest(actionTypes.GetAlbums, function* getAlbumsRequested(action) {
    const { searchFilter } = action.payload;
    yield put(actions.SetLoadingFlag(true));
    let albums = [];

    for(let i = 0; i < searchFilter.length; i++){
      const { data } = yield getAlbums(searchFilter[i][0]);
      setTimeout(()=>{}, 600)
      albums.push({artistId: searchFilter[i][0], albums: data});
    }

    yield put(actions.SetLoadingFlag(false));
    yield put(actions.getAlbumsSuccess(albums));
  });
}
