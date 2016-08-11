import React from 'react';
import {render} from 'react-dom';
import ProductList from './ProductList.jsx';
class App extends React.Component{
	render(){
		return (
		<div>
			<h2>Shopping Card App</h2>
			<p>This page contains simple Products List(add,remove,update  basket) and give about info to u price, and result</p>
			<ProductList />
		</div>
		);
	}
}

render(<App/>, document.getElementById('example'));