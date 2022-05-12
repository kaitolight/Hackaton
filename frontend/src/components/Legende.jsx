import React from "react";

function Legende() {
    return (
        <div>
            <div className="Legende">
                <h2>Légende</h2>
                <table class="Table style">
                <thead>
                    <tr>
                    <th>AQI</th>
                    <th>Air Pollution Level</th>
                    <th>Health Implications</th>
                    <th>Cautionary Statement (for PM2.5)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>0 - 50</td>
                    <td>Good</td>
                    <td>Air quality is considered satisfactory, and air pollution poses little or no risk</td>
                    <td>None</td>
                    </tr>
                    <tr>
                    <td>51 -100</td>
                    <td>Moderate</td>
                    <td>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</td>
                    <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
                    </tr>
                    <tr>
                    <td>101-150</td>
                    <td>Unhealthy for Sensitive Groups</td>
                    <td>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</td>
                    <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
                    </tr>
                    <tr>
                    <td>151-200</td>
                    <td>Unhealthy</td>
                    <td>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</td>
                    <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</td>
                    </tr>
                    <tr>
                    <td>201-300</td>
                    <td>Very Unhealthy</td>
                    <td>Health warnings of emergency conditions. The entire population is more likely to be affected.</td>
                    <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</td>
                    </tr>
                    <tr>
                    <td>300+</td>
                    <td>Hazardous</td>
                    <td>Health alert: everyone may experience more serious health effects</td>
                    <td>Everyone should avoid all outdoor exertion</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default Legende;