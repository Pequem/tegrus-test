import React from 'react'
import BaseLayout from './Layout/BaseLayout'
import Routes from './Routes'
import container from './DIContainer'
import { Provider } from 'inversify-react'
import 'antd/dist/antd.css'
import './App.scss'

function App () {
  return (
    <Provider container={() => (container)}>
      <Routes Layout={BaseLayout} />
    </Provider>
  )
}

export default App
