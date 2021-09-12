
import {Button} from 'reactstrap'
import './post-status-filter.css'
const PostStatusFilter = () =>{
    return(
        <div className="btn-group">
            <Button  color="info" >All</Button>
            <button className="btn-info btn" type="button">All</button>
            <button className="btn-outline-secondary btn" type="button">Liked</button>

        </div>
    )
}

export default PostStatusFilter;