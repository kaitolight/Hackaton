import PropTypes from "prop-types";
import "../styles/ResultCard.css";

export default function ResultCard({ pullResult }) {
  return (
    <div className="result-box">
      <h1 className="result-title">
        {pullResult.city && pullResult.city.name}
      </h1>
      <p>
        The AQI (Air Quality Index) of the chosen city is{" "}
        <span className="result-aqi">{pullResult.aqi}</span>
      </p>
      <p>Local measurement time : {pullResult.time && pullResult.time.s}</p>
      <ul>
        <li>
          {pullResult.iaqi && pullResult.iaqi.pm25.v
            ? `The current amount of Fine particulate matter (PM2.5) in ${
                pullResult.city && pullResult.city.name
              } is ${pullResult.iaqi.pm25.v} μg/m3`
            : null}{" "}
        </li>
        <li>
          {pullResult.iaqi && pullResult.iaqi.pm10.v
            ? `The current amount of Coarse particulate matter (PM10) in ${
                pullResult.city && pullResult.city.name
              } is ${pullResult.iaqi.pm10.v} μg/m3`
            : null}
        </li>
        <li>
          {pullResult.iaqi && pullResult.iaqi.no2.v
            ? `The current amount of Nitrogen dioxide (PM10) in ${
                pullResult.city && pullResult.city.name
              } is ${pullResult.iaqi.no2.v} μg/m3`
            : null}
        </li>
        <li>
          {pullResult.iaqi && pullResult.iaqi.so2.v
            ? `The current amount of Sulfur dioxide (PM10) in ${
                pullResult.city && pullResult.city.name
              } is ${pullResult.iaqi.so2.v} μg/m3`
            : null}
        </li>
        <li>
          {pullResult.iaqi && pullResult.iaqi.o3.v
            ? `The current amount of Ozone (PM10) in ${
                pullResult.city && pullResult.city.name
              } is ${pullResult.iaqi.o3.v} μg/m3`
            : null}
        </li>
      </ul>
    </div>
  );
}

ResultCard.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};
