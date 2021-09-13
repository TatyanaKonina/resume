
import { Component } from 'react/cjs/react.production.min'
import {Button} from 'reactstrap'
import './post-status-filter.css'
export default class PostStatusFilter extends Component{
    constructor(props){
        super(props)
        this.buttons = [
            {name: 'all',label:'All'},
            {name: 'like',label:'Liked'},
        ]
    }
    render (){
        const {filter,onFilterSelect} = this.props
        const buttons = this.buttons.map( ({name,label}) => {
            const active = filter === name
            const clss = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                    onClick={()=> onFilterSelect(name)}
                    key={name} 
                    className={`btn ${clss}`} 
                    type="button">{label}</button>
            )
        })
        return(
            <div className="btn-group">

                {buttons}

            </div>
        )
    }
    
}
