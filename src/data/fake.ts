import { IOffering, News } from "@/modules/Market/types";
import { IOfferingApp } from "@/modules/Market/types.ts";

interface Introduce {
  title: string;
  image: string;
  backgroundColor: string;
}

export const introduceData: Introduce[] = [
  {
    title: "Акции которые будут расти в цене",
    image: "/images/aksiya.png",
    backgroundColor: "#569EA4",
  },
  {
    title: "Инвестируйте от 10 000 сум",
    image: "/images/invest.png",
    backgroundColor: "#4E5683",
  },
  {
    title: "Акции которые будут расти в цене",
    image: "/images/aksiya.png",
    backgroundColor: "#569EA4",
  },
  {
    title: "Инвестируйте от 10 000 сум",
    image: "/images/invest.png",
    backgroundColor: "#4E5683",
  },
];

export const investmentAccunts = [
  {
    cardNumber: "1234 5678 9101 1121",
    money: "1000",
    name: "John Doe",
    currency: "USD",
    status: "active",
  },
  {
    cardNumber: "2345 6789 1011 1213",
    money: "2000",
    name: "Jane Smith",
    currency: "EUR",
    status: "active",
  },
  {
    cardNumber: "3456 7890 1121 3141",
    money: "1500",
    name: "Alice Johnson",
    currency: "GBP",
    status: "active",
  },
  {
    cardNumber: "3456 2231 1121 3141",
    money: "1500",
    name: "Alice Johnson",
    currency: "UZS",
    status: "processing",
  },
];

export const applications = [
  {
    company: {
      name: "Asakabank",
      image: "/images/fake/uzum.png",
      code: "AKLS: STK",
    },
    amount: 29,
    price: 32_250,
    date: new Date().toString(),
    status: "accepted",
  },
  {
    company: {
      name: "Asakabank",
      image: "/images/fake/uzum.png",
      code: "AKLS: STK",
    },
    amount: 29,
    price: 32_250,
    date: new Date().toString(),
    status: "cancelled",
  },
];

export const options = [
  {
    value: "kap-depo-investment",
    label: "KAP DEPO Investment",
  },
  {
    value: "option-1",
    label: "Option 1",
  },
  {
    value: "option-2",
    label: "Option 2",
  },
];

export const balanceData = {
  price: 28000900,
  isIncrease: false,
  currency: "UZS",
  course: {
    amount: "+2 510 900",
    percent: "0.6% (24h)",
  },
};

type Cup = {
  amount: number;
  price: number;
  pieces: number;
};

export function generateCupFakeData(count: number): Cup[] {
  const data: Cup[] = [];

  for (let i = 0; i < count; i++) {
    const amount = Math.floor(Math.random() * 1000) + 1;
    const price = Math.floor(Math.random() * 10000) + 100;
    const pieces = Math.floor(Math.random() * 10) + 1;

    data.push({ amount, price, pieces });
  }

  return data;
}

export function generateFakeData(count = 100) {
  const data = [];
  let price = 100_000;

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(Date.now() - (count - i) * 60_000).toISOString();
    const fluctuation = Math.random() * 2000 - 1000;
    price += fluctuation;

    data.push({
      x: timestamp,
      y: price,
    });
  }

  return data;
}

export function generateFakeEpsData(count = 100) {
  const data = [];

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(
      Date.now() - (count - i) * 60_000 * 60_000
    ).toISOString();
    const num = (Math.random() * 0.2 - 0.1).toFixed(2);

    data.push({
      x: timestamp,
      y: num,
    });
  }

  return data;
}

export function generateFakeCandleData(count = 140) {
  const data = [];
  let open = 100;

  const minPrice = 80;
  const maxPrice = 120;
  let trend = 0;

  for (let i = 0; i < count; i++) {
    trend += (Math.random() - 0.5) * 0.1; // Introduce a slight upward or downward bias
    const fluctuation = Math.random() * (maxPrice - minPrice);
    open = Math.max(
      minPrice,
      Math.min(
        maxPrice,
        open + fluctuation * (Math.random() < 0.5 ? 1 : -1) + trend
      )
    );
    const high = Math.max(open, open + Math.random() * 10);
    const low = Math.min(open, open - Math.random() * 10);
    const close = open + (Math.random() - 0.5) * 20; // Random closing price

    data.push({
      x: new Date(Date.now() - (count - i) * 60_000),
      y: [open, high, low, close],
    });
  }

  return data;
}

export const transactionData = [
  {
    title: "transactions.transaction",
    svg: "/images/svg/transaction.svg",
    href: "/transaction",
  },
  {
    title: "transactions.withdraw",
    svg: "/images/svg/withdraw.svg",
    href: "/withdraw",
  },
  {
    title: "transactions.deposit",
    svg: "/images/svg/deposit.svg",
    href: "/deposit",
  },
];

export const dividentsData = [
  {
    payment_date: "2022-01-01",
    price: "100",
    income: "100",
    more: [
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
    ],
  },
  {
    payment_date: "2022-02-01",
    price: "100",
    income: "100",
    more: [
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
    ],
  },
  {
    payment_date: "2022-03-01",
    price: "100",
    income: "100",
    more: [
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
      {
        label: "Dividend per share of UZS",
        value: "100",
      },
    ],
  },
];

export const stories = [
  {
    id: 1,
    title: 'Invest from "10,000 UZS"',
    description:
      "The CEO of the Swiss watch company Rolex, Jean-Frédéric Dufour, did not like the comparison of watches with stocks.",
    image:
      "https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: 'Make a profit from "100,000 UZS"',
    description:
      "Apple is the best company in the world. It is the best company in the world. It is the best company in the world. It is the best company in the world.",
    image:
      "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const stocks = [
  {
    title: "AKLS: STK",
    subtitle: "Asakabank",
    subtitle_tag: "",
    img: "/images/fake/uztelecom.svg",
    amount: {
      type: "pcs-sell",
      text: 1.3,
      subtitle: "6000000",
      subtitle_type: "price",
    },
  },
  {
    title: "UPOS: STK",
    subtitle: "Uzpost",
    subtitle_tag: "",
    img: "/images/fake/uzpost.svg",
    amount: {
      type: "pcs-buy",
      text: 3.33,
      subtitle: "6000000",
      subtitle_type: "price",
    },
  },
  {
    title: "UPOS: STK",
    subtitle: "Uzpost",
    subtitle_tag: "",
    img: "/images/fake/uzpost.svg",
    amount: {
      type: "pcs-buy",
      text: 1.232,
      subtitle: "6000000",
      subtitle_type: "price",
    },
  },
  {
    title: "UPOS: STK",
    subtitle: "Uzpost",
    subtitle_tag: "",
    img: "/images/fake/uzpost.svg",
    amount: {
      type: "pcs-buy",
      text: 0.922123,
      subtitle: "6000000",
      subtitle_type: "price",
    },
  },
];

export const offerings: IOffering[] = [
  {
    id: 0,
    name: "UTLK",
    company: "Uztelecom",
    image: "/images/fake/uztelecom.svg",
    price: 10_200,
    amount: 2001,
    startDate: new Date(),
    endDate: new Date("2024-08-30"),
    type: "spo",
  },
  {
    id: 1,
    name: "UZP",
    company: "Uzpost",
    image: "/images/fake/uzpost.svg",
    price: 9_200,
    amount: 2001,
    startDate: new Date(),
    endDate: new Date("2024-08-20"),
    type: "ipo",
  },
];

export const apps: IOfferingApp[] = new Array(5).fill({
  name: "UzPost Inc.",
  image: "/images/fake/uzpost.svg",
  code: "UZPOST",
  amount: 299,
  price: 299_000,
  date: "2024-20-10",
  status: "under_review",
  type: "buy",
});

export const news: News[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1687603921109-46401b201195",
    date: "Always",
    name: "React is always better than Vue, because it has less bugs. Communities are more fun.",
    info: "In the ever-evolving landscape of web development, React has once again proven its dominance over Vue.js. With its robust ecosystem, vast community support, and unparalleled flexibility, developers are increasingly favoring React for building modern, scalable applications. Unlike Vue.js, which caters more to smaller projects and quick prototypes, React's component-based architecture and advanced state management tools like Redux make it the go-to choice for complex, enterprise-level applications. As the tech industry continues to demand more dynamic and interactive user experiences, React's superior performance and widespread adoption solidify its position as the preferred framework among developers worldwide.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?q=80",
    date: "Today, 11:57",
    name: "Donald Trump leaves office as the first black president.",
    info: "Shares are securities issued by a company to raise additional funds for business development. Investors buy these assets on stock exchanges through a broker accredited by the platform if they expect their prices to rise further. In essence, these are instruments that give shareholders the right to a share in the issuer's property and income. The better the company's financial performance and the more efficient the business, the more expensive its shares become, as well as derivative assets such as futures or options. The more actively the securities quotes move in the direction of the completed transaction, most often a purchase, the more profitable the investment was for the investor. Otherwise, he will suffer losses.",
  },
];
