import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { connect } from 'react-redux';
import * as actioncreators from './actioncreator';
import './App.css';
import VDButton from './components/VDButton';

class LoginModel extends Component {
	constructor(props) {
    super(props);
    this.state = {user: '',
									pass:'',
								isShowingModal: false
							};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
  }

  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

	handleChange = (event) => {
		const target = event.target;
		const user = target.id==="username" ? target.value: this.state.user;
		const pass = target.id==="password" ? target.value: this.state.pass;
		console.log(user);
		console.log(pass);
		this.setState({
			user:user,
			pass:pass
		});
	}

	handleSubmit = (event) => {
		console.log("heer");
		this.props.login(this.state.user,this.state.pass);

		event.preventDefault();
	}

  render() {
    return (
			<div>
		  	<a className="btn-login" onClick={this.handleClick}>Login
				  {
					this.state.isShowingModal &&
					<ModalContainer onClose={this.handleClose}>
					  <ModalDialog onClose={this.handleClose}>
						<h3 style={{alignSelf:'center'}}>Login</h3>
						<form onSubmit={this.handleSubmit}>
						  <label for="username">Username</label>
						  <input type="text" id="username" name="username" onChange={this.handleChange}/>
						  <label for="password">Password</label>
						  <input type="password" id="password" name="password" onChange={this.handleChange}/>
						  <VDButton>Login</VDButton>
						</form>
					  </ModalDialog>
					</ModalContainer>
				  }
				</a>
		</div>
    );
  }
}

const mapStateToProps = ({user}, ownProps) => {
  return {
    isSyncing: user.isSyncing,
    className: ownProps.className,
    error: user.error
  };
}

export default connect(mapStateToProps,actioncreators)(LoginModel);
