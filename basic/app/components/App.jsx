import React from 'react';
import sampleJSON from './sampleJSON.json';

class App extends React.Component{
	render(){
		console.log('sampleJSON# ', sampleJSON);
		return(
			<div className='myApp'>
				<img src='app/img/logo.png'/>
				<h1>My React App</h1>
				<div><a href='doc/FT1.pdf'  target='_blank'>Sample Doc</a></div>
			</div>
		);
	}
}

export default App;

