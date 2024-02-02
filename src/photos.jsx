import React from 'react'
import { useEffect, useState } from 'react';


const Photos = () => {
    const [photos, setPhotos] = useState([])
    console.log(photos);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))
    }, [])
  return (
    <div>
        <h1>Photos</h1>
      <div className="container">
        {photos.map((user) => {
          return(
            <div className="div1">
              <div className="div2">
                <p>I D: {user.id}</p>
                <h1>Album Id: {user.albumId}</h1>
                <p>Title: {user.title}</p>
                <p><a href={user.url}>Url</a></p>
                <p><a href={user.thumbnailUrl}>thumbnailUrl</a></p>
                
                {/* <p>url: {user.url}</p> */}
                {/* <p>Phone: {user.address}</p> */}
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Photos
