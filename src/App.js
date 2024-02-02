import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [users, setusers] = useState([])
  // console.log(users);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setusers(data))
  }, [])

  return (
    <>
        <h1>Users</h1>
      <div className="container">
        {users.map((user) => {
          return(
            <div className="div1">
              <div className="div2">
                <h1>Name: {user.name}</h1>
                <p>UserName: {user.username}</p>
                <p>I D: {user.id}</p>
                <p>Email: {user.email}</p>
                <p><a href={user.website}>Website</a></p>
                <p>Phone: {user.phone}</p>
                {/* <p>Phone: {user.address}</p> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
   
  );
}

export default App;
