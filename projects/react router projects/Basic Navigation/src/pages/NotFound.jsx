// import navlink
import { Navlink } from "react-router-dom"

export default function NotFound() {
    return (
        <main>
            <div>
                <h1>Not Found</h1>
                <p>Sorry the page was not found, return to <Navlink to="/">Homepage</Navlink></p>
            </div>
        </main>
    )
}