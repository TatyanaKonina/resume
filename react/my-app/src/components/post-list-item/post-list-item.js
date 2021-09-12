import React,{Component} from 'react'
import './post-list-item.css'

export default class PostListItem extends Component {

    render (){

        const {label,onDelete, onToggleImportant,onToggleLike,important,like} = this.props

        let classNames = 'app-list-item justify-content-between d-flex'
        classNames = important ? classNames + ' important' : classNames
        classNames = like ? classNames + ' like': classNames
        return (
            <div className={classNames}>
                <span onClick={onToggleLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"  className="btn-star btn-sm">
                        <i className="fa fa-star"
                        onClick={onToggleImportant}>
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

