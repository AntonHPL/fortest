import { Button, Popover } from "antd";
import { DataType } from "../types";
import { MoreOutlined } from "@ant-design/icons";

const icon = (address: string, price: number, status: string) => (
  <Popover
    placement="left"
    title={"Details:"}
    content={
      <p>
        Address: {address}
        <br />
        Price: {price}&euro;
        <br />
        Status: {status}
      </p>
    }
  >
    <Button type="text" shape="circle">
      <MoreOutlined />
    </Button>
  </Popover>
);

// the data to be displayed in the orders table
export const columnsData: DataType[] = [
  {
    key: 0,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "packing",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "packing"
    ),
  },
  {
    key: 1,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "registered",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "registered"
    ),
  },
  {
    key: 2,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
  {
    key: 3,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "canceled",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "canceled"
    ),
  },
  {
    key: 4,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "registered",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "registered"
    ),
  },
  {
    key: 5,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
  {
    key: 6,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "packing",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "packing"
    ),
  },
  {
    key: 7,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "canceled",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "canceled"
    ),
  },
  {
    key: 8,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
  {
    key: 9,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "packing",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "packing"
    ),
  },
  {
    key: 10,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "registered",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "registered"
    ),
  },
  {
    key: 11,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "canceled",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "canceled"),
  },
  {
    key: 12,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "packing",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "packing"
    ),
  },
  {
    key: 13,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "registered",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "registered"
    ),
  },
  {
    key: 14,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
  {
    key: 15,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "canceled",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "canceled"
    ),
  },
  {
    key: 16,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "registered",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "registered"
    ),
  },
  {
    key: 17,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
  {
    key: 18,
    delivery_place: "2258 Jona Squares, South Kristina, OH 62539-8433",
    date_and_time: [1701609543000, 1701609543000 + 1800000],
    price: 10,
    status: "packing",
    icon: icon(
      "2258 Jona Squares, South Kristina, OH 62539-8433",
      10,
      "packing"
    ),
  },
  {
    key: 19,
    delivery_place: "82006 Marks Gardens, West Karena, OR 71530-0472",
    date_and_time: [1698844743000, 1698844743000 + 1800000],
    price: 40,
    status: "canceled",
    icon: icon(
      "82006 Marks Gardens, West Karena, OR 71530-0472",
      40,
      "canceled"
    ),
  },
  {
    key: 20,
    delivery_place: "2437 Schimmel Isle, Septemberhaven, NM 29727",
    date_and_time: [1698758343000, 1698758343000 + 1800000],
    price: 90,
    status: "sent",
    icon: icon("2437 Schimmel Isle, Septemberhaven, NM 29727", 90, "sent"),
  },
];
