import {useContext} from 'react'
import {Context} from '../context.js'

import {Button} from '@material-ui/core'


const Header = () => {

  let {count, countHandler} = useContext(Context);
  return(
    <div>
    $125 <Button variant='outlined' color='default' name='minus' onClick={countHandler}>-</Button >
      { count }
    <Button variant='outlined' color='secondary' name='plus' onClick={countHandler}>+</Button >
    </div>
  )
}

export default Header;