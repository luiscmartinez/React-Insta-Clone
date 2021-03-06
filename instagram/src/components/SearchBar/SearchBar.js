import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import './SearchBar.css'

class TheSearchBar extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <nav>
        <Navbar color='white' light expand='md' className='staticTop'>
          <NavbarBrand className='navbarBrand ' href='/'>
            <i className='fab fa-instagram fa-lg' />
          </NavbarBrand>
          <NavbarBrand className='logo'>Instagram</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <input
              onChange={this.props.handleChange}
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              name='search'
              aria-label='Search'
            />
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>
                  <i className='far fa-compass fa-lg' />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>
                  <i className='far fa-heart fa-lg' />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>
                  <i className='far fa-user fa-lg' />{' '}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    )
  }
}
export default TheSearchBar
