/* eslint-disable react/no-unescaped-entities */

function Legende() {
  return (
    <div>
      <div className="Legende">
        <h2>Table de qualité de l'air</h2>
        <table className="Table style">
          <thead>
            <tr>
              <th>IQA Indice de qualité de l'Air</th>
              <th>Niveau de pollution atmosphérique</th>
              <th>Incidences sur la santé</th>
              <th>Mise en garde (for PM2.5)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0 - 50</td>
              <td>Bonne</td>
              <td>
                La qualité de l'air est considérée comme satisfaisante et la
                pollution de l'air présente peu ou pas de risque
              </td>
              <td>Aucun</td>
            </tr>
            <tr>
              <td>51 -100</td>
              <td>Modérée</td>
              <td>
                La qualité de l'air est acceptable; cependant, elle peut causés
                des problème de santé modéré pour un très petit nombre de
                personnes qui sont exceptionnellement sensibles à la pollution
                de l'air.
              </td>
              <td>
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent limiter les efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td>101-150</td>
              <td>Problèmatique pour les personnes sensibles</td>
              <td>
                Les personnes sensibles peuvent ressentir des effets nefaste
                liés à la pollution. Le reste de la population en revanche n'est
                pas affecté.
              </td>
              <td>
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent limiter les efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td>151-200</td>
              <td>Néfaste pour la santé</td>
              <td>
                Tous le monde peut commencer à ressentir des effets néfaste sur
                sa santé. Les personnes sensible peuvent subir des néfaste
                encore plus conséquent.
              </td>
              <td>
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent éviter les efforts extérieurs prolongés. L'ensemble de
                la population en particulier les enfants, doivent limiter les
                efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td>201-300</td>
              <td>Très néfaste pour la santé</td>
              <td>
                Avertissements sanitaires des conditions d'urgence. Toute la
                population est plus susceptible d'être touchée.
              </td>
              <td>
                Les enfants et les adultes actifs, ainsi que les personnes
                souffrant de maladies respiratoires, telles que l'asthme,
                doivent éviter les efforts extérieurs. L'ensemble de la
                population en particulier les enfants, doivent limiter les
                efforts extérieurs prolongés.
              </td>
            </tr>
            <tr>
              <td>300+</td>
              <td>Aléatoire</td>
              <td>
                Alerte santé : tout le monde peut être affécté des effets
                néfaste grave
              </td>
              <td>Tout le monde doit éviter tout effort extérieur</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Legende;
