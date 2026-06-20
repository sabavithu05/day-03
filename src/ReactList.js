import React from "react";


function ReactList() {
    const fruit = ['apple', 'banana', 'cherry'];
    const user =
     [{ id: 1, name: 'geeks', age: '30' },
    { id: 2, name: 'for', age: '25' },
    { id: 3, name: 'geeks', age: '35' }
    ];

    const COMPANY = ["greeks", "for", "geeks"];
    const handleClick = (COMPANY) => {
        alert(`You clicked on ${COMPANY}`); };

        const myStyle = {
            color: 'blue',
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',};
    
    
    
    return ( <div>

        <h1 style={myStyle}> Fruit List </h1>

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
        
            
    <ul> {COMPANY.map((COMPANY,index) => ( <button key={index} onClick={() => handleClick(COMPANY)}>{COMPANY}</button>))} </ul>

    </div>
    );

}; export default ReactList;                 