import React from 'react';

function Hello(){

    const sayHello = () => {
        console.log("hello");
    };
    return(
        <div>
            <button onClick={sayHello}>Say hello</button>
        </div>
    );
}

//Now we can use this button with <Hello /> tag in the html
export default Hello;