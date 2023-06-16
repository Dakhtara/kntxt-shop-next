export type AlertProps = {
    children: React.ReactNode;
}

export default function Alert({children}: AlertProps)
{
    return (
        <p className="my-4 text-sm px-2 py-2 bg-sky-900 rounded border border-sky-700">
            {children}
        </p>
    );
}