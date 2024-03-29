import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import DateCounter from './DateCounter';
import { useContext } from 'react';

import CounterProvider, { CounterContext } from '../../context/CounterProvider';

function MyCount() {
  const { count, step, onClick, onChangeRange } = useContext(CounterContext);
  return (
    <>
      <div>
        <a href='https://vitejs.dev'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <input
          onChange={onChangeRange}
          type='range'
          min='0'
          max='10'
          value={step}
        />
        <button onClick={onClick}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <DateCounter />
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function CounterApp() {
  return (
    <CounterProvider>
      <MyCount />
    </CounterProvider>
  );
}

export default CounterApp;
