import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <div style={{display:'flex'}}>
                <i className='fas fa-bars fa-3x' style={{cursor:'pointer', margin:'0.5em 0 0 1em'}}></i>
            </div>
            <div className="HomeContainerText">
                <h1 className="HomeText">Hey. I'm Francisco! <br/> I am a Web Developer.</h1>
            </div>
        </React.Fragment>
    )
}

export default Home;
