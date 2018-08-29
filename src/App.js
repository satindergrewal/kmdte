import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

let tokenlist = [
  "012d1e11dd98e5963c49895640d6cc6ed5d24a30cbe07fa4aeaf45618cbaa9c9",
  "b2c7b72667b50583dbbd1854f570659d2861ee10dba82b212ca2c1ee13166e3b",
  "456775c134bf72267c9ff92c4cdbaac977b4c2b727bdab78be775143df93c90d",
  "ccaf9a627f41b91dd53325c4d67cae99746c5d61bf420255af0b06dfa40fd4ad"
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenlist: tokenlist,
    };
  }
  
  render() {
    return (
      <div>
        <TopNavMenu />
        <TokenListTable />
      </div>
    );
  }
}

class TopNavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">KMD Tokens Exchange</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/wallet/">Wallet</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/exchange/">Exchange</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

class TokenListTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenlist: tokenlist,
    }
  }
  render() {
    return (
      <div>
        {this.state.tokenlist.map(item =>
          <div>{item}</div>
        )}
      </div>
    )
  }
}

export default App;
