
const Error = () => {

    const HandleError = () => {
        window.location.href = "/";

        return (
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Sorry! You got an error!</h4>

                <button className="btn" onClick={HandleError}>Try Again</button>
            </div>
        )
    }
}

export default Error