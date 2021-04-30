import {useContext} from 'react'
import {Context} from '../context.js'

import {Radio} from '@material-ui/core'

const MilkOptions = () => {
  let {milkOptions, radioButtonsHandler} = useContext(Context);


  return(
    <>
      <h2>MILK</h2>
     {milkOptions.map(item => {
       return (
        <div style={{display:'flex', alignItems:'center'}}>
          <label>{item.tittle} ${item.price}</label>
          <Radio color='secondary' id={item.id} onChange={(e)=>{radioButtonsHandler(e,item.id)}} checked={item.checked} type='radio' name='milk' /> 
       </div>
       )
     })}
    </>
  )
}

export default MilkOptions;