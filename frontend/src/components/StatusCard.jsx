
function StatusCard({ title, icon, value, bg }) {
    return (
        <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline shadow-card transition-all duration-100 flex flex-col justify-between">

            <div className="flex justify-between items-center">
                <p className="text-body-lg text-on-surface">
                    {title}
                </p>

                <div
                    style={{ backgroundColor: bg }}
                    className="h-7 w-7 rounded-button flex items-center justify-center"
                >
                    {icon}
                </div>
            </div>

            <p className="text-headline-lg font-bold pr-space-sm">
                {value}
            </p>

        </div>
    );
}

export default StatusCard;
