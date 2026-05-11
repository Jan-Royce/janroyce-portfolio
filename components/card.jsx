export function Card({ title, children, className }) {
    return (
        <div className={['card rounded-sm text-white', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-0 pb-8">
                {title && <h3 className="text-white">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
