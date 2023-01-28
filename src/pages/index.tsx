import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const cars = api.car.getAll.useQuery();
  const createCar = api.car.addNewCar.useMutation();

  const handleAdd = () => {
    createCar.mutate({ img: "1", title: "newCar" });
  };
  return (
    <div>
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default Home;
