import React from "react";
import Welcome from "../components/Welcome";
import RedirectionButton from "../components/RedirectionButton";

import "../Home.css";

export default function Home() {
  return (
    <div>
    <div>HOME</div>
    <RedirectionButton />
      <Welcome />
    </div>
  )
}
export default Home;
