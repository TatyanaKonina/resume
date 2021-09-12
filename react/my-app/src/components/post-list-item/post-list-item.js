import React,{Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important:false,
            like:false
        }
        this.onImportant = this.onImportant.bind(this)
        this.onLike = this.onLike.bind(this)
    }
    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike(){
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render (){

        const {label,onDelete} = this.props
        const {important,like} = this.state
        let classNames = 'app-list-item justify-content-between d-flex'
        classNames = important ? classNames + ' important' : classNames
        classNames = like ? classNames + ' like': classNames
        return (
            <div className={classNames}>
                <span onClick={this.onLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"  className="btn-star btn-sm">
                        <i className="fa fa-star"
                        onClick={this.onImportant}>
                        </i>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash">
                        </i>
                    </button>
                    <i className="fa fa-heart"></i>

                </div>
            </div>
        )
    }
}

