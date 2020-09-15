import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {MyContext} from '../../App'
const Header = () => {
    const [cartLength]=useContext(MyContext)
    
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"40px"}}>
            <Link to="/">
                <img style={{height:"30px"}} src={logo} alt=""/>
            </Link>
            <div style={{display:"flex", alignItems:"center", width:"200px", justifyContent:"space-around"}}>
                <Link to="/proceed-order">
                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                    <span style={{color:"#fa0778", fontWeight:"bold"}}>
                        {cartLength}
                    </span>
                </Link>

                <h4>Login</h4>
                <Button style={{borderRadius:"20px"}} size="small" color="secondary" variant="contained">Signup</Button>
            </div>
        </div>
    );
};

export default Header;