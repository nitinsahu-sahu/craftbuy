const {
  Layers,
  ShoppingCart,
  CreditCard,
  Truck,
  RefreshCcw,
  CheckCheck,
} = require("lucide-react");
import { faker } from "@faker-js/faker";

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
    icon: <CheckCheck />,
    text: "Orders Deliverd",
    price: "002",
    class: "bg-pink-600 shadow-pinkcard",
  },
];

const PieChartData = {
  labels: ["Red", "Blue", "Green", "Yellow", "Pink", "Purple"],
  datasets: [
    {
      label: "# of votes",
      data: [12, 19, 3, 2, 5, 3],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(52,162,235,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(255,192,203,0.2)",
        "rgba(153,102,255,0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(52,162,235,1)",
        "rgba(75,192,192,1)",
        "rgba(255,206,86,1)",
        "rgba(255,192,203,1)",
        "rgba(153,102,255,1)",
      ],
      borderWidth: 1,
    },
  ],
};

const tabs = [
  { title: "Sales", type: "sales" },
  { title: "Orders", type: "orders" },
];

const LineChartOptions = {
  responsive: true,
  plugin: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chartjs Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const LineChartData = {
  labels,
  datasets: [
    {
      label: "Datasets 1",
      data: labels.map(() =>
        faker.number.int({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(255,99,132)",
      backgroundColor: "rgba(255,99,132,0.5)",
    },
    {
      label: "Datasets 2",
      data: labels.map(() =>
        faker.number.int({ min: -1000, max: 1000 })
      ),
      borderColor: "rgb(53,162,235)",
      backgroundColor: "rgba(53,162,235,0.5)",
    },
  ],
};

export {
  LargeCardData,
  SmallCardData,
  PieChartData,
  tabs,
  LineChartOptions,
  LineChartData,
};
