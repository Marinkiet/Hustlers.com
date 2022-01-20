import React from 'react';
import Section from './Carousel-Section'
import styled from 'styled-components';
function Home() {
    return (
        
        <Container>
           
           <TopContainer>
             
             <input className="searchbar" type="search" placeholder="Search"></input>
             <input className="searchbar" type="search" placeholder="Loaction..."></input>
             <FSRButton>
                 <h5>Showing results within 10km radius.</h5>
                <button>FILTER V </button>
                <button>SORT V </button>
                <button>RADIUS + - </button>
             </FSRButton>
        </TopContainer>
        
              <Section
                title = "Popular"
                backgroundImg="h.gif"
               />

               <Section
                title = "Products"
                backgroundImg="hc.gif"
                />

                <Section
                 title = "Services"
                 backgroundImg="ch.gif"
                />

                <Section
                title = "Events"
                backgroundImg="hc.gif"
            />
              
              <Section
                title = "Hustlers"
                backgroundImg="ch.gif"
            />
             
             <div className="footer">
                <a href="Hustlers@2022.js">Hustlers.com @ 2022  </a>
                <a href="Privacy&Legal.js">Privacy & Legal  </a>
                <a href="Pricing.js">Pricing </a>
                <a href="Advertising.js">Advertising  </a>

            </div>
        </Container>
       
      
        
    )
}

export default Home
const Container = styled.div`
height:100vh;
z-index:10;

}`

const div = styled.div`
.a{
    text-decoration: none;`

const TopContainer = styled.div`
padding:20px;
margin-top:50px;
background-color:#E2E2E2;
position:relative;
width:100vw;
opacity:0.85;

`
const FSRButton = styled.div`
margin-top:10px;
margin-left:35%;
margin-right:42px;
justify-content:space-between; 
display:flex;
padding:5px;
flex-direction:row;
border-style:none;
`