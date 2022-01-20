import React from 'react';
import styled from 'styled-components';
//import {Fade} from 'react-reveal/Fade';

function Section({title,backgroundImg}) {
    return (
       <Wrap bgImage={backgroundImg}>
           <ItemText>
              <h2>{title}</h2> 
           </ItemText>
           
       </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:50vh;
background-repeat:no-repeat;
display:flex;
border: 1px solid darkgrey;
background-size:cover;
flex-direction:column;
background-image:${props=>`url("/Images/${props.bgImage}")`};
align-items:left ;
background-position:center;
justify-content:space-between; 
`
const ItemText = styled.div`
padding-top:3vh;
text-align:left;
margin-left:20px;
`
