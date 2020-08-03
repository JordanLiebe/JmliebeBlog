import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
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
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect, logout, user } = useAuth0();
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
        {isAuthenticated ? (
          <Nav>
            <NavDropdown
              title={'Hello, ' + user.nickname}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                css={css`
                  text-align: center;
                `}
              >
                Account
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => logout()}
                css={css`
                  text-align: center;
                `}
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link
              onClick={() => loginWithRedirect()}
              css={css`
                text-align: center;
              `}
            >
              Sign In
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
