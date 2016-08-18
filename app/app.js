var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createClass({

	getInitialState:function(){
		var products = [
  {id: 1, name: "mouse", price:12},
  {id: 2, name: "keyboard", price:25}
];
return{products:products}
	},

	render:function(){
		return(
			<div className="container">
				<button className="btn btn-sm btn-success">yeah12</button>
				<ProductList my_products={this.state.products} />
			</div>
		)
	}
});

var ProductList = React.createClass({
	getInitialState:function(){
		return{basket:[],basket_empty:false}
	},
	addBasket:function(item_id,item_price, item_name){
		var new_basket = this.state.basket;
		new_basket.push({id:item_id,price:item_price,name:item_name});
		this.setState({basket:new_basket,basket_empty:true});
	},

	render:function(){
		
		return(
			<div className="product-list">
				<h1>Products </h1>

				<div>
				<p>My basket</p>
					{this.state.basket.map(function(item){
						return(
							<p key={item.id}>{item.id}</p>
						)
					})}	
					{this.props.my_products.map(function(item,i){

						return(s
						<div key={i}>
							<p>{item.id}.{item.name}</p>
							<button  onClick={this.addBasket.bind(null,item.id,item.price,item.name)}className="btn btn-primary">add basket</button>
						</div>
						);
					}.bind(this))}
				</div>
			</div>
		)
	}
});

ReactDOM.render(<App/>,document.getElementById('example'));