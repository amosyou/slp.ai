import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
    <div className='flex-container'>
      <img className='logo_pic' src={require('../logo.jpg')} id='logo_pic'/>
      <h2>Speech language pathologists (SLPs) are medical professionals that 
        offer speech therapy to individuals who experience speech and language disorders. 
        A typical initial SLP assessment is broken down into several sessions due to the 
        volume of tests needed to fully assess the person's possible speech and language 
        disorder. What if there is a program to screen individuals before taking an 
        initial SLP assessment?     
      </h2>

      <h2>
        <strong>slp.ai</strong> helps streamline the assessment process by giving an initial 
        screening test. This program focuses on testing elementary-aged (3-7 years old) 
        children on their cognitive level and their ability to speak in a coherent manner. 
        The test asks for a child to describe an image and returns a probability of how 
        accurate the child's description is. Based on the result, a SLP can analyze whether 
        or not further testing is necessary.
      <br/>
      </h2>
      <Link to="/story">
        <button className = 'buttonStyle'>
          Test
        </button>
      </Link>
    </div>
  );
};
  
export default Home;