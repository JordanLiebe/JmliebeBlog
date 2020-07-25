import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface HeaderProps {
  title: string;
  search?: boolean;
}

interface NavLink {
  id: number;
  title: string;
  link: string;
}

const navLinks: NavLink[] = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Privacy', link: '/privacy' },
];

export const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navLinks.map((item) => (
            <Nav.Link
              key={item.id}
              href={item.link}
              css={css`
                text-align: center;
              `}
            >
              {item.title}
            </Nav.Link>
          ))}
        </Nav>
        <Nav
          css={css`
            text-align: center;
          `}
        >
          <Nav.Link>Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
