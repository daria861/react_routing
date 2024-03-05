import { useLoaderData } from "react-router-dom"
import {Link} from 'react-router-dom';
export default function UserPage(){

    const user = useLoaderData();


    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>
            <img src={user.img} alt="Avatar" />
            <h2>User: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}