import React from "react";
import styled from 'styled-components'
import {selectCategory} from "../features/categories/category-slice";
import { useSelector } from "react-redux";
function Header(){
    const categories = useSelector(selectCategory);

    return(
        <Container>
         <a href="#"><img src="/Images/logo.png"></img></a>  
         <a href="AboutUs.js">About Us</a>
         <a href="Contact.js">Contact</a>
            <Menu>
            {categories && categories.map((category,index) =>(
            <a key={index} href="#">{category}</a>))}
            </Menu>
    <       RightMenu>
                <a href="Advertise.js">Advertise</a>
                <a href="Login.js">Login</a>
                <a href="Menu.js">Menu</a>

            </RightMenu>

        </Container>)

}
export default Header

const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
a{
    font-weight:300;
    margin-right:10px;
    text-decoration:none;
    font-size:14px;
    font-family:  Geneva, Verdana, sans-serif;

}

`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:300;
    margin-right:10px;
    text-decoration:none;
    font-size:14px;
    font-family:  Geneva, Verdana, sans-serif;

}
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:300;
    padding:0 20px;
    flex-wrap:no-wrap;
    text-decoration:none;
    font-size:14px;
    font-family:  Geneva, Verdana, sans-serif;
    
    @media(max-width:768px){
        display:none;
    }
}
`
