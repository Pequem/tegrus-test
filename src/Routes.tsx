import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

interface IProps {
  Layout: React.ComponentType<any>
}

const Routes: React.FC<IProps> = ({ Layout }:IProps) => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
