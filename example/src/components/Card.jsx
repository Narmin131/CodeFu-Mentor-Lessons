import React, {useState} from 'react'



const Card = (props) => {

    const [state, setState] = useState(0)



  return (
   <div className='col-lg-4'>
      <div className="box">
         <img src={props.img} alt="" />
         <h2>{props.title}</h2>
      </div>
   </div>
  )
}

export default Card