import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/UsersSlice';

function ViewUser({ selectedId, setViewUser, setSelectedId, setActiveUserForm }) {

    const dispatch = useDispatch()

    const { users } = useSelector(state => state.users)
    const user = users.filter(user => user._id === selectedId)
    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs'
            onClick={() => { setSelectedId(null); setViewUser(false); }}
        >
            <div
                className='bg-white w-full max-w-[540px] p-space-xl mx-auto rounded-xl shadow-modal'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center mb-space-lg'>
                    <h3 className='font-sans text-text text-headline-lg font-semibold'>User Details</h3>
                    {/* Status Tag */}
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-body-sm font-medium ${user[0].isActive
                        ? "bg-status-active-bg text-status-active"
                        : "bg-status-inactive-bg text-status-inactive"
                        }`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {user[0].isActive ? "Active" : "Inactive"}
                    </span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 pt-space-lg gap-space-md md:gap-space-lg'>
                    {/* USERNAME */}
                    <div className='p-space-lg bg-surface-high rounded-card shadow-card flex flex-col gap-0.5'>
                        <p className='text-text-muted font-semibold text-body-sm flex items-center gap-1'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5V8.5875C15 9.325 14.7469 9.95312 14.2406 10.4719C13.7344 10.9906 13.1125 11.25 12.375 11.25C11.9375 11.25 11.525 11.1562 11.1375 10.9688C10.75 10.7812 10.425 10.5125 10.1625 10.1625C9.8 10.525 9.39062 10.7969 8.93437 10.9781C8.47812 11.1594 8 11.25 7.5 11.25C6.4625 11.25 5.57812 10.8844 4.84688 10.1531C4.11563 9.42188 3.75 8.5375 3.75 7.5C3.75 6.4625 4.11563 5.57812 4.84688 4.84688C5.57812 4.11563 6.4625 3.75 7.5 3.75C8.5375 3.75 9.42188 4.11563 10.1531 4.84688C10.8844 5.57812 11.25 6.4625 11.25 7.5V8.5875C11.25 8.9125 11.3563 9.1875 11.5688 9.4125C11.7812 9.6375 12.05 9.75 12.375 9.75C12.7 9.75 12.9688 9.6375 13.1812 9.4125C13.3937 9.1875 13.5 8.9125 13.5 8.5875V7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5H11.25V15H7.5V15M7.5 9.75C8.125 9.75 8.65625 9.53125 9.09375 9.09375C9.53125 8.65625 9.75 8.125 9.75 7.5C9.75 6.875 9.53125 6.34375 9.09375 5.90625C8.65625 5.46875 8.125 5.25 7.5 5.25C6.875 5.25 6.34375 5.46875 5.90625 5.90625C5.46875 6.34375 5.25 6.875 5.25 7.5C5.25 8.125 5.46875 8.65625 5.90625 9.09375C6.34375 9.53125 6.875 9.75 7.5 9.75V9.75" fill="#464555" />
                            </svg>
                            USERNAME
                        </p>
                        <p className='text-body-md text-text font-bold'>{user[0].username}</p>
                    </div>
                    {/* FULLNAME */}
                    <div className='p-space-lg bg-surface-high rounded-card shadow-card flex flex-col gap-0.5'>
                        <p className='text-text-muted font-semibold text-body-sm flex items-center gap-1'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V5.25C0 4.8375 0.146875 4.48438 0.440625 4.19063C0.734375 3.89688 1.0875 3.75 1.5 3.75H5.25V1.5C5.25 1.0875 5.39688 0.734375 5.69063 0.440625C5.98438 0.146875 6.3375 0 6.75 0H8.25C8.6625 0 9.01562 0.146875 9.30937 0.440625C9.60312 0.734375 9.75 1.0875 9.75 1.5V3.75H13.5C13.9125 3.75 14.2656 3.89688 14.5594 4.19063C14.8531 4.48438 15 4.8375 15 5.25V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H1.5V15M1.5 13.5H13.5V13.5V13.5V5.25V5.25V5.25H9.75V5.25C9.75 5.6625 9.60312 6.01562 9.30937 6.30937C9.01562 6.60312 8.6625 6.75 8.25 6.75H6.75C6.3375 6.75 5.98438 6.60312 5.69063 6.30937C5.39688 6.01562 5.25 5.6625 5.25 5.25V5.25H1.5V5.25V5.25V13.5V13.5V13.5V13.5M3 12H7.5V11.6625C7.5 11.45 7.44063 11.2531 7.32188 11.0719C7.20312 10.8906 7.0375 10.75 6.825 10.65C6.575 10.5375 6.32188 10.4531 6.06563 10.3969C5.80938 10.3406 5.5375 10.3125 5.25 10.3125C4.9625 10.3125 4.69062 10.3406 4.43437 10.3969C4.17812 10.4531 3.925 10.5375 3.675 10.65C3.4625 10.75 3.29688 10.8906 3.17812 11.0719C3.05937 11.2531 3 11.45 3 11.6625V12V12M9 10.875H12V9.75H9V10.875V10.875M5.25 9.75C5.5625 9.75 5.82812 9.64062 6.04688 9.42188C6.26562 9.20312 6.375 8.9375 6.375 8.625C6.375 8.3125 6.26562 8.04688 6.04688 7.82812C5.82812 7.60938 5.5625 7.5 5.25 7.5C4.9375 7.5 4.67188 7.60938 4.45312 7.82812C4.23438 8.04688 4.125 8.3125 4.125 8.625C4.125 8.9375 4.23438 9.20312 4.45312 9.42188C4.67188 9.64062 4.9375 9.75 5.25 9.75V9.75M9 8.625H12V7.5H9V8.625V8.625M6.75 5.25H8.25V1.5H6.75V5.25V5.25M7.5 9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375" fill="#464555" />
                            </svg>
                            FULL NAME
                        </p>
                        <p className='text-body-md text-text font-bold'>{user[0].fullName}</p>
                    </div>
                    {/* EMAIL */}
                    <div className='p-space-lg bg-surface-high rounded-card shadow-card flex flex-col md:col-span-2 gap-0.5'>
                        <p className='text-text-muted font-semibold text-body-sm flex items-center gap-1'>
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5V12M7.5 6.75L1.5 3V10.5V10.5V10.5H13.5V10.5V10.5V3L7.5 6.75V6.75M7.5 5.25L13.5 1.5H1.5L7.5 5.25V5.25M1.5 3V1.5V1.5V3V10.5V10.5V10.5V10.5V10.5V10.5V3V3" fill="#464555" />
                            </svg>
                            EMAIL ADDRESS
                        </p>
                        <p className='text-body-md text-text font-bold'>{user[0].email}</p>
                    </div>
                    {/* MEMBER SINCE */}
                    <div className='p-space-lg bg-surface-high rounded-card shadow-card flex flex-col gap-0.5'>
                        <p className='text-text-muted font-semibold text-body-sm flex items-center gap-1'>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5V15M1.5 13.5H12V13.5V13.5V6H1.5V13.5V13.5V13.5V13.5M1.5 4.5H12V3V3V3H1.5V3V3V4.5V4.5M1.5 4.5V3V3V3V3V3V3V4.5V4.5V4.5" fill="#464555" />
                            </svg>
                            MEMBER SINCE
                        </p>
                        <p className='text-body-md text-text font-bold'>{new Date(user[0].createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric"
                        }
                        )}
                        </p>
                    </div>
                    {/* LAST MODIFIED */}
                    <div className='p-space-lg bg-surface-high rounded-card shadow-card flex flex-col gap-0.5'>
                        <p className='text-text-muted font-semibold text-body-sm flex items-center gap-1'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.75 13.5C5.8125 13.5 4.93437 13.3219 4.11562 12.9656C3.29688 12.6094 2.58437 12.1281 1.97812 11.5219C1.37188 10.9156 0.890625 10.2031 0.534375 9.38437C0.178125 8.56562 0 7.6875 0 6.75C0 5.8125 0.178125 4.93437 0.534375 4.11562C0.890625 3.29688 1.37188 2.58437 1.97812 1.97812C2.58437 1.37188 3.29688 0.890625 4.11562 0.534375C4.93437 0.178125 5.8125 0 6.75 0C7.775 0 8.74687 0.21875 9.66562 0.65625C10.5844 1.09375 11.3625 1.7125 12 2.5125V0.75H13.5V5.25H9V3.75H11.0625C10.55 3.05 9.91875 2.5 9.16875 2.1C8.41875 1.7 7.6125 1.5 6.75 1.5C5.2875 1.5 4.04688 2.00938 3.02813 3.02813C2.00938 4.04688 1.5 5.2875 1.5 6.75C1.5 8.2125 2.00938 9.45312 3.02813 10.4719C4.04688 11.4906 5.2875 12 6.75 12C8.0625 12 9.20938 11.575 10.1906 10.725C11.1719 9.875 11.75 8.8 11.925 7.5H13.4625C13.275 9.2125 12.5406 10.6406 11.2594 11.7844C9.97812 12.9281 8.475 13.5 6.75 13.5V13.5M8.85 9.9L6 7.05V3H7.5V6.45L9.9 8.85L8.85 9.9V9.9" fill="#464555" />
                            </svg>
                            LAST MODIFIED
                        </p>
                        <p className='text-body-md text-text font-bold'>
                            {new Date(user[0].updatedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric"
                            })}
                        </p>
                    </div>
                </div>
                <div className='pt-space-lg flex justify-between items-center'>
                    <button type="button" className='flex items-center text-primary bg-primary-light font-semibold gap-1 px-space-md py-space-sm rounded-button' onClick={() => { setViewUser(false); setActiveUserForm(true); }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 12H2.56875L9.9 4.66875L8.83125 3.6L1.5 10.9312V12ZM0 13.5V10.3125L9.9 0.43125C10.05 0.29375 10.2156 0.1875 10.3969 0.1125C10.5781 0.0375 10.7688 0 10.9688 0C11.1687 0 11.3625 0.0375 11.55 0.1125C11.7375 0.1875 11.9 0.3 12.0375 0.45L13.0688 1.5C13.2188 1.6375 13.3281 1.8 13.3969 1.9875C13.4656 2.175 13.5 2.3625 13.5 2.55C13.5 2.75 13.4656 2.94062 13.3969 3.12188C13.3281 3.30313 13.2188 3.46875 13.0688 3.61875L3.1875 13.5H0ZM9.35625 4.14375L8.83125 3.6L9.9 4.66875L9.35625 4.14375Z" fill="#3525cd" />
                        </svg>
                        Edit User
                    </button>
                    <button type="button" className='flex items-center text-status-inactive bg-status-inactive-bg font-semibold gap-1 px-space-md py-space-sm rounded-button' onClick={() => { dispatch(deleteUser(selectedId)); setViewUser(false); setSelectedId(null) }}>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.25 13.5C1.8375 13.5 1.48438 13.3531 1.19062 13.0594C0.896875 12.7656 0.75 12.4125 0.75 12V2.25H0V0.75H3.75V0H8.25V0.75H12V2.25H11.25V12C11.25 12.4125 11.1031 12.7656 10.8094 13.0594C10.5156 13.3531 10.1625 13.5 9.75 13.5H2.25V13.5M9.75 2.25H2.25V12V12V12H9.75V12V12V2.25V2.25M3.75 10.5H5.25V3.75H3.75V10.5V10.5M6.75 10.5H8.25V3.75H6.75V10.5V10.5M2.25 2.25V2.25V12V12V12V12V12V12V2.25V2.25" fill="#93000A" />
                        </svg>
                        Delete User
                    </button>
                </div>
            </div>
        </div >
    )
}

export default ViewUser