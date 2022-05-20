import React from 'react';
import { useDispatch } from 'react-redux';
import logout from '../../assests/images/logout.png';
import { authActions } from '../../Store/authSlice';
import classes from './NavBar.module.css';

const NavBar = (props: any) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    // localStorage.removeItem('userId');
    // console.log(Response.data['userId']);
    // localStorage.setItem('userId', 'false');
    localStorage.removeItem('userId');
    dispatch(authActions.logout());  
    window.location.href = '/'; 
  }
  return (
    <React.Fragment>
      <div className={classes.header}>
        {props.flag && (
          <div>
            <input type="search" className={classes.search} placeholder="Search" />
          </div>
        )}
        {!props.flag && <div className={classes.search}></div>}
        <div className={classes.user}>
          <p>Anjali Gupta</p>
          <img src={logout} alt="" onClick={handleLogout}/>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
