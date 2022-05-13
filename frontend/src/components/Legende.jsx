/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import "../styles/Legende.css";

function Legende({ pullResult }) {
  if (pullResult.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="Legende">
        <h2>Tableau de l'indice de qualité de l'air</h2>
        <table className="Table style">
          <thead>
            <tr className="take-color-body">
              <th>IQA Indice de qualité de l'Air</th>
              <th>Niveau de pollution atmosphérique</th>
              <th>Incidences sur la santé</th>
              <th>Mise en garde (for PM2.5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="legende-green">0 - 50</td>
              <td className="legende-green">Bonne</td>
              <td className="legende-green">
                La qualité de l'air est considérée comme satisfaisante et la
                pollution de l'air présente peu ou pas de risque
              </td>
              <td className="legende-green">Aucune</td>
            </tr>
            <tr>
              <td className="legende-yellow">51 -100</td>
              <td className="legende-yellow">Modérée</td>
              <td className="legende-yellow">
                La qualité de l'air est acceptable; cependant, elle peut causer
                des problèmes de santé modérés pour un très petit nombre de
                personnes qui sont exceptionnellement sensibles à la pollution
                de l'air.
              </td>
              <td className="legende-yellow">
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrantes de maladies respiratoires, telles que l'asthme,
                doivent limiter les efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td className="legende-orange">101-150</td>
              <td className="legende-orange">
                Problèmatique pour les personnes sensibles
              </td>
              <td className="legende-orange">
                Les personnes sensibles peuvent ressentir des effets nefastes
                liés à la pollution. Le reste de la population, en revanche,
                n'est pas affectée.
              </td>
              <td className="legende-orange">
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent limiter les efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td className="legende-red">151-200</td>
              <td className="legende-red">Néfaste pour la santé</td>
              <td className="legende-red">
                Tous le monde peut commencer à ressentir des effets néfastes sur
                sa santé. Les personnes sensibles peuvent subir des effets
                néfastes encore plus conséquents.
              </td>
              <td className="legende-red">
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrantes de maladies respiratoires, telles que l'asthme,
                doivent éviter les efforts extérieurs prolongés. L'ensemble de
                la population, en particulier les enfants, doivent limiter les
                efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td className="legende-purple">201-300</td>
              <td className="legende-purple">Très néfaste pour la santé</td>
              <td className="legende-purple">
                Avertissements sanitaires des conditions d'urgence. Toute la
                population est plus susceptible d'être touchée.
              </td>
              <td className="legende-purple">
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent éviter les efforts extérieurs. L'ensemble de la
                population en particulier les enfants, doivent limiter les
                efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td className="legende-brown">300+</td>
              <td className="legende-brown">Très dangereux</td>
              <td className="legende-brown">
                Alerte santé : tout le monde peut être affécté des effets
                néfastes graves
              </td>
              <td className="legende-brown">
                Tout le monde doit éviter tout effort extérieur
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Legende.propTypes = {
  pullResult: PropTypes.arrayOf.isRequired,
};

export default Legende;
