import React from "react";
import Welcome from "../components/Welcome";
import RedirectionButton from "../components/RedirectionButton";
import Nav from "../components/Nav";

import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome />
      <RedirectionButton />
    </div>
  );
}
