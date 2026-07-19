import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    let {employee,isloading} = useSelector((store) => store.auth);

    if(isloading) return <h1>loading...</h1>

    if(employee){
        return <Navigate to={'/dashboard'}/>
    }

  return <Outlet/>
}

export default PublicRoute