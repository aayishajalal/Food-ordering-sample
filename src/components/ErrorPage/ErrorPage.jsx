import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <div>
                Error Page
            </div>
            <p>{error.status}</p>
            <p>{ error.statusText}</p>
        </>
    )
}

export default ErrorPage;