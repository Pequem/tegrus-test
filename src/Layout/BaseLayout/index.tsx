import React from 'react'
import { Layout } from 'antd'
import logo from '../../Assets/logo.png'
import './styles.less'

function BaseLayout ({ children }: React.PropsWithChildren<{}>) {
  return (
    <Layout>
      <Layout.Header>
        <div className='layout-logo'>
          <img src={logo} />
        </div>
      </Layout.Header>
      <Layout.Content>
        {children}
      </Layout.Content>
    </Layout>
  )
}

export default BaseLayout
