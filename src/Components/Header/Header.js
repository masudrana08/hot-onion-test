import React from 'react';
import logo from '../../images/logo2.png'
const Header = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"40px"}}>
            <div>
                <img style={{height:"30px"}} src={logo} alt=""/>
            </div>
            <div>
                <p>login</p>
            </div>
        </div>
    );
};

export default Header;