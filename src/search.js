import React from 'react';
const Search = ({searchfield, searchChange})=>{
    return(
     <input type='search' placeholder='search by book name ' className='pa3 ba --green bg-lightest-blue ma2' onChange = {searchChange}  />
    );
}
export default Search ;