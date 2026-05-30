import React,{ useEffect, useState } from "react";



function Count () {

    const [Count, setCount] = useState(0,1);


    useEffect(() => { 
        const CountTimer = setInterval(() => {
            setCount (Count => Count + 1); 
            
        }, 1000);

  
    return () => clearInterval(CountTimer);
    }, []);

     
        
        return ( <div> 

            <h1> Count:{Count} </h1>
        </div>);
    
    }

    export default Count;
    