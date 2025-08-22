import { useState } from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                    type="text" 
                    value={input}
                    onChange={(event)=> setInput(event.target.value)}
                    placeholder='Search for your preffered city...'
                    
                    />
                </label>
                <button 
                disabled={!input.trim()} 
                type='submit'><SearchIcon /></button>
            </form>
        </div>
    )
};

export default SearchBar;