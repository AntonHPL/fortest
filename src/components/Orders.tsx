import { columnsData } from "./mockData";
import { Button, Input, Popover, Table, Tag, Typography } from "antd";
import { EnvironmentOutlined, PlusOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { SearchProps } from "antd/es/input";
import { StyledFlexContainer } from "../styles/styled";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "../types";

const Orders: FC = () => {
  const [data, setData] = useState(columnsData);

  const { Search } = Input;
  const { Title } = Typography;

  // the table columns names and patterns
  const columns: ColumnsType<DataType> = [
    {
      title: "Delivery place",
      dataIndex: "delivery_place",
      key: "delivery_place",
      width: 500,
      render: (_: any, { delivery_place }: { delivery_place: string }) => (
        <>
          <Button shape="circle" type="text">
            <EnvironmentOutlined className="orders-container__environment-outlined" />
          </Button>
          &nbsp;&nbsp;
          {delivery_place}
        </>
      ),
    },
    {
      title: "Date and time",
      dataIndex: "date_and_time",
      key: "date_and_time",
      width: 300,
      render: (_: any, { date_and_time }: { date_and_time: number[] }) => {
        const date1 = new Date(date_and_time[0]);
        const date2 = new Date(date_and_time[1]);
        return (
          <span>
            {date1.toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}{" "}
            -{" "}
            {date2.toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 200,
      sorter: (a, b) => a.price - b.price,
      render: (_: any, { price }: { price: number }) => (
        <span>{price} &euro;</span>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 100,
      fixed: "right",
      filters: [
        {
          text: "Canceled",
          value: "canceled",
        },
        {
          text: "Packing",
          value: "packing",
        },
        {
          text: "Registered",
          value: "registered",
        },
        {
          text: "Sent",
          value: "sent",
        },
      ],
      onFilter: (value: any, record: { status: string }) =>
        record.status.indexOf(value) === 0,
      render: (_: any, { status }: { status: string }) => {
        let color;
        switch (status) {
          case "packing":
            color = "geekblue";
            break;
          case "canceled":
            color = "volcano";
            break;
          default:
            color = "green";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "",
      key: "icon",
      dataIndex: "icon",
      width: 50,
      fixed: "right",
    },
  ];

  // the function to search the data in the orders table
  const onSearch: SearchProps["onSearch"] = (e: string) => {
    setData(columnsData.filter((el) => el.delivery_place.includes(e)));
  };

  return (
    <div className="orders-container">
      <StyledFlexContainer $jc="space-between" $ai="center" $height={100}>
        <StyledFlexContainer $ai="center" $gap={16}>
          <Title className="orders-container__title">Orders</Title>
          <Search
            placeholder="Search..."
            allowClear
            onSearch={onSearch}
            className="orders-container__search"
          />
        </StyledFlexContainer>
        <Button
          type="primary"
          ghost
          className="orders-container__button"
          shape="round"
          icon={<PlusOutlined />}
        >
          Add
        </Button>
      </StyledFlexContainer>
      <Table columns={columns} dataSource={data} scroll={{ x: 900 }} />
    </div>
  );
};

export default Orders;
