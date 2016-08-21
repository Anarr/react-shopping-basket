var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createClass({

	getInitialState:function(){
		var products = [
  {id: 1, name: "mouse", price:12},
  {id: 2, name: "keyboard", price:25},
  {id: 3, name: "camera", price:17},
];
return{products:products}
	},

	render:function(){
		return(
			<div className="container">
			<div className="row">
				<button className="btn btn-sm btn-success">add new product</button>
				
				<ProductList my_products={this.state.products} />

			</div>
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
		var default_count=1;

		if(!new_basket.length){
			new_basket.push({id:item_id,name:item_name,price:item_price,count:default_count});
		}
		else{
			for(var i=0;i<new_basket.length;i++){
				if(new_basket[i].id == item_id){	
					new_basket[i].count+=1;
					break;
				}
				else if(i==new_basket.length-1)
					{
						
						new_basket.push({id:item_id,name:item_name,price:item_price,count:default_count});
						break;
					}
				
			}

		}
		this.setState({basket:new_basket,basket_empty:true});
		// console.log(this.state.basket);
	},

	render:function(){
			
		return(
			<div className="col-md-8">
				<h1>Products </h1>

				<div>	
					{this.props.my_products.map(function(item,i){

						return(
						<div key={i}>
							<p>{item.id}.{item.name}</p>
							<button  onClick={this.addBasket.bind(null,item.id,item.price,item.name)}className="btn btn-primary">add basket</button>
						</div>
						);
					}.bind(this))}
				</div>
				<UserBasket inside={this.state.basket}/>
			</div>
		)
	}
});

var UserBasket = React.createClass({

	render:function(){
		var products_count = this.props.inside.length;
		var sum = 1;
		var total_amount=0;
		
		return (
			<div className = "userbasket">
				<h3>This is user basket ({products_count})</h3>

				<ul>
				{this.props.inside.map(function (item,i) {
					sum = item.price * item.count;
					total_amount+=sum;
					return(
						<div key={i}>
							<li>{item.id}</li>
							<li>{item.name}</li>
							<li>{sum}$</li>
							<li>{item.count}</li>
							<button className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span></button>
							<hr />
						</div>
					)
				})}
					<p>Total amount is: {total_amount}$</p>
				</ul>
			</div>
		)

	}
});


ReactDOM.render(<App/>,document.getElementById('example'));