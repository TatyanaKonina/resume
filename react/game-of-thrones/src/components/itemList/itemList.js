import React, {Component} from 'react';
import  Spinner from '../spinner';
import gotService from '../../services/gotServices';
import Error from '../error';
import './itemList.css';
export default class ItemList extends Component {
    gotService = new gotService()
    state = {
        charList:null,
        error: false
    }
    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    error: false
                });
            })
            // .catch(() => {this.onError()});
    }

    renderItems(arr){
        
        return arr.map((item,i)=>{
            return(
                <li 
                    key={i}
                    onClick={ () => this.props.onCharSelected(41 + i)}
                    className="list-group-item">
                        {item.name}
                </li>
        )})
    }
    render() {
        const {charList} = this.state
        
       
        if (!charList){
            return <Spinner/>
        } 
        const items = this.renderItems(charList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}