import React, { useEffect, useState } from "react";
import axios from "axios";

//axios import
import axiosWithAuth from "../helpers/axiosWithAuth";

//module component
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    fetchColor();
  }, []);

  const fetchColor = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then((res) => {
        console.log("response from fetch", res);
        setColorList(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
