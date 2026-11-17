
function StatusCard({ title, icon, value, bg }) {
    return (
        <div className="p-4 sm:p-5 rounded-xl bg-surface-container-lowest border border-outline shadow-card transition-all duration-100 flex flex-col justify-between gap-3">

            <div className="flex justify-between items-center">
                <p className="text-sm sm:text-base text-on-surface font-medium">
                    {title}
                </p>

                <div
                    style={{ backgroundColor: bg }}
                    className="h-7 w-7 rounded-button flex items-center justify-center shrink-0"
                >
                    {icon}
                </div>
            </div>

            <p className="text-2xl sm:text-headline-lg font-bold">
                {value}
            </p>

        </div>
    );
}

export default StatusCard;
