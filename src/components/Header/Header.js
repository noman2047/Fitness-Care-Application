import './Header.css'
import logo from '../../images/Logo.svg'


const Header = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="" />
      <div>
        <a href="/order">Order</a>
        <a href="/orderReview">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;