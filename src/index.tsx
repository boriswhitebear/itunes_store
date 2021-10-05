import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store from './setup/redux/Store'
// Axios
import axios from 'axios'

// Apps
import {App} from './app/App'

import './css/styles.css'

 /**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
 const {PUBLIC_URL} = process.env
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */

/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
_redux.setupAxios(axios, store)

ReactDOM.render(
    <Provider store={store}>
        <App basename={PUBLIC_URL} />
    </Provider>,
  document.getElementById('root')
)
