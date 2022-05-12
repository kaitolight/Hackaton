import React from "react";
import { Link } from "react-router-dom";

function RedirectionButton() {
  return (
    <Link to="/search">
      <button type="button">Consulter les résultats pour votre ville</button>
    </Link>
  );
}

export default RedirectionButton;
