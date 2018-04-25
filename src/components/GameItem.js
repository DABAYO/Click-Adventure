import React, {Component} from "react";
import "./GameItem.css";

class GameItem extends Component{
	constructor() {
		super();

		this.displayGameItems = ()=>{
			let list=[];
			let images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
			images = images.keys().map(function(image){
				return image;
			});
			const charsNameList =images.map(x=>x.substring(11, x.indexOf(".png")));
			let len = images.length;
			for (let i=0; i<12; i++){
				let random = Math.floor((Math.random()*len));
				list.push(<img key={Math.floor((Math.random()*9239))} src={"/images/"+ images[random]} alt="Character" onClick={this.clickHandler} char={charsNameList[random]}></img>);
			}
			return list;
		}; 
		this.list =this.displayGameItems();
		this.clickHandler = this.clickHandler.bind(this);
	};
	clickHandler = event=>{
		this.list =this.displayGameItems();
		this.props.onClick(event);

	}
	render(){
		return this.list
	}
}

export default GameItem;  


// test this algorithm from Slack for randomizing:

// function shuffle(array) {
// 	var currentIndex = array.length, temporaryValue, randomIndex;
  
// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {
  
// 	  // Pick a remaining element...
// 	  randomIndex = Math.floor(Math.random() * currentIndex);
// 	  currentIndex -= 1;
  
// 	  // And swap it with the current element.
// 	  temporaryValue = array[currentIndex];
// 	  array[currentIndex] = array[randomIndex];
// 	  array[randomIndex] = temporaryValue;
// 	}
  
// 	return array;
//   }