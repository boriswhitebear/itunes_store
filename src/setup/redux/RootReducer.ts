import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as musics from '../../app/pages/musics/redux/musicsRedux'

export const rootReducer = combineReducers({
  musics: musics.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([
    musics.saga(),
  ])
}
