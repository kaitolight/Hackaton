import PropTypes from "prop-types";

export default function ResultCard({ pullResult }) {
  // eslint-disable-next-line no-restricted-syntax
  console.log(pullResult);
  return (
    <div>
      Real-time air quality information : {pullResult.aqi}
      <br />
      Name of the monitoring station : {pullResult.city && pullResult.city.name}
      <br />
      Local measurement time : {pullResult.time && pullResult.time.s}
      <br />
      <br />
      The current value of Fine particulate matter (PM2.5) is{" "}
      {pullResult.iaqi && pullResult.iaqi.pm25.v
        ? pullResult.iaqi.pm25.v
        : null}{" "}
      μg/m3
      <br />
      The current value of Coarse particulate matter (PM10) is{" "}
      {pullResult.iaqi && pullResult.iaqi.pm10.v
        ? pullResult.iaqi.pm10.v
        : null}{" "}
      μg/m3
      <br />
      The current value of Nitrogen dioxide (NO2) is{" "}
      {pullResult.iaqi && pullResult.iaqi.no2.v
        ? pullResult.iaqi.no2.v
        : null}{" "}
      μg/m3
      <br />
      The current value of Sulfur dioxide (SO2) is{" "}
      {pullResult.iaqi && pullResult.iaqi.so2.v
        ? pullResult.iaqi.so2.v
        : null}{" "}
      μg/m3
      <br />
      The current value of Ozone (O3) is{" "}
      {pullResult.iaqi && pullResult.iaqi.o3.v
        ? pullResult.iaqi.o3.v
        : null}{" "}
      μg/m3
    </div>
  );
}

ResultCard.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};
