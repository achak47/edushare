import React from 'react';
const Searchz = ({searchfield, searchChange})=>{
    return(
     <input type='search' placeholder='search by question name' className='pa3 ba --green bg-lightest-blue ma2' onChange = {searchChange}  />
    );
}
export default Searchz ;