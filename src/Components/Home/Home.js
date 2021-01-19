import React, { useContext } from 'react';
import fakeData from '../../Resorces/FakeData'
import './Home.css'
import logo from '../../Resorces/_logo/the-godfather.svg'
import SideMenu from './SideMenu'
import DetailsAboutCLient from './DetailsAboutCLient';
import { userContext } from '../../App';
const Home = () => {
    const [details, setDetails] = useContext(userContext)
    const style = {
        fontSize:`${details.val_brightness}px`
    }
    return (
        <div>
            <div  className="Header row">
            
                <div className="col-md-3 d-flex align-items-center justify-content-center logo">
                    <img src={logo} style={{width:'40%'}} alt=""/>
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
            <div className="body row">
            <div className="col-md-3 logo">
                    {
                        fakeData.map(post => <SideMenu post={post}/>)
                    }
                </div>
                <div className="col-md-9">
                    {
                        fakeData.map(post => <DetailsAboutCLient post={post}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;