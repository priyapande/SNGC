import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { home } from 'react-icons-kit/icomoon/home';
import { profile } from 'react-icons-kit/icomoon/profile';
import { location } from 'react-icons-kit/icomoon/location';
import { bubbles } from 'react-icons-kit/icomoon/bubbles';


//specify the base color/background of the parent container if needed
class VDSideNav extends React.Component {
  render(){
    return(
    <div style={{background: '#18149A', color: '#FFF', width: 200,marginTop:20,zIndex:1}}>
        <SideNav highlightColor='#18149A' highlightBgColor='#FFF' defaultSelected='Home'>
        <a onClick={()=>browserHistory.push('/')}>
            <Nav id='Home'>
                <NavIcon><SvgIcon size={20} icon={home}/></NavIcon>
                <NavText> Home </NavText>
            </Nav>
        </a>
        <a onClick={()=>{
          if(1) {

            browserHistory.push('/user/'+this.props.userId);
          }
          else {
            alert("Please Login first");
          }
        }}>
            <Nav id='Profile'>
                <NavIcon><SvgIcon size={20} icon={profile}/></NavIcon>
                <NavText> Profile </NavText>
            </Nav>
        </a>
            <Nav id='Location'>
                <NavIcon><SvgIcon size={20} icon={location}/></NavIcon>
                <NavText> Location </NavText>
            </Nav>
            <Nav id='FeedBack'>
                <NavIcon><SvgIcon size={20} icon={bubbles}/></NavIcon>
                <NavText> FeedBack </NavText>
            </Nav>
        </SideNav>
    </div>
);
}
}

const mapStateToProps = ({user}) => {
  return {
    isLoggedIn:user.isLoggedIn,
    userId:user.userId
  }
}

export default connect(mapStateToProps)(VDSideNav);
