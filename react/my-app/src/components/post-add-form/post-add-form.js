import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form className="buttom-panel d-flex">
            <input type="text"
            placeholder="Type"
            className="form-control new-post-label"
            />
            <button type="submit" className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    )
}

export default PostAddForm;