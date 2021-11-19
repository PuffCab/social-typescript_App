import React from 'react'
import './home.css'
import {Animated} from "react-animated-css";


const Home = () => {
    return (
        <div className="home__container">
            <div className="container__spans">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={2000} isVisible={true}> 
                    <span className="small__title_span1">Too Good To Go</span>
                </Animated>
                
                <Animated animationIn="bounceInDown" animationOut="fadeOut" animationInDuration={3500} animationOutDuration={3500} isVisible={true}>

                <span className="small__title_span2">meets</span>
                </Animated>
                
                <Animated animationIn="bounceInRight" animationOut="fadeOut" animationInDuration={5000} animationOutDuration={5000} isVisible={true}>

                <span className="small__title_span3">Tinder</span>
                </Animated>

            </div>
        
        <Animated animationIn="bounceInUp" animationOut="fadeOut" animationInDuration={10000} animationOutDuration={12000} isVisible={true}>
            <div className="home__title__container">
                <h1 className="home__title">DINEin</h1>
            </div>
        </Animated>
        </div>

        
    )
}

export default Home
