import './post-add-form.css'
import React, {Component} from 'react'
export default class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onValueChange(e){
        this.setState({
            text:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text:''
        })
    }
    render(){
        return (
            <form 
            onSubmit={this.onSubmit}
            className="buttom-panel d-flex">
                <input type="text"
                value={this.state.text}
                onChange={this.onValueChange}
                placeholder="Type"
                className="form-control new-post-label"
                />
                <button 
                 type="submit" className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        )
    }
    
}

