export interface Transaction {
    name: string;
    date: string;
    amount: number;
    image?:string;
    type: 'debit' | 'credit';
}