import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import './App.css';

class LoginModel extends Component {
	state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return (                
	  <a className="btn-login" onClick={this.handleClick}>Login
		  {
			this.state.isShowingModal &&
			<ModalContainer onClose={this.handleClose}>
			  <ModalDialog onClose={this.handleClose}>
				<h1>LOGIN</h1>					
				<form>
				  <label for="username">Username</label>
				  <input type="text" id="username" name="username"/>
				  <label for="password">Password</label>
				  <input type="text" id="password" name="password"/>
				  <input className="btn-submit" type="submit" value="Submit" />
				</form>
			  </ModalDialog>
			</ModalContainer>
		  }
		</a>		 
    );
  } 
  openModal(){  
  }
}
export default LoginModel;