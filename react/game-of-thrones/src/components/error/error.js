import './error.css' 

const Error = () =>{
    return (
   <>
   <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>
    <span>Something wrong</span>
   </>
    )
}
export default Error