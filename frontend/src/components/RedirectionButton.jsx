import React from "react";
import { Link } from "react-router-dom";

import "./RedirectionButton.css";

function RedirectionButton() {
  return (
    <div className="redirection">
      <Link className="button-link" to="/search">
        <button type="button" className="button">
          Consulter les résultats pour votre ville
        </button>
      </Link>
    </div>
  );
}

export default RedirectionButton;
