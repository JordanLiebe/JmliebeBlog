import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom">
      <Navbar.Brand>Copyright &copy; 2020</Navbar.Brand>
    </Navbar>
  );
};

export default Footer;
