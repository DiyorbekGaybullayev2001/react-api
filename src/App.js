import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [users, setusers] = useState([])
  console.log(users);
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
                <p>Address: {user.address.city} city</p>
                <p>Address: {user.address.street} street</p>
                <p>Address: {user.address.suite} </p>
                <p>Address: {user.address.zipcode} zipcode</p>
                <p>Address: {user.address.geo.lat} geo lat</p>
                <p>Address: {user.address.geo.lng} geo lng</p>
                <p>Company: {user.company.bs}</p>
                <p>Company CatchPhrase : {user.company.catchPhrase}</p>
                <p>Company Name : {user.company.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
   
  );
}

export default App;
