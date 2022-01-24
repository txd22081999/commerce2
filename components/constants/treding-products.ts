export type IPrice = number | number[];

export interface IPicture {
  color: string;
  url: string;
}

export interface IProduct {
  name: string;
  price: IPrice;
  pictures: IPicture[];
  isNew?: boolean;
  discount?: number;
  hoverPicture: string;
  originalPrice?: number;
  sizes?: string[];
}

export enum EColor {
  PINK = "Pink",
  GREY = "Grey",
  GREEN = "Green",
  BLACK = "Black",
  BLUE = "Blue",
  WHITE = "White",
  HEART_DOTTED = "",
}

export const SIZE = {
  ALL: ["XS", "S", "M", "L", "XL"],
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
};

const ITEM1: IProduct = {
  name: "Analouge Resin Strap",
  price: 30,
  isNew: true,
  sizes: SIZE.ALL,
  pictures: [
    {
      color: "default",
      url: "/1/0332/6420/5963/products/eberj4183019d5e_q1_2-0_360x.jpg",
    },
  ],
  hoverPicture: "/1/0332/6420/5963/products/eberj4183019d5e_q3_2-0_360x.jpg",
};

const ITEM2: IProduct = {
  name: "Ridley High Waist",
  price: 36,
  pictures: [
    {
      color: "default",
      url: "/1/0332/6420/5963/products/nlota2087710739_q1_2-0_360x.jpg",
    },
  ],
  hoverPicture:
    "/1/0332/6420/5963/products/nlota2087710739_q2_2-0_360x.jpg?v=1606359879",
};

const ITEM3: IProduct = {
  name: "Blush Beanie",
  price: 15,
  pictures: [
    {
      color: EColor.GREY,
      url: "/1/0332/6420/5963/products/acndb3127517966_q3_2-0_360x.jpg",
    },
  ],
  hoverPicture: "/1/0332/6420/5963/products/acndb3127517966_q1_2-0_360x.jpg",
};

const ITEM4: IProduct = {
  name: "Cluse La Boheme Rose Gold",
  price: [25, 45],
  pictures: [
    {
      color: EColor.GREEN,
      url: "/1/0332/6420/5963/products/cinqa31079186d2_q1_2-0_360x.jpg",
    },
  ],
  hoverPicture: "/1/0332/6420/5963/products/cinqa31079186d2_q5_2-0_360x.jpg",
};

const ITEM5: IProduct = {
  name: "Mercury Tee",
  price: 68,
  pictures: [
    {
      color: EColor.WHITE,
      url: "/1/0332/6420/5963/products/famer2052212158_q1_2-1_80ef388a-668b-4cac-b04a-080e7e371c4b_360x.jpg",
    },
    {
      color: EColor.HEART_DOTTED,
      url: "",
    },
  ],
  hoverPicture:
    "/1/0332/6420/5963/products/famer2052212158_q3_2-0_1a775ff5-482d-4ae9-8f54-86ba7debe4f8_360x.jpg",
};
const ITEM6: IProduct = {
  name: "La Bohème Rose Gold",
  originalPrice: 60,
  price: 40,
  pictures: [
    {
      color: EColor.PINK,
      url: "/1/0332/6420/5963/products/p24-11_360x.jpg?v=1581557817",
    },
  ],
  hoverPicture: "/1/0332/6420/5963/products/p24-12_360x.jpg",
};
const ITEM7: IProduct = {
  name: "Cream Women Pants",
  price: 35,
  pictures: [
    {
      color: "default",
      url: "/1/0332/6420/5963/products/jbran4197212122_q3_2-0_955d01c7-4411-4d7e-8021-b147f1f29665_360x.jpg",
    },
  ],
  hoverPicture:
    "/1/0332/6420/5963/products/jbran4197212122_q1_2-0_1b84fc3b-8ad7-4d57-9e26-f6985c1bd590_360x.jpg",
};
const ITEM8: IProduct = {
  name: "Black Moutain Hat",
  price: 50,
  pictures: [
    {
      color: "default",
      url: "/1/0332/6420/5963/products/5-1_360x.png?v=1606194440",
    },
  ],
  hoverPicture: "/1/0332/6420/5963/products/5-2_360x.png",
};

export const TRENDING_PRODUCTS: IProduct[] = [
  ITEM1,
  ITEM2,
  ITEM3,
  ITEM4,
  ITEM5,
  ITEM6,
  ITEM7,
  ITEM8,
];

// document.querySelectorAll('.nt_se_template--14278981320843__1581993333344 .product-inner .main-img')[0].getAttribute('data-bgset')
