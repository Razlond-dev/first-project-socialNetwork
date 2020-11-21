import React from 'react'

import { Spin } from 'antd';



let Preloader: React.FC = () => {

  return <div className="preloader">
    <Spin size="large" />
  </div>
}


export default Preloader