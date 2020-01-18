import React from 'react'
import { Typography } from 'antd';


function Title = ({ text }) => {


  return (

    <Typography.Title level={4} >
      test
  </Typography.Title>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}


export default Title;
