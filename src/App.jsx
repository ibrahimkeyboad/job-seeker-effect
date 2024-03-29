import JobRegister from './components/job/Jobregister';
import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import SearchPage from './components/job/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <JobProvider>
        <Routes>
          <Route path='profile' element={<Profile />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='/register' element={<JobRegister />} />
        </Routes>
      </JobProvider>
    </BrowserRouter>
  );
}

export default App;
