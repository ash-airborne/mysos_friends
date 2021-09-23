import React from 'react';

const SearchBar = ({searchfield, searchChange}) =>{
	return(
		<div className = "pa3 tc ba b--green bg-lightest-blue">
			<input 
				type="search"  
				placeholder="search friends!"
				onChange = {searchChange}
			/>
		</div>
	);
}
export default SearchBar;