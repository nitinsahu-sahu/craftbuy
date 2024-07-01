const { Layers, ShoppingCart, CreditCard, Truck, RefreshCcw } = require("lucide-react");

const LargeCardData = [
  {
    icon: <Layers />,
    text: "Today Orders",
    price: "₹ 10.00",
    class: "bg-green-600 shadow-greencard",
  },
  {
    icon: <Layers />,
    text: "Yesterday Orders",
    price: "₹ 30.00",
    class: "bg-blue-600 shadow-bluecard",
  },
  {
    icon: <ShoppingCart />,
    text: "This Month",
    price: "₹ 40.00",
    class: "bg-orange-600 shadow-orangecard",
  },
  {
    icon: <CreditCard />,
    text: "Last Month",
    price: "₹ 100.00",
    class: "bg-purple-600 shadow-purplecard",
  },
  {
    icon: <CreditCard />,
    text: "All-Time Sales",
    price: "₹ 500.00",
    class: "bg-pink-600 shadow-pinkcard",
  },
];

const SmallCardData = [
  {
    icon: <ShoppingCart />,
    text: "Total Orders",
    price: "222",
    class: "bg-green-600 shadow-greencard",
  },
  {
    icon: <RefreshCcw />,
    text: "Orders Pending",
    price: "123",
    class: "bg-orange-600 shadow-orangecard",
  },
  {
    icon: <Truck />,
    text: "Orders Processing",
    price: "344",
    class: "bg-purple-600 shadow-purplecard",
  },
  {
    icon: <CreditCard />,
    text: "Orders Deliverd",
    price: "002",
    class: "bg-pink-600 shadow-pinkcard",
  },
];
export { LargeCardData, SmallCardData };
