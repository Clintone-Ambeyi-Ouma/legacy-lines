export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },

  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },

      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Forms",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "user.jpg",
    username: "Clintone Machel",
    email: "clintoneam@gmail.com",
    amount: "4.345",
  },
  {
    id: 2,
    img: "user.jpg",
    username: "Ivan Owino",
    email: "ivanowino2000@gmail.com",
    amount: "2.5",
  },
  {
    id: 3,
    img: "user.jpg",
    username: "Ruth Nyakoa",
    email: "nyakoaruth@gmail.com",
    amount: "2.3",
  },
  {
    id: 4,
    img: "user.jpg",
    username: "Ali Shaban",
    email: "alishaban@gmail.com",
    amount: "9.35",
  },
  {
    id: 5,
    img: "user.jpg",
    username: "Obra Gift",
    email: "giftObra@gmail.com",
    amount: "2.345",
  },
];

export const data = [
  {
    name: "page A",
    uv: 1500,
    pv: 9800,
    amount: 2290,
  },
  {
    name: "page B",
    uv: 2000,
    pv: 9800,
    amount: 2100,
  },
  {
    name: "page C",
    uv: 2000,
    pv: 9800,
    amount: 2290,
  },
  {
    name: "page D",
    uv: 2780,
    pv: 3908,
    amount: 2000,
  },
  {
    name: "page E",
    uv: 1890,
    pv: 4800,
    amount: 2181,
  },
  {
    name: "page F",
    uv: 2390,
    pv: 3800,
    amount: 2580,
  },
  {
    name: "page G",
    uv: 3490,
    pv: 4300,
    amount: 2110,
  },
  {
    name: "page A",
    uv: 1500,
    pv: 9800,
    amount: 2290,
  },
  {
    name: "page A",
    uv: 1500,
    pv: 9800,
    amount: 2290,
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: -12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const barChartBoxVisit = {
  title: "Population",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 4000 },
    { name: "Mon", visit: 2300 },
    { name: "Tue", visit: 700 },
    { name: "Wed", visit: 4600 },
    { name: "Thur", visit: 6000 },
  ],
};

export const barChartBoxRevenue = {
  title: "Birth rates",
  color: "#884d8",
  dataKey: "rates",
  chartData: [
    { name: "2000", rates: 4000 },
    { name: "2005", rates: 4000 },
    { name: "2010", rates: 2300 },
    { name: "2015", rates: 700 },
    { name: "2020", rates: 4600 },
    { name: "2025", rates: 6000 },
  ],
};

export const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14, status: true },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11, status: true },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, status: true },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const timelineElements = [
  {
    id: 1,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Colourful wedding",
    buttonText: "Visit Drive-in",
    date: " November-5-2020",
    icon: "wed",
  },
  {
    id: 2,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Colourful wedding",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "wed",
  },
  {
    id: 3,
    location: "Butere District",
    description: "Home of champions",
    title: "Glory to God",
    buttonText: "Visit Butere",
    date: " November-5-2023",
    icon: "birth",
  },
  {
    id: 4,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Colourful wedding",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "wed",
  },
  {
    id: 5,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "All the praise to God",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "birth",
  },
  {
    id: 6,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Glorious gift",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "birth",
  },
  {
    id: 7,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Colourful wedding",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "wed",
  },
  {
    id: 8,
    location: "Drive-in Kasarani",
    description:
      "Through comprehensive analysis, the role of last-mile delivery is examined, considering its significance in enhancing customer satisfaction and improving overall business performance. Various types of last-mile delivery solutions are explored, taking into account their impact on customer experience and business operations.",
    title: "Colourful wedding",
    buttonText: "Visit Drive-in",
    date: " November-5-2023",
    icon: "wed",
  },
];

export const products = [
  {
    id: 1,
    img: "",
    title: "Play Station 5",
    color: "white",
    producer: "Sony",
    price: "$123.99",
    createdAt: "01.03.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "",
    title: "Play Station 5",
    color: "white",
    producer: "Sony",
    price: "$123.99",
    createdAt: "01.03.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "",
    title: "Play Station 5",
    color: "white",
    producer: "Sony",
    price: "$123.99",
    createdAt: "01.03.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "",
    title: "Play Station 5",
    color: "white",
    producer: "Sony",
    price: "$123.99",
    createdAt: "01.03.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Joe Doe",
  img: "",
  infor: {
    username: "Jonte",
    fullname: "John Doe",
    email: "john@gmail.com",
    phone: "12233334",
    status: "Verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      { name: "Sun", visits: 2000, clicks: 234 },
      { name: "Mon", visits: 2000, clicks: 234 },
      { name: "Tue", visits: 2000, clicks: 234 },
      { name: "Wed", visits: 2000, clicks: 234 },
      { name: "Thu", visits: 2000, clicks: 234 },
      { name: "Fri", visits: 2000, clicks: 234 },
      { name: "Sat", visits: 2000, clicks: 234 },
    ],
  },
  activities: [
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
    {
      text: "Joe Doe Played Football at the Federation",
      time: "Three days ago",
    },
  ],
};

export const singleProduct = {
  id: 1,
  title: "Play Station 5 edition",
  img: "",
  info: {
    productId: "2324d",
    color: "white",
    price: "$245.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      { name: "Sun", visits: 3000, orders: 3455 },
      { name: "Mon", visits: 3000, orders: 3455 },
      { name: "Tue", visits: 3000, orders: 3455 },
      { name: "Wed", visits: 3000, orders: 3455 },
      { name: "Thur", visits: 3000, orders: 3455 },
      { name: "Fri", visits: 3000, orders: 3455 },
      { name: "Sat", visits: 3000, orders: 3455 },
    ],
  },
  activities: [
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "4 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "4 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "4 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "3 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "9 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "3 weeks ago",
    },
    {
      text: "Joe Doe purchased PLay Sytation 5",
      time: "5 weeks ago",
    },
  ],
};
