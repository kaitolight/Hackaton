import PropTypes from "prop-types";
import "../styles/ResultCard.css";

export default function ResultCard({ pullResult }) {
  if (pullResult.length === 0) {
    return <h2 className="result-none">You have not chosen a city yet!</h2>;
  }

  // eslint-disable-next-line no-restricted-syntax
  console.log(pullResult);

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
          <div>
            <h4 className="result-secondtitle">
              Here are the different stations used to collect the data :{" "}
            </h4>
            <ul>
              {pullResult &&
                pullResult.attributions.map((station) => {
                  return <li key={station.url}>{station.name}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="result-second">
          <h4 className="result-secondtitle">
            The different data to calculate the AQI :
          </h4>
          <ul>
            <li>
              {pullResult.iaqi && pullResult.iaqi.pm25.v
                ? `Fine particulate matter (PM2.5) in : ${pullResult.iaqi.pm25.v} μg/m3`
                : null}{" "}
            </li>
            <li>
              {pullResult.iaqi && pullResult.iaqi.pm10.v
                ? `Coarse particulate matter (PM10) : ${pullResult.iaqi.pm10.v} μg/m3`
                : null}
            </li>
            <li>
              {pullResult.iaqi && pullResult.iaqi.no2.v
                ? `Nitrogen dioxide (NO2) in : ${pullResult.iaqi.no2.v} μg/m3`
                : null}
            </li>
            <li>
              {pullResult.iaqi && pullResult.iaqi.so2.v
                ? `Sulfur dioxide (SO2) in : ${pullResult.iaqi.so2.v} μg/m3`
                : null}
            </li>
            <li>
              {pullResult.iaqi && pullResult.iaqi.o3.v
                ? `Ozone (O3) in : ${pullResult.iaqi.o3.v} μg/m3`
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
