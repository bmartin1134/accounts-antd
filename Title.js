import React from 'react'
import { Typography } from 'antd';


const Title = ({ text }) => {


  return (

    <Typography.Title level={4} >
        {text}
  </Typography.Title>
  )
}
export default Title;
