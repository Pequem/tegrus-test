import React from 'react'
import {
  Layout,
  Menu
} from 'antd'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import background from '../../Assets/background.png'
import './styles.scss'

const BaseLayout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Layout>
      <Layout.Header>
        <div className='layout-logo'>
          <img src={logo} />
        </div>
        <Menu mode="horizontal" selectedKeys={[]}>
          <Menu.Item key={1}>
            <Link to='/'>Home</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <div className='layout-background-img'>
          <img src={background} />
        </div>
        <div className='layout-content'>
          {children}
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default BaseLayout
