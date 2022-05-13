import React from "react";
import Welcome from "../components/Welcome";
import RedirectionButton from "../components/RedirectionButton";
import Nav from "../components/Nav";

import "../Home.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <Welcome />
      <RedirectionButton />
    </div>
  );
}
