import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import StatusCard from '../components/StatusCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../features/UsersSlice.js"

function DashBoard() {

    const dispatch = useDispatch();

    const { users, isLoading, error } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const totalUsers = users.length;

    const activeUsers = users.filter(
        (user) => user.isActive === true
    ).length;

    const inactiveUsers = users.filter(
        (user) => user.isActive === false
    ).length;

    const statusCards = [
        {
            title: "Total Users",
            count: totalUsers,
        },
        {
            title: "Active Users",
            count: activeUsers,

        },
        {
            title: "Non-active Users",
            count: inactiveUsers,
        }
    ];

    return (
        <header>
            <Header />
            <main>
                {statusCards.map(status =>
                    <StatusCard key={status.title} title={status.title} icon={'b'} value={status.count} />
                )}
            </main>
        </header>
    )
}

export default DashBoard