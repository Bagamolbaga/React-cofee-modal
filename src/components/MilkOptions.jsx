import {useContext} from 'react'
import {Context} from '../context.js'

import {Radio} from '@material-ui/core'

const MilkOptions = () => {
  let {milkOptions, milkOptionsHandler, getSum} = useContext(Context);


  return(
    <>
      <h2>MILK</h2>
     {milkOptions.map(item => {
       return (
        <div style={{display:'flex', alignItems:'center'}}>
          <label>{item.tittle} ${item.price}</label>
          <Radio color='secondary' id={item.id} onChange={()=>{milkOptionsHandler(item.id);getSum()}} checked={item.checked} type='radio' name='milk' /> 
       </div>
       )
     })}
    </>
  )
}

export default MilkOptions;