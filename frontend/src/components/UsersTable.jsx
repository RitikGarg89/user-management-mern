
import React, { useState } from "react";
import { useSelector } from "react-redux";

function UsersTable({ setActiveUserForm, setSelectedId, setViewUser }) {

    const { users, isLoading, error } = useSelector(state => state.users)

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const filteredUsers = users.filter((user) => {
        const matchesSearch =
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.fullName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            filter === "all" ||
            (filter === "active" && user.isActive) ||
            (filter === "inactive" && !user.isActive);

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="bg-surface rounded-card shadow-card overflow-hidden">

            {/* Toolbar */}
            <div className="p-4 flex flex-wrap items-center justify-between gap-4">

                <div className="flex flex-1 items-center gap-3">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-sm bg-surface-secondary rounded-lg px-4 py-2 text-body-md outline-none focus:ring-1 focus:ring-primary "
                    />

                    {/* Filters */}
                    <div className="flex items-center bg-surface-high rounded-lg p-1">

                        {["all", "active", "inactive"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`px-4 py-2 rounded-md text-body-sm capitalize transition ${filter === item
                                    ? "bg-white shadow-card text-text font-semibold"
                                    : "text-text-muted hover:text-text"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                </div>

                {/* Actions */}
                <div className="flex gap-2">

                    <button className="px-4 py-2 rounded-button bg-status-inactive-bg text-status-inactive hover:bg-red-400 hover:text-status-inactive-bg transition-all duration-300 ease-in-out text-body-sm font-semibold">
                        Delete All
                    </button>

                    <button className="px-4 py-2 rounded-button bg-primary text-white text-body-sm font-semibold hover:bg-primary-hover" onClick={() => setActiveUserForm(true)}>
                        + Add New User
                    </button>

                </div>

            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                    <thead className="bg-surface-secondary">
                        <tr className="text-text-muted text-label-sm uppercase">
                            <th className="px-5 py-3 font-semibold">Username</th>
                            <th className="px-5 py-3 font-semibold">Full Name</th>
                            <th className="px-5 py-3 font-semibold">Email</th>
                            <th className="px-5 py-3 font-semibold">Status</th>
                            <th className="px-5 py-3 font-semibold">Created At</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr
                                key={user._id}
                                onClick={() => { setSelectedId(user._id); setViewUser(true); }}
                                className="border-b border-border/50 hover:bg-surface-secondary/50 transition-colors"
                            >

                                <td className="px-5 py-5 text-primary text-body-md font-medium">
                                    @{user.username}
                                </td>

                                <td className="px-5 py-5 text-text text-body-md font-medium">
                                    {user.fullName}
                                </td>

                                <td className="px-5 py-5 text-text-muted text-body-md">
                                    {user.email}
                                </td>

                                <td className="px-5 py-5">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-body-sm font-medium ${user.isActive
                                        ? "bg-status-active-bg text-status-active"
                                        : "bg-status-inactive-bg text-status-inactive"
                                        }`}>
                                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                        {user.isActive ? "Active" : "Inactive"}
                                    </span>
                                </td>

                                <td className="px-5 py-5 text-text-muted text-body-sm">
                                    {new Date(user.createdAt).toLocaleDateString(
                                        "en-US",
                                        {
                                            month: "short",
                                            day: "2-digit",
                                            year: "numeric"
                                        }
                                    )}
                                </td>
                            </tr>
                        ))}

                        {filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-10 text-text-muted">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default UsersTable;
