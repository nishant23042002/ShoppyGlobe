import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Suspense } from 'react'

import appStore from './utils/cartStore'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={appStore}>
      <Header />
      <Suspense fallback={<p>Loading.....</p>}>
        <Outlet />
      </Suspense>
    </Provider>
  )
}

export default App
