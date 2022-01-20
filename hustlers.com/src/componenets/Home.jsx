import React from 'react';
import Section from './Carousel-Section'
import styled from 'styled-components';
function Home() {
    return (
        
        <Container>
           
           <TopContainer>
        <div>
             <center><h4>Search</h4></center>
             <input className="searchbar" type="text" placeholder="Search"></input>
        </div>
        </TopContainer>
              <Section
                title = "Popular"
                backgroundImg="model-s4.jpg"
               />

               <Section
                title = "Products"
                backgroundImg="modely (17).jpg"
                />

                <Section
                 title = "Services"
                 backgroundImg="model3 (3).jpg"
                />

                <Section
                title = "Events"
                backgroundImg="modelx_v2 (1).jpg"
            />
              
              <Section
                title = "Hustlers"
                backgroundImg="solar_panels (5).jpg"
            />
             
             <div className="footer">
                <a href="Hustlers@2022.js">Hustlers.com @ 2022  </a>
                <a href="Privacy&Legal.js">Privacy & Legal  </a>
                
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
background-color:lightgrey;
position:relative;
width:100vw;
opacity:0.65;

`