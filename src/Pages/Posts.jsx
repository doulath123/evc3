import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'




export const Posts = () => {
   
    const [data,setData] = useState([])
    console.log(data)
    useEffect (() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) =>{
            // console.log(response.data)
            setData(response.data)
        })
    },[])
  return (
    <div>Post
        {
            data.map((data) =>{
                return(<>
                
                <div>
                    {data.id}
                </div>

                <div>
                    {data.title}
                </div>

                <br />
                <br />
                <br />
                
                
                </>)
            })
        }
    </div>
  )
}
