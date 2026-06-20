import React from 'react';


function Bio () {
    const firstname = 'vithusha';
    const lastname = 'saba';
    
    const element = React.createElement("button", { className: "btn", onClick: () => alert("Button clicked!") }, "Click Me");
    
    const myStyle = {
      color: 'blue',
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      textDecoration: 'underline',
      backgroundColor: 'lightgray',
    
    };
  
    return (

        <div>
         <h1 style={myStyle}>My first name is {firstname}</h1>
         <h2>last name is {lastname}</h2>
         <div>{element}</div>
        </div>

        
      );
    
    }
    
    export default Bio;
    