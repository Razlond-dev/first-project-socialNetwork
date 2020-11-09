import React from 'react'
import preloader from '../../../assets/images/Preloader.gif'

let Preloader: React.FC = (props) => {
  return <div style={{ width: 200, height: 200, backgroundColor: "transparent" }}><img src={preloader} /></div>
}


export default Preloader