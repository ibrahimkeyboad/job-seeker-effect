import { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';

import { useNavigate } from 'react-router-dom';

const JobContext = createContext();

const initialState = {
  users: [],
  name: '',
  email: '',
  skill: '',
  error: '',
  query: '',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'name':
      return { ...state, name: payload, error: '' };
    case 'email':
      return { ...state, email: payload, error: '' };
    case 'skill':
      return { ...state, skill: payload, error: '' };

    case 'reset':
      return { ...state, name: '', email: '', skill: '' };

    case 'user/new':
      return { ...state, users: [...state.users, payload] };
    case 'user/get':
      return { ...state, users: payload };
    case 'user/error':
      return { ...state, error: payload };
    case 'search':
      return { ...state, query: payload };

    default:
      break;
  }
}

// eslint-disable-next-line react/prop-types
function JobProvider({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email, skill, users, error, query } = state;

  function onChangeNameEvent(e) {
    dispatch({ type: 'name', payload: e.target.value });
  }
  function onChangeEmailEvent(e) {
    dispatch({ type: 'email', payload: e.target.value });
  }
  function onChangeSkillEvent(e) {
    dispatch({ type: 'skill', payload: e.target.value });
  }

  function getUser(data) {
    console.log('first');
    dispatch({ type: 'user/get', payload: data });
  }

  function onSearchQuery(e) {
    dispatch({ type: 'search', payload: e.target.value });
  }

  function getData() {
    const users = localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users'))
      : [];

    if (users.length === 0) return;

    const filterUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    getUser(filterUsers);
    console.log(filterUsers);
  }

  useEffect(() => {
    const users = localStorage.getItem('users')
      ? JSON.parse(localStorage.getItem('users'))
      : [];

    if (users.length === 0) return;

    const filterUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    getUser(filterUsers);
    console.log(filterUsers);
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const newuser = {
      name: name.trim(),
      email: email.trim(),
      skill: skill.trim(),
    };

    const existUser = users.map((user) => user.email).includes(email);

    if (existUser) {
      dispatch({ type: 'user/error', payload: 'Please use different email' });
      return;
    }

    if (!name || !email || !skill) {
      dispatch({
        type: 'user/error',
        payload: 'Please fill all the field before you submit',
      });

      return;
    }

    localStorage.setItem('users', JSON.stringify([...users, newuser]));

    dispatch({ type: 'user/new', payload: newuser });

    dispatch({ type: 'reset' });

    navigate('/');
  }

  const value = {
    users,
    onSubmitHandler: submitHandler,
    onChangeEmailEvent,
    onChangeNameEvent,
    onChangeSkillEvent,
    onSearchQuery,
    name,
    email,
    error,
    skill,
    onGetData: getData,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

function useJob() {
  const context = useContext(JobContext);

  return context;
}

export { JobProvider, useJob };
