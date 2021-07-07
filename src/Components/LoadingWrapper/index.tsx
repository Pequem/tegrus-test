import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './styles.scss'

interface IProps {
  isLoading: boolean
}

const Loading = ({ isLoading, children }: React.PropsWithChildren<IProps>) => {
  return (
    <>
    {isLoading
      ? <div className='loading-wrapper'>
          <Spin indicator={<LoadingOutlined spin />} />
        </div>
      : children}
    </>
  )
}

export default Loading
