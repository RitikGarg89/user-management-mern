import React, { useState } from 'react'

function UserViewCard({ user, isOpen = true, onClose, onEdit }) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    // Fallback preview data matching the Stitch design if no user is provided
    const displayUser = user || {
        _id: "67123456789abcdef0123456",
        username: "sophia.chen",
        fullName: "Sophia Chen",
        email: "sophia.chen@techcorp.com",
        isActive: true,
        createdAt: "2024-10-18T09:45:12.000Z"
    };

    const handleCopyEmail = () => {
        if (displayUser.email) {
            navigator.clipboard.writeText(displayUser.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const formattedDate = displayUser.createdAt
        ? new Date(displayUser.createdAt).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZoneName: "short"
        })
        : "—";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            {/* Modal Card */}
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-modal border border-outline/15 overflow-hidden flex flex-col transition-all">
                
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-outline/10">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 flex items-center justify-center bg-[#EEECFF] text-[#3525CD] rounded-lg shrink-0">
                            {/* ID Document Icon */}
                            <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V5.83333C0 5.375 0.163194 4.98264 0.489583 4.65625C0.815972 4.32986 1.20833 4.16667 1.66667 4.16667H5.83333V1.66667C5.83333 1.20833 5.99653 0.815972 6.32292 0.489583C6.64931 0.163194 7.04167 0 7.5 0H9.16667C9.625 0 10.0174 0.163194 10.3438 0.489583C10.6701 0.815972 10.8333 1.20833 10.8333 1.66667V4.16667H15C15.4583 4.16667 15.8507 4.32986 16.1771 4.65625C16.5035 4.98264 16.6667 5.375 16.6667 5.83333V15C16.6667 15.4583 16.5035 15.8507 16.1771 16.1771C15.8507 16.5035 15.4583 16.6667 15 16.6667H1.66667ZM1.66667 15H15V5.83333H10.8333C10.8333 6.29167 10.6701 6.68403 10.3438 7.01042C10.0174 7.33681 9.625 7.5 9.16667 7.5H7.5C7.04167 7.5 6.64931 7.33681 6.32292 7.01042C5.99653 6.68403 5.83333 6.29167 5.83333 5.83333H1.66667V15ZM3.33333 13.3333H8.33333V12.9583C8.33333 12.7222 8.26736 12.5035 8.13542 12.3021C8.00347 12.1007 7.81944 11.9444 7.58333 11.8333C7.30556 11.7083 7.02431 11.6146 6.73958 11.5521C6.45486 11.4896 6.15278 11.4583 5.83333 11.4583C5.51389 11.4583 5.21181 11.4896 4.92708 11.5521C4.64236 11.6146 4.36111 11.7083 4.08333 11.8333C3.84722 11.9444 3.66319 12.1007 3.53125 12.3021C3.39931 12.5035 3.33333 12.7222 3.33333 12.9583V13.3333ZM10 12.0833H13.3333V10.8333H10V12.0833ZM5.83333 10.8333C6.18056 10.8333 6.47569 10.7118 6.71875 10.4688C6.96181 10.2257 7.08333 9.93056 7.08333 9.58333C7.08333 9.23611 6.96181 8.94097 6.71875 8.69792C6.47569 8.45486 6.18056 8.33333 5.83333 8.33333C5.48611 8.33333 5.19097 8.45486 4.94792 8.69792C4.70486 8.94097 4.58333 9.23611 4.58333 9.58333C4.58333 9.93056 4.70486 10.2257 4.94792 10.4688C5.19097 10.7118 5.48611 10.8333 5.83333 10.8333ZM10 9.58333H13.3333V8.33333H10V9.58333ZM7.5 5.83333H9.16667V1.66667H7.5V5.83333Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-on-surface leading-snug">User Details</h2>
                            <p className="text-xs text-on-surface-variant font-medium">MongoDB Document Inspection</p>
                        </div>
                    </div>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="h-8 w-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
                        title="Close"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="1" y1="1" x2="13" y2="13"></line>
                            <line x1="13" y1="1" x2="1" y2="13"></line>
                        </svg>
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col gap-5">
                    
                    {/* User Profile Card */}
                    <div className="p-4 sm:p-5 rounded-xl bg-[#F4F6FE] border border-outline/10 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-on-surface leading-tight">
                                {displayUser.fullName || displayUser.username}
                            </h3>
                            <p className="text-xs sm:text-sm text-secondary font-mono mt-0.5">
                                @{displayUser.username || "username"}
                            </p>
                        </div>
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            displayUser.isActive 
                                ? "bg-[#ECFDF5] text-[#047857]" 
                                : "bg-[#FEF2F2] text-[#B91C1C]"
                        }`}>
                            <span className={`h-2 w-2 rounded-full ${
                                displayUser.isActive ? "bg-[#10B981]" : "bg-[#EF4444]"
                            }`} />
                            {displayUser.isActive ? "Active" : "Non-Active"}
                        </div>
                    </div>

                    {/* Properties List */}
                    <div className="rounded-xl border border-outline/15 divide-y divide-outline/10 text-sm overflow-hidden">
                        
                        {/* Username Row */}
                        <div className="flex items-center justify-between p-3.5 sm:px-4 sm:py-3.5 hover:bg-surface-container-low/40 transition-colors">
                            <div className="flex items-center gap-2.5 text-on-surface-variant">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span className="font-medium text-xs sm:text-sm">Username</span>
                            </div>
                            <span className="font-mono text-on-surface text-xs sm:text-sm font-medium">
                                {displayUser.username || "—"}
                            </span>
                        </div>

                        {/* Full Name Row */}
                        <div className="flex items-center justify-between p-3.5 sm:px-4 sm:py-3.5 hover:bg-surface-container-low/40 transition-colors">
                            <div className="flex items-center gap-2.5 text-on-surface-variant">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                                    <circle cx="9" cy="10" r="2"></circle>
                                    <line x1="15" y1="8" x2="17" y2="8"></line>
                                    <line x1="15" y1="12" x2="17" y2="12"></line>
                                    <line x1="7" y1="16" x2="17" y2="16"></line>
                                </svg>
                                <span className="font-medium text-xs sm:text-sm">Full Name</span>
                            </div>
                            <span className="text-on-surface font-medium text-xs sm:text-sm">
                                {displayUser.fullName || "—"}
                            </span>
                        </div>

                        {/* Email Row with Copy Button */}
                        <div className="flex items-center justify-between p-3.5 sm:px-4 sm:py-3.5 hover:bg-surface-container-low/40 transition-colors">
                            <div className="flex items-center gap-2.5 text-on-surface-variant">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span className="font-medium text-xs sm:text-sm">Email</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-on-surface font-medium text-xs sm:text-sm">
                                    {displayUser.email || "—"}
                                </span>
                                {displayUser.email && (
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors cursor-pointer"
                                        title={copied ? "Copied!" : "Copy email"}
                                    >
                                        {copied ? (
                                            <span className="text-xs text-emerald-600 font-medium">✓</span>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Created At Row */}
                        <div className="flex items-center justify-between p-3.5 sm:px-4 sm:py-3.5 hover:bg-surface-container-low/40 transition-colors">
                            <div className="flex items-center gap-2.5 text-on-surface-variant">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="font-medium text-xs sm:text-sm">Created At</span>
                            </div>
                            <span className="text-on-surface-variant text-xs sm:text-sm font-mono">
                                {formattedDate}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 bg-surface-container-low/30 border-t border-outline/10 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-surface-container transition-colors border border-outline/25 cursor-pointer"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={() => onEdit?.(displayUser)}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                        {/* Pencil Edit Icon */}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                        Edit User
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UserViewCard
