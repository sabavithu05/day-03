import React from 'react';


function Bio () {
    const firstname = 'vithusha';
    const lastname = 'saba';
    
    const element = React.createElement("button", { className: "btn", onClick: () => alert("Button clicked!") }, "Click Me");
  
    return (

        <div>
         <h1>My first name is {firstname}</h1>
         <h2>last name is {lastname}</h2>
         <div>{element}</div>
        </div>

        
      );
    
    }
    
    export default Bio;
    