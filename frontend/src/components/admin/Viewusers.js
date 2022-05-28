import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Viewgroups() {
  const [users, setUsers] = useState([]);

// This method fetches the records from the database.
useEffect(() => {
  axios.get('/user')
      .then((response) => {
          setUsers(response.data);
      })
}, [])

const setData = (data) => {
    let { name, position, email, phone, address, id, specialization } = data;
    localStorage.setItem('name', name);
    localStorage.setItem('position', position);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address)
    localStorage.setItem('id', id)
    localStorage.setItem('specialization', specialization)
}

  // This following section will display the table with the records of individuals.
  return (
      <div>
        <h3>Registered Users</h3>
        <table
          className="table table-striped"
          style={{ marginTop: 50, width: 700 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>User ID</th>
              <th>Specialization</th>

            </tr>
          </thead>
          <tbody>
              {
                    users.map(g=>(
                        <tr>
                            <td>{g.name}</td>
                            <td>{g.position}</td>
                            <td>{g.email}</td>
                            <td>{g.phone}</td>
                            <td>{g.address}</td>
                            <td>{g.id}</td>
                            <td>{g.specialization}</td>
                            <td>  <Link to={'/edituser'}><button onClick={()=>setData(data)}>update</button></Link></td>
                        </tr>
                    ))
              }
          </tbody>
        </table>
      </div>
  )
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import nextId from 'react-id-generator';



// export default function Viewusers() {

//     const [Item, setItem] = useState([]);

//     const Id= nextId();


// useEffect(() => {
//     axios.get('/user')
//         .then((response) => {
//             setItem(response.data);
//         })
// }, [])

// const setData = (data) => {
//     let { name, position, email, phone, address, id, specialization } = data;
//     localStorage.setItem('name', name);
//     localStorage.setItem('position', position);
//     localStorage.setItem('email', email);
//     localStorage.setItem('phone', phone);
//     localStorage.setItem('address', address)
//     localStorage.setItem('id', id)
//     localStorage.setItem('specialization', specialization)
// }

//     return (
//         <div>
//             <h4>Items</h4>

//             <table>
//                 <tr>
//                     <th>Name</th>
//                     <th>Position</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                     <th>Id</th>
//                     <th>Specialization</th>


//                 </tr>
//                 {Item.map((data) => {
//                      return (
//                 <tr>
//                     <td>{data.name}</td>
//                     <td>{data.position}</td>
//                     <td>{data.email}</td>
//                     <td>{data.phone}</td>
//                     <td>{data.address}</td>
//                     <td>{data.id}</td>
//                     <td>{data.specialization}</td>

//                     <td> <Link to={'/update/:id'}>
//                         <button onClick={()=>setData(data)}>update</button>
//                         </Link>
//                     </td>
//                 </tr>
//                 )})}
               
//             </table>
//         </div>
//     )
// }