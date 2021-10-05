import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/home/homePage'
import MusicsPage from '../pages/musics/musicsPage'
import HistoryPage from '../pages/musics/historyPage'
import StatisticsPage from '../pages/musics/statisticsPage'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

export function Routes() {
  return (
    <div>
      <NavBar/>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/musics' component={MusicsPage} />
          <Route path='/history' component={HistoryPage} />
          <Route path='/statistics' component={StatisticsPage} />
        </Switch>
      </Suspense>
      <Footer/>
    </div>
  )
}
