import React from "react";
import {isMobile} from "react-device-detect";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  renderContent() {
    if (isMobile) {
      return (
        <div className='container'>
          <h1>Galaxias de Discursos Presidenciales</h1>
          <h2>Por ahora solo el de Bachelet:</h2>
          <div className='media-list'>
            <Destination description='18K+ frases de Bachelet 2 (2014-2018)'
                      href='#/galaxy/bachelet_2?cx=-455&cy=-647&cz=-2314&lx=-0.2676&ly=-0.8344&lz=-0.2007&lw=0.4381&ml=300&s=1.75&l=1&k=1'
                      media=''
                      name='Bachelet_2'/>
      
         
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <h1>Galaxias de Discursos Presidenciales</h1>
        <h2>Por ahora solo el de Bachelet:</h2>
        <div className='media-list'>
          <Destination description='18K+ frases de Bachelet 2 (2014-2018)'
                    href='#/galaxy/bachelet_2?cx=5745&cy=-6555&cz=-6926&lx=0.1214&ly=0.9088&lz=-0.2576&lw=0.3049&ml=300&s=1.75&l=1&k=1'
                    media=''
                    name='Bachelet_2'/>
    
       
        </div>
      </div>
    );
  }
  render() {
    return this.renderContent();
  }
}
