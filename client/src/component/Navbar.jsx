import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background: white;
    color:#000000;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    cursor: pointer;
    & > a {
        padding: 20px;
        color: #000000;
        font-size:20px;
        text-decoration: none;
    }
`;

const Navbar = () => {
  return (
    <Component>
        <Container>
            <Link to="/">Create Post</Link>
            <Link to="/all">ALL Post</Link>
            <Link to="/all/:id"></Link>
        </Container>
    </Component>
  )
}
/***this componet must be imported in app.js */
export default Navbar;

