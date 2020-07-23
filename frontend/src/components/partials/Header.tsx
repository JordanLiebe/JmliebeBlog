import React from 'react';
import { Navbar } from 'react-bootstrap';

interface HeaderProps {
  title: string;
}

export const Header = (Props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">{Props.title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
