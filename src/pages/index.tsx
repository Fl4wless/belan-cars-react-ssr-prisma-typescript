import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const cars = api.car.getAll.useQuery();
  const createCar = api.car.addNewCar.useMutation({
    mutationKey: ["create"],
    onSuccess: () => cars.refetch(),
  });

  const handleAdd = () => {
    createCar.mutate({ img: "1", title: "newCar" });
  };

  return (
    <div>
      <button onClick={handleAdd}>add</button>
      <ul>
        {cars?.data?.map((item, index) => (
          <li key={index}>{`${index} - ${item.title}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
