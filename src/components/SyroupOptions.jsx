import {useContext} from 'react'
import {Context} from '../context.js'

import {Radio, Button} from '@material-ui/core'


const MilkOptions = () => {
  let {syroupOptions, resetHandler, getSum, radioButtonsHandler} = useContext(Context);


  return(
    <div >
      <h2>SYROUP <Button size='small' onClick={(e)=>{resetHandler(e);getSum()}}><p name='s'>reset</p></Button></h2>
     {syroupOptions.map((item, i) => {
       return (
        <div key={i}>
          <label>{item.tittle} ${item.price}</label>
          <Radio color='secondary' id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id);getSum()}} checked={item.checked} type='radio' name='syroup' /> 
       </div>
       )
     })}
    </div>
  )
}

export default MilkOptions;