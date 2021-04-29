import {useContext} from 'react'
import {Context} from '../context.js'

import {Radio} from '@material-ui/core'

const MilkOptions = () => {
  let {milkOptions, getSum, radioButtonsHandler} = useContext(Context);


  return(
    <>
      <h2>MILK</h2>
     {milkOptions.map((item, i) => {
       return (
        <div key={i}>
          <label>{item.tittle} ${item.price}</label>
          <Radio color='secondary' id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id);getSum()}} checked={item.checked} type='radio' name='milk' /> 
       </div>
       )
     })}
    </>
  )
}

export default MilkOptions;