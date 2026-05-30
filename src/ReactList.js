import React from "react";


function ReactList() {
    const fruit = ['apple', 'banana', 'cherry'];
    const user =
     [{ id: 1, name: 'geeks', age: '30' },
    { id: 2, name: 'for', age: '25' },
    { id: 3, name: 'geeks', age: '35' }
    ];

    return ( <div>

        <h1> Fruit List </h1>

        <ul> {fruit.map((f, index) => (
            <li key={index}>{f}</li>))} 


        </ul>
                  <h1>User List</h1>   
        <ul>    {user.map((user) => (
           
            <li key={user.id}>{user.name} is {user.age} years old.</li>

        ))}       </ul>
        

        <ul> {user.map ((user)=> (user.age> 54 ? ( <li key={user.id}>{user.name}   senior  </li>):
        (
             <li key={user.id}>{user.name}   junior  </li>  ) ))} </ul>                                      
    
        </div>
    );
}; export default ReactList;                 