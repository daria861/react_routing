import { useRouteError } from "react-router-dom"

export default function Error() {

    const error = useRouteError()
    console.log(error);

    return (
        <div id="error-page" className="Main">
            <h1>Opps</h1>
            <p>Sorry</p>
        </div>

    )
}