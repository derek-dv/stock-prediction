import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../../temp";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <Line data={userData} />
    </div>
  );
};

export default Home;
