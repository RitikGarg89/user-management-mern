import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "../features/UsersSlice.js"
import UserRow from './UserRow.jsx';

function UserList() {
    const dispatch = useDispatch();

    const { users, isLoading, error } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    return (
        <div className='bg-surface-container-lowest border-outline border rounded-xl w-full'>
            <div className='flex justify-between items-center p-6 '>
                <div className='flex items-center gap-3'>
                    <p className='text-headline-lg font-extrabold text-secondary'>All Users</p>
                    <p>8 total</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <form className=' bg-surface-container-low rounded-md h-10 w-3xs flex '>
                        <div className='h-10 w-10 pt-1 flex justify-center items-center'>
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.45 13.5L7.725 8.775C7.35 9.075 6.91875 9.3125 6.43125 9.4875C5.94375 9.6625 5.425 9.75 4.875 9.75C3.5125 9.75 2.35938 9.27813 1.41562 8.33438C0.471875 7.39063 0 6.2375 0 4.875C0 3.5125 0.471875 2.35938 1.41562 1.41562C2.35938 0.471875 3.5125 0 4.875 0C6.2375 0 7.39063 0.471875 8.33438 1.41562C9.27813 2.35938 9.75 3.5125 9.75 4.875C9.75 5.425 9.6625 5.94375 9.4875 6.43125C9.3125 6.91875 9.075 7.35 8.775 7.725L13.5 12.45L12.45 13.5V13.5M4.875 8.25C5.8125 8.25 6.60938 7.92188 7.26562 7.26562C7.92188 6.60938 8.25 5.8125 8.25 4.875C8.25 3.9375 7.92188 3.14062 7.26562 2.48438C6.60938 1.82812 5.8125 1.5 4.875 1.5C3.9375 1.5 3.14062 1.82812 2.48438 2.48438C1.82812 3.14062 1.5 3.9375 1.5 4.875C1.5 5.8125 1.82812 6.60938 2.48438 7.26562C3.14062 7.92188 3.9375 8.25 4.875 8.25V8.25" fill="#464555" />
                            </svg>
                        </div>
                        <input type="text" placeholder='Find username, email...' className='py-3' />
                    </form>
                    <button className='px-3.5 bg-error-container text-error flex items-center gap-1.5 h-10 rounded-md '>
                        <div>
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.75 10.125V8.625H12.75V10.125H9.75ZM9.75 4.125V2.625H15V4.125H9.75ZM9.75 7.125V5.625H14.25V7.125H9.75ZM0.75 2.625H0V1.125H3V0H6V1.125H9V2.625H8.25V9.375C8.25 9.7875 8.10312 10.1406 7.80937 10.4344C7.51562 10.7281 7.1625 10.875 6.75 10.875H2.25C1.8375 10.875 1.48438 10.7281 1.19062 10.4344C0.896875 10.1406 0.75 9.7875 0.75 9.375V2.625ZM2.25 2.625V9.375H6.75V2.625H2.25Z" fill="#93000A" />
                            </svg>
                        </div>
                        Delete All
                    </button>
                    <button className='bg-primary-container text-on-primary flex gap-1 px-3.5 rounded-md h-10 items-center'>
                        <div>
                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.75 7.5V5.25H10.5V3.75H12.75V1.5H14.25V3.75H16.5V5.25H14.25V7.5H12.75V7.5M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6V6M0 12V9.9C0 9.475 0.109375 9.08437 0.328125 8.72812C0.546875 8.37187 0.8375 8.1 1.2 7.9125C1.975 7.525 2.7625 7.23438 3.5625 7.04063C4.3625 6.84688 5.175 6.75 6 6.75C6.825 6.75 7.6375 6.84688 8.4375 7.04063C9.2375 7.23438 10.025 7.525 10.8 7.9125C11.1625 8.1 11.4531 8.37187 11.6719 8.72812C11.8906 9.08437 12 9.475 12 9.9V12H0V12M1.5 10.5H10.5V9.9C10.5 9.7625 10.4656 9.6375 10.3969 9.525C10.3281 9.4125 10.2375 9.325 10.125 9.2625C9.45 8.925 8.76875 8.67188 8.08125 8.50313C7.39375 8.33438 6.7 8.25 6 8.25C5.3 8.25 4.60625 8.33438 3.91875 8.50313C3.23125 8.67188 2.55 8.925 1.875 9.2625C1.7625 9.325 1.67188 9.4125 1.60312 9.525C1.53437 9.6375 1.5 9.7625 1.5 9.9V10.5V10.5M6 4.5C6.4125 4.5 6.76562 4.35312 7.05937 4.05937C7.35312 3.76562 7.5 3.4125 7.5 3C7.5 2.5875 7.35312 2.23438 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23438 4.5 2.5875 4.5 3C4.5 3.4125 4.64688 3.76562 4.94063 4.05937C5.23438 4.35312 5.5875 4.5 6 4.5V4.5M6 3V3V3V3V3V3V3V3V3V3M6 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5" fill="white" />
                            </svg>
                        </div>
                        Add New User
                    </button>
                </div>
            </div>
            <table className='border-collapse w-full text-body-lg text-left '>
                <thead className='bg-surface-container-low text-secondary font-semibold'>
                    <tr>
                        <th className='px-2 py-3.5'>FULLNAME</th>
                        <th className='px-2 py-3.5'>EMAIL</th>
                        <th className='px-2 py-3.5'>STATUS</th>
                        <th className='px-2 py-3.5'>CREATED AT</th>
                        <th className='px-2 py-3.5'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="px-2 py-3.5">{user.fullName}</td>
                            <td className="px-2 py-3.5">{user.email}</td>
                            <td className="px-2 py-3.5">
                                <span
                                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
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
                            <td className="px-4 py-5 text-on-surface-variant whitespace-nowrap">
                                {new Date(user.createdAt).toLocaleString("en-US", {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true
                                })}
                            </td>
                            <td className="px-4 py-5 text-left">
                                <button
                                    onClick={() => handleViewMore(user)}
                                    className="inline-flex items-center gap-2 px-4 py-2.5
                                    rounded-xl bg-indigo-50 text-on-surface
                                    font-medium shadow-sm hover:bg-indigo-100
                                    transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>

                                    View More
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UserList;