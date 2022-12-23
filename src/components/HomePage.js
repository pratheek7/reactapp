import React from 'react';
import '../App.scss';
import { Button } from './Button';
import './HomePage.scss';

function HomePage() {
  return (
    <div className='home-page-container'>
      <p>Nerf guns are plastic toy guns made by Hasbro that fires foam darts, discs, or foam balls.
      Their best known toys are their dart guns that shoot ammunition made from "Nerf foam".
      </p>
      <h1>
        NERF GUN
      </h1>
      <div className='home-page-btn'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          START
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
