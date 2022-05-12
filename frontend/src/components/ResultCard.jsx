import PropTypes from "prop-types";
import "../styles/ResultCard.css";

export default function ResultCard({ pullResult }) {
  return (
    <div className="result-box">
      Real-time air quality information : {pullResult.aqi}
      <br />
      Name of the monitoring station : {pullResult.city && pullResult.city.name}
      <br />
      Local measurement time : {pullResult.time && pullResult.time.s}
      <br />
      <br />
      {pullResult.iaqi && pullResult.iaqi.pm25.v
        ? `The current value of Fine particulate matter (PM2.5) is ${pullResult.iaqi.pm25.v} μg/m3`
        : null}{" "}
      <br />
      {pullResult.iaqi && pullResult.iaqi.pm10.v
        ? `The current value of Coarse particulate matter (PM10) is ${pullResult.iaqi.pm10.v} μg/m3`
        : null}
      <br />
      {pullResult.iaqi && pullResult.iaqi.no2.v
        ? `The current value of Nitrogen dioxide (PM10) is ${pullResult.iaqi.no2.v} μg/m3`
        : null}
      <br />
      {pullResult.iaqi && pullResult.iaqi.so2.v
        ? `The current value of Sulfur dioxide (PM10) is ${pullResult.iaqi.so2.v} μg/m3`
        : null}
      <br />
      {pullResult.iaqi && pullResult.iaqi.o3.v
        ? `The current value of Ozone (PM10) is ${pullResult.iaqi.o3.v} μg/m3`
        : null}
    </div>
  );
}

ResultCard.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};
