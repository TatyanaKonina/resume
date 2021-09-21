import React, {Component} from 'react';
import  Spinner from '../spinner';

import Error from '../error';
import './itemList.css';
export default class ItemList extends Component {
    
    state = {
        itemList:null,
        error: false
    }
    componentDidMount() {
        const {getData} = this.props
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
            // .catch(() => {this.onError()});
    }

    renderItems(arr){
        
        return arr.map((item,i)=>{
            const {id} = item;
            const label = this.props.renderItem(item)
            return(
                <li 
                    key={i}
                    onClick={ () => this.props.onCharSelected(id)}
                    className="list-group-item">
                        {label}
                </li>
        )})
    }
    render() {
        const {itemList} = this.state
        
       
        if (!itemList){
            return <Spinner/>
        } 
        const items = this.renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}