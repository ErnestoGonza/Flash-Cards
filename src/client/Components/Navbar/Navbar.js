import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

const Navbar = ({ leftItems }) => {
  // This is how you interact with Redux store with hooks
  // syntax:
  // 'user' is the name of the slice (see userSlice.js)
  // 'email' is a field in the slice
  const email = useSelector((state) => state.user.email);

  return (
    <>
      {email && (
        <div className={styles.row}>
          <div className="nav-link-top">
            <Link to="/library">Alinea</Link>
          </div>
          <div className="nav-link-top">
            <a href="http://localhost:8080/auth/logout">logout</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
