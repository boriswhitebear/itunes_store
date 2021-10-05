import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import {Routes} from './routing/Routes'

type Props = {
  basename: string
}

const App: React.FC<Props> = ({basename}) => {
  return (
    <div>
      <BrowserRouter basename={basename}>
          <Routes />
      </BrowserRouter>
      <Toaster position='top-right' />
    </div>
  )
}

export {App}
