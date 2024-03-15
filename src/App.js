import React from 'react';
import './App.css';
import TablePage from './TablePage';
import { Link } from 'react-router-dom';

import Footer from './Footer';


class NavigationBar extends React.Component {
  render() {
    return (
      <nav>
        <ul className='navtxt'>
          <li><a href="/TablePage.js">Results</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Report">Report</a></li>
        </ul>
      </nav>
    );
  }
}
class BeamCrack extends React.Component {
  state = {
    isDragging: false,
    previousMousePosition: { x: 0, y: 0 },
  };

  handleMouseDown = (event) => {
    this.setState({
      isDragging: true,
      previousMousePosition: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  };

  handleMouseUp = () => {
    this.setState({ isDragging: false });
  };

  handleMouseMove = (event) => {
    if (this.state.isDragging) {
      const delta = {
        x: event.clientX - this.state.previousMousePosition.x,
        y: event.clientY - this.state.previousMousePosition.y,
      };

      const rotationX = delta.y;
      const rotationY = delta.x;

      const beam = document.querySelector('.beam');
      beam.style.transform += `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

      this.setState({
        previousMousePosition: {
          x: event.clientX,
          y: event.clientY,
        },
      });
    }
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h1>VISUAL REPRESENTATION OF A CRACK IN THE BEAM</h1>
        </div>
        <div style={{ marginTop: '80px' }} className="container">
          <div style={{ marginTop: '50px' }} className="beam" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="crack"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } 
}

export default BeamCrack;
