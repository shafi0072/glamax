import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Home.css'
import Scroll from './Scroll';
const DetailsAboutCLient = (props) => {
    const {name, popularity, biography, image, colleagues, id} = props.post;
    const [details, setDetails] = useContext(userContext)
    const style = {
        fontSize:`${details.val_brightness}px`,
        color:'white'
    }
    return (
        <div className="Contetnt">
           {details.id === id && <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src={image} style={{width:'40%', height:'150px'}} alt=""/>
                </div>
                <div className="col-md-8">
                    <h1 style={{color:'white'}}>{name}</h1>
                    <h1 style={{color:'white'}}><Scroll/></h1>

                    <div className="blog">
                        <p style={{color:'white'}}>{biography}</p>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default DetailsAboutCLient;