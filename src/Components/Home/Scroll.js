import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import './Home';
const Scroll = () => {
    const [details, setDetails] = useContext(userContext)
    
const handleChangeIncrese = (e) => {
   const newValue = {...details}
   newValue.val_brightness = e.target.value
   setDetails(newValue)
}
    return (
        <div>
            <h1>popularity: <input onChange={handleChangeIncrese} name="bar" type="range" min="10" max="100" name='val_brightness'/></h1>
        </div>
    );
};

export default Scroll;