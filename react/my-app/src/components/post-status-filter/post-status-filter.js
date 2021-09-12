import './post-status-filter.css'
const PostStatusFilter = () =>{
    return(
        <div className="btn-group">
            <button className="btn-info btn" type="button">All</button>
            <button className="btn-outline-secondary btn" type="button">Liked</button>

        </div>
    )
}

export default PostStatusFilter;