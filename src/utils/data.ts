import { Card, Transaction } from "../types/global.types";

export const cards: Card[] = [
    {
        amount: "84,434.06",
        carNumber: "4532",
        expire: "10/33",
        cardLogo: "./visaLogo.png",
        active: true,
        background:'linear-gradient(to left top, #c2009c, #d7003c, #e21764, #e5378c, #df54b1)'
      },
    {
      amount: "53,454.56",
      carNumber: "4345",
      expire: "03/32",
      cardLogo: "./visaLogo.png",
      active: true,
      background: 'linear-gradient(48deg, rgba(63,83,235,1) 26%, rgba(25,137,227,1) 100%)'
    },
    {
      amount: "74,434.06",
      carNumber: "4532",
      expire: "10/33",
      cardLogo: "./master-card-logo.png",
      active: false,
      background:'linear-gradient(to right top, #02b7f2, #00a0f6, #0086f7, #0068ef, #3843dd)'
    },
    
  ];

  export const transactions: Transaction[] = [
    {
      name: "John Peter",
      amount: 600,
      type: "debit",
      image: "./avatars/Avatar-1.png",
      date: "19th Jul 2024, 10:34 am",
    },
    {
      name: "Sarah Miller",
      amount: 1500,
      type: "credit",
      image: "./avatars/Avatar-2.png",
      date: "21st Jul 2024, 02:45 pm",
    },
    {
      name: "Michael Smith",
      amount: 320,
      type: "debit",
      image: "./avatars/Avatar-3.png",
      date: "22nd Jul 2024, 11:30 am",
    },
    {
      name: "Emily Davis",
      amount: 840,
      type: "debit",
      image: "./avatars/Avatar-4.png",
      date: "23rd Jul 2024, 04:20 pm",
    },
    {
      name: "James Brown",
      amount: 1250,
      type: "credit",
      image: "./avatars/Avatar-5.png",
      date: "24th Jul 2024, 08:10 am",
    },
    {
      name: "Olivia Wilson",
      amount: 760,
      type: "debit",
      image: "./avatars/Avatar-6.png",
      date: "25th Jul 2024, 01:15 pm",
    },
    {
      name: "David Johnson",
      amount: 1320,
      type: "credit",
      image: "./avatars/Avatar-7.png",
      date: "26th Jul 2024, 09:50 am",
    },
    {
      name: "Sophia Martinez",
      amount: 410,
      type: "debit",
      image: "./avatars/Avatar-8.png",
      date: "27th Jul 2024, 03:30 pm",
    },
    {
      name: "Daniel Rodriguez",
      amount: 920,
      type: "credit",
      image: "./avatars/Avatar-9.png",
      date: "28th Jul 2024, 07:25 am",
    },
  ];