import { useContext } from 'react';
import { CounterContext } from '../../context/CounterProvider';

function DateCounter() {
  const { count, step, onClick, onChangeRange, onSetCounte, onReset, onDec } =
    useContext(CounterContext);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={onChangeRange}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={onDec}>-</button>
        <input value={count} onChange={onSetCounte} />
        <button onClick={onClick}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
