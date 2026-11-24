import React, { useState } from 'react'

function UserForm({ setActiveUserForm }) {

    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        isActive: true
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                            <span className="text-text-muted text-xl">@</span>
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
                            <span className="text-text-muted text-xl">♙</span>

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
                            <span className="text-text-muted text-xl">✉</span>

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
                            onClick={() => setActiveUserForm(false)}
                            className='px-4 flex-1 py-2 bg-surface-high text-primary rounded-md cursor-pointer'
                        >
                            Close
                        </button>
                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full flex-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-button font-semibold transition-colors"
                        >
                            Add User
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default UserForm