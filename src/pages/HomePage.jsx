import Search from '../components/job/Search';
import { Link, Outlet } from 'react-router-dom';
import { useJob } from '../context/JobContext';

function HomePage() {
  const { users } = useJob();

  console.log(users);
  return (
    <>
      <header className='header'>
        <nav>
          <Link to='/profile'>Home </Link>
          <Link to='/search'>Search </Link>
          <Link to='/register'>Register </Link>
        </nav>
        <Search />
      </header>
      <Outlet />
    </>
  );
}

export default HomePage;
