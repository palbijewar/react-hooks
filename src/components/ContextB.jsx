import React, { useContext } from 'react'
import ContextC from './ContextC'
import { userContext, channelContext } from '../App';

function ContextB() {

  const user = useContext(userContext)
  const channel =  useContext(channelContext)

  return (
    <div>
     { user } and { channel }
    </div>
  )
}

export default ContextB
