import { useJob } from '../../context/JobContext';
import Header from '../Heder';

function SearchPage() {
  const { users, onGetData, onSearchQuery } = useJob();

  console.log(users);
  return (
    <>
      <Header>
        <search>
          <input
            onChange={onSearchQuery}
            type='search'
            placeholder='Search...'
          />
        </search>

        <button onClick={onGetData}>Search</button>
      </Header>
      <main>
        <section>
          {users.length ? (
            users.map((user) => (
              <div key={user.name} className='card'>
                <UserItem {...user} />
              </div>
            ))
          ) : (
            <>No data yet!</>
          )}
        </section>
      </main>
    </>
  );
}

export default SearchPage;

// eslint-disable-next-line react/prop-types
function UserItem({ name, email, skill }) {
  return (
    <>
      <h3>{name}</h3>
      <address>{email}</address>
      <p>{skill}</p>
    </>
  );
}
