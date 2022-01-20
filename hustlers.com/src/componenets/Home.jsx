import React from 'react';
import Section from './Carousel-Section'
import styled from 'styled-components';
function Home() {
    return (
        <Container>
             
              <Section
                title = "Model S"
                description = "Order Online for "
                carlink="Touchless delivery"
                backgroundImg="model-s.jpg"
                rightBtnText="Custom Order"
                leftBtnText="Existing Inventory"

           />

            <Section
                title = "Model Y"
                description = "Order Online for "
                carlink="Touchless delivery"
                backgroundImg="modely (17).jpg"
                rightBtnText="Custom Order"
                leftBtnText="Existing Inventory"
            />
           <Section
                title = "Model 3"
                description = "Order Online for "
                carlink="Touchless delivery"
                backgroundImg="model3 (3).jpg"
                rightBtnText="Custom Order"
                leftBtnText="Existing Inventory"
            />
             <Section
                title = "Model X V2"
                description = "Order Online for "
                carlink="Touchless delivery"
                backgroundImg="modelx_v2 (1).jpg"
                rightBtnText="Custom Order"
                leftBtnText="Existing Inventory"
            />
              
              <Section
                title = "Solar Panels"
                description = "Lowest Cost Solar Panels in America"
                backgroundImg="solar_panels (5).jpg"
                rightBtnText="Order Now"
                leftBtnText="Learn More"
            />
             <Section
                title = "Solar Roofs"
                description = "Produce Clean Energy From Your Roof"
                backgroundImg="solar_roof (11).jpg"
                rightBtnText="Order Now"
                leftBtnText="Learn More"
            />
             <Section
                title = "Accessories"
                backgroundImg="home_charging (7).jpg"
                leftBtnText="Shop Now"
            />
             <div className="footer">
                <a href="Tesla@2021.js">Tesla @ 2021  </a>
                <a href="Privacy&Legal.js">Privacy & Legal  </a>
                <a href="Contact.js">Contact  </a>
                <a href="Careers.js">Careers  </a>
                <a href="Contact.js">Contact  </a>
                <a href="News.js">News  </a>
                <a href="Engage.js">Engage  </a>
                <a href="Locations.js">Locations  </a>
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

    