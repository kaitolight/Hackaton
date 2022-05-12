import PropTypes from "prop-types";
import "../styles/ResultCard.css";

export default function ResultCard({ pullResult }) {
  if (pullResult.length === 0) {
    return <h2 className="result-none">You have not chosen a city yet!</h2>;
  }

  return (
    <div className="result-box">
      <h3 className="result-title">
        {pullResult.city && pullResult.city.name}
      </h3>
      <div className="result-flex">
        <div className="result-first">
          <p>
            The AQI (Air Quality Index) of the chosen city is{" "}
            <span className="result-aqi">{pullResult.aqi}</span> and it was last
            measured locally on the{" "}
            <span className="result-time">
              {pullResult.time && pullResult.time.s}
            </span>
          </p>
          <p>Local measurement time : {pullResult.time && pullResult.time.s}</p>
        </div>
        <div className="result-second">
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
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};
