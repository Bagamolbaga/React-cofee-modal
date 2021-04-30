import {useContext} from 'react'
import {Context} from '../context.js'

import {Radio, Button} from '@material-ui/core'


const MilkOptions = () => {
  let {syroupOptions,radioButtonsHandler, resetHandler} = useContext(Context);


  return(
    <div >
      <h2>SYROUP <Button size='small' onClick={(e)=>{resetHandler(e)}}><p name='s'>reset</p></Button></h2>
     {syroupOptions.map(item => {
       return (
        <div>
          <label>{item.tittle} ${item.price}</label>
          <Radio color='secondary' id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id)}} checked={item.checked} type='radio' name='syroup' /> 
       </div>
       )
     })}
    </div>
  )
}

export default MilkOptions;