import './post-add-form.css'

const PostAddForm = ({onAdd}) => {
    return (
        <div className="buttom-panel d-flex">
            <input type="text"
            placeholder="Type"
            className="form-control new-post-label"
            />
            <button 
            onClick={()=>{onAdd('hello')}} type="submit" className="btn btn-outline-secondary">
                Add
            </button>
        </div>
    )
}

export default PostAddForm;