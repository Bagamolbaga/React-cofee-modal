import {useContext} from 'react'
import {Context} from '../context.js'

import {Checkbox, Button} from '@material-ui/core'

const MilkOptions = () => {
  let {chocoladeOptions, resetHandler, getSum, radioButtonsHandler} = useContext(Context);


  return(
    <div >
      <h2>CHOCOLADE <Button size='small' onClick={(e)=>{resetHandler(e);getSum()}}><p name='c'>reset</p></Button></h2>
     {chocoladeOptions.map((item, i) => {
       return (
        <div key={i}>
          <label>{item.tittle} ${item.price}</label>
          <Checkbox id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id);getSum()}} checked={item.checked} type='checkbox' name='chocolade' /> 
       </div>
       )
     })}
    </div>
  )
}

export default MilkOptions;