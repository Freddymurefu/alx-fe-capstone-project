import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

function SearchBar({onSearch}){
    const[input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();        //To prevent the form from submitting by default
        if(input.trim()!==""){ 
        onSearch(input);
        setInput("");

        }

    }


    return(
        <div className='w-full max-w-[800px] mx-auto mt-6 px-2 sm:px-5'>
            <form onSubmit={handleSubmit}
            className='mt-6 flex items-center rounded-full bg-white/80 backdrop-blur px-3 sm:px-5 h-10 sm:h-12 md:h-14 shadow-md focus-within:ring-2 focus-within:ring-black-20'
            >      <div className='relative w-full'>
                    <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5' />
                    <input 
                    type="text" 
                    value={input}
                    onChange={(event)=> setInput(event.target.value)}
                    placeholder='Search for your preffered city...'
                    aria-label='Search city'
                    className='flex-1 bg-transparent px-2 py-2 w-full  pl-10 pr-2 text-gray-700 placeholder:text-sm sm:placeholder:text-lg placeholder-gray-400 focus:outline-none'
                    />
                   </div>
            </form>
        </div>
    )
};

export default SearchBar;