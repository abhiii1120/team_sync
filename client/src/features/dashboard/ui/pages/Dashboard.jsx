import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Dashboard = () => {
  let dispatch = useDispatch();

  let handleThemeChange = () => {
    dispatch(toggleTheme());
  }

  return (
    <div>
      <h1>this is dashboard</h1>
      <button onClick={handleThemeChange}>change theme</button>
    </div>
  );
};

export default Dashboard;
