import  { useState } from 'react';
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
  DropdownItem,
  NavbarText,
} from 'reactstrap';
// css
import './Header.css';
import { Link } from 'react-router-dom';


function Header( props )
{
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <Navbar {...props } >
        <NavbarBrand  id="title"> 

        <Link to ="/">   ShopCart   </Link>
       
         </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
          
           
            <UncontrolledDropdown nav inNavbar style={ {marginRight : '2rem'} } >
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>settting</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                 <Link to="/signin">  Logout </Link> 
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText>UserName</NavbarText>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}




export default Header;