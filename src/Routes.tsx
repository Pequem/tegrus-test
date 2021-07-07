import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'

interface IProps {
  Layout: React.ComponentType<any>
}

const Routes: React.FC<IProps> = ({ Layout }:IProps) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
