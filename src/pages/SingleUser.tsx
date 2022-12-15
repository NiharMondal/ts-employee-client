import React from 'react'
import {useParams,Outlet} from 'react-router-dom'
export default function SingleUser() {
   const {userId} = useParams()
  return (
    <div>SingleUser: {userId}
    <Outlet/></div>
  )
}

