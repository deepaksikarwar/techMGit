import React, {useState} from 'react';

function HooksCounter() {
    const [count , setCount] =  useState(0)
    
        return (
            // <div>sjasaasnhSSnh
               <div>
                <button onClick={() => setCount(count +  1)}>Count {count}</button>
               </div>
            // </div>
            
        )
    
}

export default HooksCounter;