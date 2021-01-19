import React, { useContext } from 'react';
import { userContext } from '../../App';


const SideMenu = (props) => {
    const [details, setDetails] = useContext(userContext)
    const {name, id, colleagues} = props.post;
    const handleChangeId = () => {
        const newId = {...details}
        newId.id = id
        setDetails(newId)
    }
    
    const style = {
        fontSize:`${details.val_brightness}px`,
        color:'white'
    }
    return (
        <div>
             <h1 onClick={handleChangeId} style={style} className="text-light">{name}</h1>
        </div>
    );
};

export default SideMenu;