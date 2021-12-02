// write your CatList component here

import React, { Component } from 'react';

export default class CatList extends Component {
    render(){
        debugger
        return(
            <ul>
                {this.props.catPics.map(cat => <li><img src="cat" alt="a cat"></img></li>)}
            </ul>
        )
    }
}