import { useJob } from '../../context/JobContext';
import { useNavigate } from 'react-router-dom';

function JobRegister() {
  const {
    name,
    email,
    skill,
    onSubmitHandler,
    onChangeEmailEvent,
    onChangeNameEvent,
    onChangeSkillEvent,
    error,
  } = useJob();

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <form onSubmit={onSubmitHandler}>
        <input
          required
          value={name}
          onChange={onChangeNameEvent}
          type='text'
          placeholder='Name'
        />

        <input
          name=''
          required
          value={email}
          onChange={onChangeEmailEvent}
          type='email'
          placeholder='Email address'
        />

        <select value={skill} onChange={onChangeSkillEvent}>
          <option value=''>Select your skill</option>
          <option value='driver'>Driver</option>
          <option value='developer'>Developer</option>
          <option value='singer'>Singer</option>
        </select>

        <button type='submit'>Submit</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </div>
  );
}

export default JobRegister;
