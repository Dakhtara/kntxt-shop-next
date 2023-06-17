
export default function Toast({children, show}: {children: React.ReactNode, show: boolean}) {
    const className = show ? 'transform translate-y-40 opacity-100' : 'transform translate-y-0 opacity-0';
    return (
        <div className={className + " transition fixed -top-24 right-0 m-4"}>
            <div className="bg-black border border-white rounded-lg shadow-lg p-4">
                {children}
            </div>
        </div>
    )
}