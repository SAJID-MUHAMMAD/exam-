import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState([])
  useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
       setUser(res.data);
     })

   },[])
  console.log(user);
  
  return (
    <div className='container'>
       <div className='pt-8 pl-8 w-full'>
       <div className='m-auto w-fit'>
       <input className='block outline p-4 mb-3' type="text" placeholder='Title' />
       <input className='block outline p-4 mb-2' type="text" placeholder='Write something!' />
       <button className='p-2 ml-14 bg-green-500  text-amber-50 rounded-xl'>Upload</button>
       </div>
        {
          user.map((item)=>(

            <div key={item.id} className=' mb-6 mt-6'>
              <h2 className='titel pb-2 text-xl font-bold'>TITLE : {item.title}</h2>
              
                <p className='body text-xl font-semibold'>BODY : {item.body}</p>
             
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default App