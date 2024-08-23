export interface Transaction {
  name: string;
  date: string;
  amount: number;
  image?: string;
  type: "debit" | "credit";
}

export interface Card {
  amount: string;
  carNumber: string;
  expire: string;
  cardLogo: string;
  active: boolean;
  background?: string;
}


