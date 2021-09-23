import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state = {
			friends: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ friends: users }));
	}

	onSearch = (event) => {
		this.setState({ searchfield: event.target.value });
	}
	render() {
		const filterFriends = this.state.friends.filter(friends =>{
			return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if (this.state.friends.length === 0){
			return <h1 className='tc'>Loading</h1>
		} else {
			return(
				<div className = 'tc'>
					<h1 className = 'f1'>Friends</h1>
					<SearchBar searchChange = {this.onSearch}/>
					<Scroll>
						<ErrorBoundary>
							<CardList friends = {filterFriends}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;