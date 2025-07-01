import { useState } from "react";
import { useEffect } from "react"

const Effect = () => {
 const [count,setCount]=useState(0)
 const [users,setUsers]=useState([])
 const [posts,setPosts]=useState([])
    // useEffect(()=>{
    //     console.log("from useEffect"); 
    // },[count])

    useEffect(()=>{
        fetch('http://localhost:3000/get')
          .then((res) => res.json())
          .then((data) => setUsers(data))        
    },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
    },[])
    console.log(posts);
    
  return (
    <div>
        <ul>
            {users.map((user)=>(
                <li key={user._id}>{user.name}</li>
            ))}
        </ul>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Effect