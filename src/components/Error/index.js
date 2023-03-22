
const Error = () => {

    const HandleError = () => {
        window.location.href = "/";

    return (
        <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Sorry! You got an error!</h4>
           
            <button className="btn" onClick={HandleError}>Try Again</button>
        </div>
    )
}
}

export default Error