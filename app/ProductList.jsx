import React from 'react'

class ProductList extends React.Component{
	constructor(props){
		super(props);

		{/*  declare our products here */}

		this.state = {products:[
		
			{
				name:'Computer',
				price:'450$',
				count:1
			},
			{
				name:'Wireless Adapter',
				price:'45$',
				count:1
			},
			{
				name:'Keyboard',
				price:'40$',
				count:1
			},
			{
				name:'Mouse',
				price:'17$',
				count:1
			}
		
		]};
	}

	moreInfo(){
	alert("Hey,im showing details of product");
	}

	addBasket(){
		alert("Hey im adding the items to basket :)");
	}

	render(){

		return (
			<div>
			<h1>All products</h1>
				{/* render our products according to their name and add sampla function these buttons' click event*/}
				 <p>{this.state.products.map(function(item,i){
				 		return(
				 			<div>
				 			<span key={i} className="my_items">{item.name}</span>
				 			<button onClick={this.addBasket} className="btn btn-sm btn-success glyphicon glyphicon-shopping-cart" title="add basket">
				 			</button>
				 			<button onClick={this.addBasket}className="btn btn-sm btn-primary glyphicon glyphicon-info-sign" title="more info"></button>
				 			</div> 
				 		)
				 }.bind(this))}</p>
				
			</div>
		);
	}
}

export default ProductList;