import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Home } from './Home'
import { Posts } from './Posts'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={< Home/>}/>
            <Route path="/Posts" element={< Posts/>}/>


        </Routes>

    </div>
  )
}


