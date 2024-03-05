import { Link } from 'react-router-dom';
// import usersData from '../../data/users.json'


export default function Users() {

    // const usersData = useLoaderData();


    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                <li><Link to='/users/doe'>John Doe</Link></li>
                <li><Link to='/users/beanit'>Jim Beanit</Link></li>
                {/* {usersData.map(obj => <li><Link key={obj.id} to={`/users/${obj.id}`}>{obj.name}</Link></li>)} */}
            </ul>
        </div>
    )
}

