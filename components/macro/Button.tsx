export type ButtonProps = {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({onClick, type, text, children, className}: ButtonProps) {

    if (text === undefined && children === undefined) {
        throw new Error('You must specify a text or a children');
    }

    className = className || 'border w-full border-white hover:bg-white/20 transition text-white px-4 py-2 rounded';

    return (
        <button onClick={onClick} type={type ?? "submit"} className={className}>{text ?? children ?? 'Button'}</button>
    )
}