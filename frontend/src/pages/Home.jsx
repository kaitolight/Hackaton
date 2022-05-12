import React from "react";
import Welcome from "../components/Welcome";
import "../styles/Home.css";

import RedirectionButton from "../components/RedirectionButton";

export default function Home() {
  return (
    <>
      <div>HOME</div>
      <Welcome />
      <RedirectionButton />
    </>
  );
}
