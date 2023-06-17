export type PriceProps = {
    price: number;
    currency?: string;
    className?: string;
}

export default function Price({price, currency, className}: PriceProps) {

    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency || 'EUR',
    });

    return (
        <span className={className}>{formatter.format(price)}</span>
    )
}