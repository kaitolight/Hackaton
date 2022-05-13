import PropTypes from "prop-types";
import "../styles/ResultCard.css";

export default function ResultCard({ pullResult }) {
  if (pullResult.length === 0) {
    return <h2 className="result-none">You have not chosen a city yet!</h2>;
  }

  // eslint-disable-next-line no-restricted-syntax
  console.log(pullResult);

  // eslint-disable-next-line camelcase
  const classNamePM2_5 = (data) => {
    if (data < 20) return "greenValue";
    if (data < 30 && data >= 20) return "yellowValue";
    if (data < 100 && data >= 30) return "orangeValue";
    return "redValue";
  };

  const classNameAqi = (data) => {
    if (data < 50) return "#3CB371";
    if (data < 100 && data >= 50) return "#DAA520";
    if (data < 150 && data >= 100) return "#FF8C00";
    if (data < 200 && data >= 150) return "#DC143C";
    if (data < 300 && data >= 200) return "#4B0082";
    return "#A52A2A";
  };

  const classNamePM10 = (data) => {
    if (data < 30) return "greenValue";
    if (data < 75 && data >= 30) return "yellowValue";
    if (data < 150 && data >= 75) return "orangeValue";
    return "redValue";
  };

  const classNameNO2 = (data) => {
    if (data < 30) return "greenValue";
    if (data < 75 && data >= 30) return "yellowValue";
    if (data < 150 && data >= 75) return "orangeValue";
    return "redValue";
  };

  const classNameSO2 = (data) => {
    if (data < 200) return "greenValue";
    if (data < 350 && data >= 200) return "yellowValue";
    if (data < 500 && data >= 350) return "orangeValue";
    return "redValue";
  };

  const classNameO3 = (data) => {
    if (data < 40) return "greenValue";
    if (data < 100 && data >= 40) return "yellowValue";
    if (data < 200 && data >= 100) return "orangeValue";
    return "redValue";
  };

  return (
    <div className="result-box">
      <h3 className="result-title">
        {pullResult.city && pullResult.city.name}
      </h3>
      <div className="result-flex">
        <div className="result-first">
          <p>
            The AQI (Air Quality Index) of the chosen city is :{" "}
            <span
              className="result-aqi"
              style={{ color: classNameAqi(pullResult.aqi) }}
            >
              {pullResult.aqi}
            </span>{" "}
            last measured locally on the{" "}
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
            {pullResult.iaqi && pullResult.iaqi.pm25 ? (
              <li>
                Fine particulate matter (PM2.5) in{" "}
                {pullResult.city && pullResult.city.name} :{" "}
                <span className={classNamePM2_5(pullResult.iaqi.pm25.v)}>
                  {pullResult.iaqi.pm25.v} μg/m<sup>3</sup>
                </span>
              </li>
            ) : null}{" "}
            {pullResult.iaqi && pullResult.iaqi.pm10 ? (
              <li>
                Coarse particulate matter (PM10) in{" "}
                {pullResult.city && pullResult.city.name} :{" "}
                <span className={classNamePM10(pullResult.iaqi.pm10.v)}>
                  {pullResult.iaqi.pm10.v} μg/m<sup>3</sup>
                </span>
              </li>
            ) : null}{" "}
            {pullResult.iaqi && pullResult.iaqi.no2 ? (
              <li>
                Nitrogen dioxide (NO2) in{" "}
                {pullResult.city && pullResult.city.name} :{" "}
                <span className={classNameNO2(pullResult.iaqi.no2.v)}>
                  {pullResult.iaqi.no2.v} μg/m<sup>3</sup>
                </span>
              </li>
            ) : null}{" "}
            {pullResult.iaqi && pullResult.iaqi.so2 ? (
              <li>
                Sulfur dioxide (SO2) in{" "}
                {pullResult.city && pullResult.city.name} :{" "}
                <span className={classNameSO2(pullResult.iaqi.so2.v)}>
                  {pullResult.iaqi.so2.v} μg/m<sup>3</sup>
                </span>
              </li>
            ) : null}{" "}
            {pullResult.iaqi && pullResult.iaqi.o3 ? (
              <li>
                Ozone (O3) in {pullResult.city && pullResult.city.name} :{" "}
                <span className={classNameO3(pullResult.iaqi.o3.v)}>
                  {pullResult.iaqi.o3.v} μg/m<sup>3</sup>
                </span>
              </li>
            ) : null}{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};
