import React, { useState } from 'react'
import { useEffect } from 'react';
import TrailApli from '../Componenets/TrailApli';

const Effect = () => {
    // const [clicked, setclicked] = useState(false);
    // console.log(clicked)

    // useEffect(() => {
    //     console.log("you are a chafnu man")
    // }, [clicked])
    return (
        <div>
           {/* <h1> this is effect hooks</h1>
            <button onClick={() => setclicked(!clicked)}>click</button> */}
            <TrailApli/>
        </div>
    )
}

export default Effect
