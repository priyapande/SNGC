import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { connect } from 'react-redux';
import * as actioncreators from './actioncreator';
import './App.css';
import VDButton from './components/VDButton';
import { browserHistory } from 'react-router';

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
		//console.log(user);
		//console.log(pass);
		this.setState({
			user:user,
			pass:pass
		});
	}

	redirect = (userId) => {
		this.handleClose();
		browserHistory.push("/user/"+userId);
	}

	handleSubmit = async event => {
		//console.log("heer");
		event.preventDefault();
		try {
			await this.props.login(this.state.user,this.state.pass);
			const userId = this.props.userId;
			//console.log(userId);
			//browserHistory.push('/user');
			this.redirect(userId)
			//return (<Link to="/user/:userId" />)
		}
		catch(e) {
			console.log(e);
		}
	}

	logout() {
		this.props.logout();
	}

  render() {
    return (
			<div>
			{this.props.isLoggedIn? <a className="btn-login" onClick={()=>{this.logout()}}>Logout</a> :
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
			}
			</div>
    );
  }
}

const mapStateToProps = ({user}, ownProps) => {
  return {
    isSyncing: user.isSyncing,
		isLoggedIn:user.isLoggedIn,
		userId:user.userId,
    className: ownProps.className,
    error: user.error
  };
}

export default connect(mapStateToProps,actioncreators)(LoginModel);
