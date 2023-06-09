import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className='p-2 text-gray-400 focus-within:text-gray-600'
    >
      <label htmlFor="search-field" className='sr-only'>
        Search all files
      </label>
      <div className='flex flex-row justify-start items-center'>
        <FiSearch aria-hidden="true" className='w-5 h-5 ml-4' />
        <input 
          type="search" 
          name="search-field" 
          id="search-field"
          className='flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4' 
          placeholder='Search'
          value={searchTerm}
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}
