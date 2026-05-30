import React,{ useEffect, useState } from "react";



function UpdatePage () {

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => { 
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

  
    return () => clearInterval(timer);
    }, []);

     
        
        return ( <div> 

            <h1> welcome to the react tomezone       </h1>
            <p> currentTime:    {currentTime}      </p>
        </div>);
    
    }
    
    export default UpdatePage;
    