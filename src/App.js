import React from "react";
import "./styles.css";
import data from "./data.json";

import Alljobs from "./Alljobs";
import { Image } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Image
        src="../images/bg-header-desktop.svg"
        style={{ width: "100%", backgroundColor: "hsl(180, 29%, 50%)" }}
      />

      <Alljobs data={data} />
    </div>
  );
}
