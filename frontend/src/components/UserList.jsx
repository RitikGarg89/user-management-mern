import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../features/UsersSlice.js"
import UserViewCard from "./UserViewCard.jsx"

function UserList() {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);

    const { users = [], isLoading, error } = useSelector(
        (state) => state.users || {}
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleViewMore = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className='bg-surface-container-lowest border-outline border rounded-xl shadow-card w-full overflow-hidden'>
            {/* Header / Controls */}
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-6 border-b border-outline/20'>
                <div className='flex items-center gap-3'>
                    <p className='text-xl sm:text-headline-lg font-extrabold text-secondary'>All Users</p>
                    <span className='px-2.5 py-0.5 rounded-full text-xs font-semibold bg-surface-container-low text-on-surface-variant'>
                        {users.length} total
                    </span>
                </div>
                <div className='flex flex-col sm:flex-row gap-2.5 sm:items-center'>
                    <form onSubmit={(e) => e.preventDefault()} className='bg-surface-container-low rounded-md h-10 w-full sm:w-60 md:w-64 flex items-center px-2'>
                        <div className='h-6 w-6 flex justify-center items-center shrink-0'>
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.45 13.5L7.725 8.775C7.35 9.075 6.91875 9.3125 6.43125 9.4875C5.94375 9.6625 5.425 9.75 4.875 9.75C3.5125 9.75 2.35938 9.27813 1.41562 8.33438C0.471875 7.39063 0 6.2375 0 4.875C0 3.5125 0.471875 2.35938 1.41562 1.41562C2.35938 0.471875 3.5125 0 4.875 0C6.2375 0 7.39063 0.471875 8.33438 1.41562C9.27813 2.35938 9.75 3.5125 9.75 4.875C9.75 5.425 9.6625 5.94375 9.4875 6.43125C9.3125 6.91875 9.075 7.35 8.775 7.725L13.5 12.45L12.45 13.5V13.5M4.875 8.25C5.8125 8.25 6.60938 7.92188 7.26562 7.26562C7.92188 6.60938 8.25 5.8125 8.25 4.875C8.25 3.9375 7.92188 3.14062 7.26562 2.48438C6.60938 1.82812 5.8125 1.5 4.875 1.5C3.9375 1.5 3.14062 1.82812 2.48438 2.48438C1.82812 3.14062 1.5 3.9375 1.5 4.875C1.5 5.8125 1.82812 6.60938 2.48438 7.26562C3.14062 7.92188 3.9375 8.25 4.875 8.25V8.25" fill="#464555" />
                            </svg>
                        </div>
                        <input type="text" placeholder='Find username, email...' className='w-full bg-transparent px-2 text-sm outline-none' />
                    </form>
                    <div className='flex items-center gap-2 w-full sm:w-auto'>
                        <button className='flex-1 sm:flex-none justify-center px-3.5 bg-error-container text-error flex items-center gap-1.5 h-10 rounded-md text-sm font-medium hover:opacity-90 transition-opacity'>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.75 10.125V8.625H12.75V10.125H9.75ZM9.75 4.125V2.625H15V4.125H9.75ZM9.75 7.125V5.625H14.25V7.125H9.75ZM0.75 2.625H0V1.125H3V0H6V1.125H9V2.625H8.25V9.375C8.25 9.7875 8.10312 10.1406 7.80937 10.4344C7.51562 10.7281 7.1625 10.875 6.75 10.875H2.25C1.8375 10.875 1.48438 10.7281 1.19062 10.4344C0.896875 10.1406 0.75 9.7875 0.75 9.375V2.625ZM2.25 2.625V9.375H6.75V2.625H2.25Z" fill="#93000A" />
                            </svg>
                            Delete All
                        </button>
                        <button className='flex-1 sm:flex-none justify-center bg-primary-container text-on-primary flex gap-1 px-3.5 rounded-md h-10 items-center text-sm font-medium hover:opacity-90 transition-opacity'>
                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.75 7.5V5.25H10.5V3.75H12.75V1.5H14.25V3.75H16.5V5.25H14.25V7.5H12.75V7.5M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6V6M0 12V9.9C0 9.475 0.109375 9.08437 0.328125 8.72812C0.546875 8.37187 0.8375 8.1 1.2 7.9125C1.975 7.525 2.7625 7.23438 3.5625 7.04063C4.3625 6.84688 5.175 6.75 6 6.75C6.825 6.75 7.6375 6.84688 8.4375 7.04063C9.2375 7.23438 10.025 7.525 10.8 7.9125C11.1625 8.1 11.4531 8.37187 11.6719 8.72812C11.8906 9.08437 12 9.475 12 9.9V12H0V12M1.5 10.5H10.5V9.9C10.5 9.7625 10.4656 9.6375 10.3969 9.525C10.3281 9.4125 10.2375 9.325 10.125 9.2625C9.45 8.925 8.76875 8.67188 8.08125 8.50313C7.39375 8.33438 6.7 8.25 6 8.25C5.3 8.25 4.60625 8.33438 3.91875 8.50313C3.23125 8.67188 2.55 8.925 1.875 9.2625C1.7625 9.325 1.67188 9.4125 1.60312 9.525C1.53437 9.6375 1.5 9.7625 1.5 9.9V10.5V10.5M6 4.5C6.4125 4.5 6.76562 4.35312 7.05937 4.05937C7.35312 3.76562 7.5 3.4125 7.5 3C7.5 2.5875 7.35312 2.23438 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23438 4.5 2.5875 4.5 3C4.5 3.4125 4.64688 3.76562 4.94063 4.05937C5.23438 4.35312 5.5875 4.5 6 4.5V4.5M6 3V3V3V3V3V3V3V3V3V3M6 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5" fill="white" />
                            </svg>
                            Add New User
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Table Container */}
            <div className='w-full overflow-x-auto'>
                <table className='border-collapse w-full min-w-[650px] text-sm sm:text-base text-left'>
                    <thead className='bg-surface-container-low text-secondary font-semibold text-xs sm:text-sm'>
                        <tr>
                            <th className='px-4 py-3.5 whitespace-nowrap'>FULLNAME</th>
                            <th className='px-4 py-3.5 whitespace-nowrap'>EMAIL</th>
                            <th className='px-4 py-3.5 whitespace-nowrap'>STATUS</th>
                            <th className='px-4 py-3.5 whitespace-nowrap'>CREATED AT</th>
                            <th className='px-4 py-3.5 whitespace-nowrap'>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-outline/10'>
                        {isLoading ? (
                            <tr>
                                <td colSpan="5" className="text-center py-8 text-on-surface-variant text-sm">
                                    Loading users...
                                </td>
                            </tr>
                        ) : users.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-8 text-on-surface-variant text-sm">
                                    No users found
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user._id} className="hover:bg-surface-container-low/50 transition-colors">
                                    <td className="px-4 py-3.5 sm:py-4 font-medium text-on-surface whitespace-nowrap">
                                        {user.fullName || user.username || "—"}
                                    </td>
                                    <td className="px-4 py-3.5 sm:py-4 text-on-surface-variant whitespace-nowrap">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-3.5 sm:py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold
                                             ${user.isActive
                                                    ? "bg-emerald-50 text-emerald-700"
                                                    : "bg-red-50 text-red-700"
                                                }`}
                                        >
                                            <span
                                                className={`h-2 w-2 rounded-full ${user.isActive ? "bg-emerald-500" : "bg-red-600"
                                                    }`}
                                            />
                                            {user.isActive ? "Active" : "Non-Active"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3.5 sm:py-4 text-on-surface-variant whitespace-nowrap text-xs sm:text-sm">
                                        {user.createdAt ? new Date(user.createdAt).toLocaleString("en-US", {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true
                                        }) : "—"}
                                    </td>
                                    <td className="px-4 py-3.5 sm:py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleViewMore(user)}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2
                                            rounded-lg bg-indigo-50 text-on-surface text-xs sm:text-sm
                                            font-medium shadow-sm hover:bg-indigo-100 transition-colors"
                                        >
                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.33333 8C8.16667 8 8.875 7.70833 9.45833 7.125C10.0417 6.54167 10.3333 5.83333 10.3333 5C10.3333 4.16667 10.0417 3.45833 9.45833 2.875C8.875 2.29167 8.16667 2 7.33333 2C6.5 2 5.79167 2.29167 5.20833 2.875C4.625 3.45833 4.33333 4.16667 4.33333 5C4.33333 5.83333 4.625 6.54167 5.20833 7.125C5.79167 7.70833 6.5 8 7.33333 8V8M7.33333 6.8C6.83333 6.8 6.40833 6.625 6.05833 6.275C5.70833 5.925 5.53333 5.5 5.53333 5C5.53333 4.5 5.70833 4.075 6.05833 3.725C6.40833 3.375 6.83333 3.2 7.33333 3.2C7.83333 3.2 8.25833 3.375 8.60833 3.725C8.95833 4.075 9.13333 4.5 9.13333 5C9.13333 5.5 8.95833 5.925 8.60833 6.275C8.25833 6.625 7.83333 6.8 7.33333 6.8V6.8M7.33333 10C5.71111 10 4.23333 9.54722 2.9 8.64167C1.56667 7.73611 0.6 6.52222 0 5C0.6 3.47778 1.56667 2.26389 2.9 1.35833C4.23333 0.452778 5.71111 0 7.33333 0C8.95556 0 10.4333 0.452778 11.7667 1.35833C13.1 2.26389 14.0667 3.47778 14.6667 5C14.0667 6.52222 13.1 7.73611 11.7667 8.64167C10.4333 9.54722 8.95556 10 7.33333 10V10M7.33333 5V5V5V5V5V5V5V5V5V5M7.33333 8.66667C8.58889 8.66667 9.74167 8.33611 10.7917 7.675C11.8417 7.01389 12.6444 6.12222 13.2 5C12.6444 3.87778 11.8417 2.98611 10.7917 2.325C9.74167 1.66389 8.58889 1.33333 7.33333 1.33333C6.07778 1.33333 4.925 1.66389 3.875 2.325C2.825 2.98611 2.02222 3.87778 1.46667 5C2.02222 6.12222 2.825 7.01389 3.875 7.675C4.925 8.33611 6.07778 8.66667 7.33333 8.66667V8.66667" fill="#131B2E" />
                                            </svg>

                                            View More
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* User View Details Modal */}
            {selectedUser && (
                <UserViewCard
                    user={selectedUser}
                    isOpen={Boolean(selectedUser)}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    )
}

export default UserList;
