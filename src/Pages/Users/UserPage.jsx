import {Link, useLoaderData} from 'react-router-dom';
export function UserPage(){

    const {user, id} = useLoaderData();


    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>

            <h2>User: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Website: {user.website}</h2>
            <h2>Phone: {user.phone}</h2>
        </div>
    )
}

async function userLoader({params}){
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json();

    
    return {user, id}
}

export default userLoader;