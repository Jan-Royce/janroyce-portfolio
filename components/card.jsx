export function Card({ title, children, className }) {
    return (
        <div className={['card rounded-sm shadow-lg text-white', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="text-white">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
