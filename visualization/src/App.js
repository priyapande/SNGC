import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import VDButton from './components/VDButton'
import logoImg from './images/logo.png';

class App extends Component {

  render() {
    const buttonStyle = {
      padding: "0 10px",
      borderRadius: "5px",
      border: "2px solid #3b8eff",
      backgroundColor: "#fff",
      color: "#3b8eff",
    }
    const headStyle = {
      color:'#303132',
      margin:0,
      paddingLeft:200,
      paddingTop:15,
      fontFamily:'Poppins'
    }
    return (
      <StickyContainer>
        <Sticky>
          <header id="header">
            <nav style={{backgroundColor:'#327BF4'}}>
              <div className="nav-wrapper container" style={{margin:0}}>
                <a className="logo" style={{alignItems:'center'}}>
                  <img src={logoImg} alt="Peanuts logo" style={{height:50,paddingTop:15,paddingLeft:15,float:'left'}}/>
                  <h4 style={headStyle}>
                    Group Dynamics
                  </h4>
                </a>
              </div>
              <VDButton buttonStyle={buttonStyle}> Login </VDButton>
            </nav>
          </header>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default App;
