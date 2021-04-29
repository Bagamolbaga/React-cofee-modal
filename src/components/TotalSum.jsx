import {useContext} from 'react'
import {Context} from '../context.js'

import {Button} from '@material-ui/core'

const TotalSum = () => {
  let {cartSum, count} = useContext(Context);
  return <Button variant='contained' color='secondary' fullWidth> ADD 1 TO CART ${cartSum*count}</Button>
  
}

export default TotalSum;