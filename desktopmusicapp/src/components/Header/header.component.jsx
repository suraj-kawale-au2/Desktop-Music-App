import React from 'react';
import {Link} from 'react-router-dom';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBIcon} from 'mdbreact';
import './header.styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
        <header>
          
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>

                <MDBNavbarNav left className="navbarleft">
                    
                        <button className="btn btn-primary rounded">Create Playlist {"   "} <MDBIcon icon="list" /></button>
                    <MDBNavItem>
                        <Link to="/featured">Featured Tracks</Link> 
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link to="/charts">Charts</Link> 
                    </MDBNavItem>
                    <MDBNavItem>
                        <Link to="/videos">Videos</Link> 
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right className="navbar-right">
                  <MDBNavItem active>
                    <MDBIcon icon="cog" />
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBIcon icon="bell" />
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
         

          
        </header>
    );
  }
}

export default Header;