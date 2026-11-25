import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../features/UsersSlice';

function UserForm({ setActiveUserForm, selectedId }) {

    const dispatch = useDispatch()
    const { users } = useSelector(state => state.users)

    const user = users.filter(user => user._id === selectedId)

    const [formData, setFormData] = useState({
        username: user[0]?.username || "",
        fullName: user[0]?.fullName || "",
        email: user[0]?.email || "",
        isActive: user[0]?.isActive ?? true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedId) {
            dispatch(updateUser({
                id: selectedId,
                userData: formData
            }))
        } else {
            dispatch(createUser(formData))
        }
        setActiveUserForm(false);
    };
    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs'
            onClick={() => setActiveUserForm(false)}
        >
            <div
                className='bg-white w-full max-w-[540px] mx-auto rounded-xl shadow-modal'
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className='px-space-lg py-space-md'>
                    <p className='text-text text-headline-lg'>Add User</p>
                    <p className='text-text-muted text-body-lg'>Create a new user account.</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full space-y-6 p-space-lg">

                    {/* Username */}
                    <div className="space-y-2">

                        <label className="text-text text-body-lg font-medium">
                            Username <span className="text-error">*</span>
                        </label>

                        <div className="flex items-center gap-3 bg-surface-secondary rounded-card px-4">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5V8.5875C15 9.325 14.7469 9.95312 14.2406 10.4719C13.7344 10.9906 13.1125 11.25 12.375 11.25C11.9375 11.25 11.525 11.1562 11.1375 10.9688C10.75 10.7812 10.425 10.5125 10.1625 10.1625C9.8 10.525 9.39062 10.7969 8.93437 10.9781C8.47812 11.1594 8 11.25 7.5 11.25C6.4625 11.25 5.57812 10.8844 4.84688 10.1531C4.11563 9.42188 3.75 8.5375 3.75 7.5C3.75 6.4625 4.11563 5.57812 4.84688 4.84688C5.57812 4.11563 6.4625 3.75 7.5 3.75C8.5375 3.75 9.42188 4.11563 10.1531 4.84688C10.8844 5.57812 11.25 6.4625 11.25 7.5V8.5875C11.25 8.9125 11.3563 9.1875 11.5688 9.4125C11.7812 9.6375 12.05 9.75 12.375 9.75C12.7 9.75 12.9688 9.6375 13.1812 9.4125C13.3937 9.1875 13.5 8.9125 13.5 8.5875V7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5H11.25V15H7.5V15M7.5 9.75C8.125 9.75 8.65625 9.53125 9.09375 9.09375C9.53125 8.65625 9.75 8.125 9.75 7.5C9.75 6.875 9.53125 6.34375 9.09375 5.90625C8.65625 5.46875 8.125 5.25 7.5 5.25C6.875 5.25 6.34375 5.46875 5.90625 5.90625C5.46875 6.34375 5.25 6.875 5.25 7.5C5.25 8.125 5.46875 8.65625 5.90625 9.09375C6.34375 9.53125 6.875 9.75 7.5 9.75V9.75" fill="#464555" />
                            </svg>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="e.g. alexander_v"
                                required
                                className="w-full py-3 bg-transparent outline-none text-text placeholder:text-text-muted"
                            />
                        </div>

                    </div>

                    {/* Full Name */}
                    <div className="space-y-2">

                        <label className="text-text text-body-lg font-medium">
                            Full Name <span className="text-error">*</span>
                        </label>


                        <div className="flex items-center gap-3 bg-surface-secondary rounded-card px-4">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V5.25C0 4.8375 0.146875 4.48438 0.440625 4.19063C0.734375 3.89688 1.0875 3.75 1.5 3.75H5.25V1.5C5.25 1.0875 5.39688 0.734375 5.69063 0.440625C5.98438 0.146875 6.3375 0 6.75 0H8.25C8.6625 0 9.01562 0.146875 9.30937 0.440625C9.60312 0.734375 9.75 1.0875 9.75 1.5V3.75H13.5C13.9125 3.75 14.2656 3.89688 14.5594 4.19063C14.8531 4.48438 15 4.8375 15 5.25V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H1.5V15M1.5 13.5H13.5V13.5V13.5V5.25V5.25V5.25H9.75V5.25C9.75 5.6625 9.60312 6.01562 9.30937 6.30937C9.01562 6.60312 8.6625 6.75 8.25 6.75H6.75C6.3375 6.75 5.98438 6.60312 5.69063 6.30937C5.39688 6.01562 5.25 5.6625 5.25 5.25V5.25H1.5V5.25V5.25V13.5V13.5V13.5V13.5M3 12H7.5V11.6625C7.5 11.45 7.44063 11.2531 7.32188 11.0719C7.20312 10.8906 7.0375 10.75 6.825 10.65C6.575 10.5375 6.32188 10.4531 6.06563 10.3969C5.80938 10.3406 5.5375 10.3125 5.25 10.3125C4.9625 10.3125 4.69062 10.3406 4.43437 10.3969C4.17812 10.4531 3.925 10.5375 3.675 10.65C3.4625 10.75 3.29688 10.8906 3.17812 11.0719C3.05937 11.2531 3 11.45 3 11.6625V12V12M9 10.875H12V9.75H9V10.875V10.875M5.25 9.75C5.5625 9.75 5.82812 9.64062 6.04688 9.42188C6.26562 9.20312 6.375 8.9375 6.375 8.625C6.375 8.3125 6.26562 8.04688 6.04688 7.82812C5.82812 7.60938 5.5625 7.5 5.25 7.5C4.9375 7.5 4.67188 7.60938 4.45312 7.82812C4.23438 8.04688 4.125 8.3125 4.125 8.625C4.125 8.9375 4.23438 9.20312 4.45312 9.42188C4.67188 9.64062 4.9375 9.75 5.25 9.75V9.75M9 8.625H12V7.5H9V8.625V8.625M6.75 5.25H8.25V1.5H6.75V5.25V5.25M7.5 9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375" fill="#464555" />
                            </svg>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="e.g. Alexander Vance"
                                required
                                className="w-full py-3 bg-transparent outline-none text-text placeholder:text-text-muted"
                            />
                        </div>


                    </div>

                    {/* Email */}
                    <div className="space-y-2">

                        <label className="text-text text-body-lg font-medium">
                            Email <span className="text-error">*</span>
                        </label>
                        <div className="flex items-center gap-3 bg-surface-secondary rounded-card px-4">
                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5V12M7.5 6.75L1.5 3V10.5V10.5V10.5H13.5V10.5V10.5V3L7.5 6.75V6.75M7.5 5.25L13.5 1.5H1.5L7.5 5.25V5.25M1.5 3V1.5V1.5V3V10.5V10.5V10.5V10.5V10.5V10.5V3V3" fill="#464555" />
                            </svg>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. alexander.v@example.com"
                                required
                                className="w-full py-3 bg-transparent outline-none text-text placeholder:text-text-muted"
                            />
                        </div>
                    </div>

                    {/* Active Status */}
                    <div className="flex items-center justify-between gap-4 bg-surface-secondary rounded-card p-5">

                        <div className="space-y-1">

                            <div className="flex items-center gap-2">
                                <h3 className="text-text text-body-lg font-semibold">
                                    Active Status
                                </h3>

                                <span className={`px-2.5 py-1 rounded-full text-label-sm font-semibold ${formData.isActive
                                    ? "bg-primary-light text-primary"
                                    : "bg-status-inactive-bg text-status-inactive"
                                    }`}>
                                    {formData.isActive ? "Active" : "Inactive"}
                                </span>
                            </div>

                            <p className="text-text-muted text-body-md max-w-100">
                                Toggle to immediately grant or suspend platform authentication credentials.
                            </p>

                        </div>
                        {/* Toggle Button    */}
                        <button
                            type="button"
                            role="switch"
                            aria-checked={formData.isActive}
                            onClick={() =>
                                setFormData((prev) => ({
                                    ...prev,
                                    isActive: !prev.isActive
                                }))
                            }
                            className={`relative w-14 h-8 rounded-full transition-colors shrink-0 ${formData.isActive
                                ? "bg-primary"
                                : "bg-status-inactive"
                                }`}
                        >
                            <span
                                className={`absolute top-1 left-0 h-6 w-6 bg-white rounded-full shadow-card transition-transform ${formData.isActive
                                    ? "translate-x-7"
                                    : "translate-x-1"
                                    }`}
                            />
                        </button>

                    </div>

                    <div className='flex gap-3'>
                        {/* Cancel */}
                        <button
                            type='button'
                            onClick={() => setActiveUserForm(false)}
                            className='font-semibold flex-1 py-3 bg-surface-high text-primary rounded-button cursor-pointer'
                        >
                            Close
                        </button>
                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-button font-semibold transition-colors"
                        >
                            {selectedId ? "Update User" : "Add User"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UserForm