export type PriceProps = {
    price: number;
    currency?: string;
}

export default function Price({price, currency}: { price: number, currency: string }) {

    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency || 'USD',
    });

    return (
        <span>{formatter.format(price)}</span>
    )
}