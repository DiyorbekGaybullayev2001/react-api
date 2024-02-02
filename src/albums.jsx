 
import React from 'react'
import { useEffect, useState } from 'react';


const Albums = () => {

    const [albums, setAlbums] = useState([])
    console.log(albums);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
  }, [])

  return (
    <>
    <div>
        <h1>Albums</h1>
      <div className="container">
        {albums.map((user) => {
          return(
            <div className="div1">
              <div className="div2">
                <p>I D: {user.id}</p>
                <h1>User Id: {user.userId}</h1>
                <p>Title: {user.title}</p>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
    
    </>
    
  )
}

export default Albums
