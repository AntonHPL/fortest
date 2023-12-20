import { ReactElement } from "react";

export type DataType = {
  key: React.Key;
  delivery_place: string;
  date_and_time: number[];
  price: number;
  status: string;
  icon: ReactElement;
}