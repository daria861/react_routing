import { Link, useLoaderData} from 'react-router-dom';



export function Users() {

    const {users} = useLoaderData();



    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {users?.map(obj => <li key={obj.id}><Link to={`/users/${obj.id}`}>{obj.name}</Link></li>)}
            </ul>
        </div>
    )
}


async function loader(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();   
    return {users};
}


export default loader;