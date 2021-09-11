import './post-list-item.css'
const PostListItem =() => {
    return (
        <li className="app-list-item justify-content-between d-flex">
            <span className="app-list-item-label">
                hell
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"  className="btn-star btn-sm">
                    <i className="fa fa-star">
                    </i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash">
                    </i>
                </button>
                <i className="fa fa-heart"></i>

            </div>
        </li>
    )
}
export default PostListItem