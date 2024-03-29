import { createContext, useReducer } from 'react';
const initialValue = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'count/inc':
      console.log(state);
      return { ...state, count: state.count + state.step };

    case 'count/dec':
      return { ...state, count: state.count - state.step };
    case 'count/set':
      return { ...state, count: action.payload };
    case 'step':
      console.log(state);
      return { ...state, step: +action.payload };

    case 'reset':
      return initialValue;

    default:
      break;
  }
}

export const CounterContext = createContext();

// eslint-disable-next-line react/prop-types
function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const { count, step } = state;

  // console.log(state);

  const defineCount = function (e) {
    dispatch({ type: 'count/set', payload: Number(e.target.value) });
  };

  const dec = function () {
    dispatch({ type: 'count/dec' });
  };
  function handleClick() {
    console.log(state);
    dispatch({ type: 'count/inc' });
  }

  function handleRange(e) {
    dispatch({ type: 'step', payload: Number(e.target.value) });
  }

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  const value = {
    count,
    step,
    onClick: handleClick,
    onSetCounte: defineCount,
    onChangeRange: handleRange,
    onReset: reset,
    onDec: dec,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default CounterProvider;
