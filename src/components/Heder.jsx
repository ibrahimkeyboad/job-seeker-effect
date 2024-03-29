import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className='header'>
      <nav>
        <Link to='/profile'>Home </Link>
        <Link to='/search'>Search </Link>
        <Link to='/register'>Register </Link>
      </nav>
      {children}
    </header>
  );
}

export default Header;
