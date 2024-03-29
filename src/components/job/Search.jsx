import { useJob } from '../../context/JobContext';

function Search() {
  const { onSearchQuery } = useJob();
  return (
    <search>
      <input onChange={onSearchQuery} type='search' placeholder='Search...' />
    </search>
  );
}

export default Search;
