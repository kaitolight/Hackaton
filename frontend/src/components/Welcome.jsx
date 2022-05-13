import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="home_main_tg">
      <section className="explication_section_tg">
        <h3>Le Context</h3>
        <p>
          La pollution atmosphérique est l&apos;un des plus grands risques
          environnementaux pour la santé. En réduisant les niveaux de pollution
          atmosphérique, les pays peuvent réduire la charge de morbidité liée
          aux accidents vasculaires cérébraux, aux maladies cardiaques, au
          cancer du poumon et aux maladies respiratoires chroniques et aiguës,
          notamment l&apos;asthme. Plus les niveaux de pollution atmosphérique
          sont bas, meilleure sera la santé cardiovasculaire et respiratoire de
          la population, à long et à court terme. Les lignes directrices de
          l&apos;;OMS sur la qualité de l&apos;air : Global Update 2021
          fournissent une évaluation des effets de la pollution atmosphérique
          sur la santé et des seuils pour les niveaux de pollution nuisibles à
          la santé. En 2019, 99 % de la population mondiale vivait dans des
          endroits où les niveaux des lignes directrices de l&apos;OMS sur la
          qualité de l&apos;air n&apos;étaient pas respectés. On estimait que la
          pollution de l&apos;air ambiant (air extérieur) dans les villes et les
          zones rurales était à l&apos;origine de 4,2 millions de décès
          prématurés dans le monde en 2016. Quelque 91 % de ces décès prématurés
          sont survenus dans des pays à revenu faible ou intermédiaire, et le
          plus grand nombre dans les régions OMS de l&apos;Asie du Sud-Est et du
          Pacifique occidental.
        </p>
        <h3>Composition de la pollution atmosphérique</h3>
        <p>
          Les particules fines (PM). Les PM ou particules en suspension
          (Particulate Matter) sont de fines particules solides ou liquides,
          transportées par l&apos;eau ou l&apos;air. Lorsqu’elles ne sont pas
          d&apos;origine naturelle, elles sont provoquées par l&apos;activité
          humaine à travers les chauffages domestiques au bois, les centrales
          thermiques, les carburants fossiles utilisés pour les véhicules…
          Invisibles à l&apos;oeil nu, les particules PM10, de taille inférieure
          à 10 micromètres (µ) sont retenues au niveau du nez et des voies
          aériennes supérieures. Les particules fines ou PM2,5, inférieures ou
          égales à 2,5 micromètres (de la taille des bactéries) se logent
          facilement dans les alvéoles pulmonaires. Les particules les plus
          fines, PM 1 et inferieures peuvent passer la barrière
          alvéolo-capilaire. Le dioxyde de soufre (SO2) (qui produit de
          l&apos;acide sulfurique au contact de l&apos;eau), rejeté par les
          activités industrielles y compris celles liées à l&apos;énergie
          (centrales thermiques), les chauffages résidentiels ou professionnels
          et la combustion du fuel, du charbon, du gazole. De l&apos;ozone (O3),
          un polluant photochimique, (présent surtout l&apos;été), issu de la
          transformation chimique de l&apos;oxygène en contact avec des
          hydrocarbures et des oxydes d&apos;azote, dans un environnement chaud,
          exposé aux rayons UV. L&apos;ozone est notamment à l&apos;origine
          d&apos;un type de smog, une brume brunâtre qui stagne de temps à autre
          au-dessus de grandes villes comme Paris et limite la visibilité dans
          l&apos;atmosphère De dioxyde d’azote NO2 qui provient en grand partie
          de l&apos;oxydation du monoxyde d&apos;azote rejeté dans l&apos;air
          par l&apos;ozone.
        </p>

        <h3>Comment se protéger des effets de la pollutions ?</h3>
        <p>
          Les particules fines (PM). Les PM ou particules en suspension
          (Particulate Matter) sont de fines particules solides ou liquides,
          transportées par l&apos;eau ou l&apos;air. Lorsqu&apos;elles ne sont
          pas d&apos;origine naturelle, elles sont provoquées par l’activité
          humaine à travers les chauffages domestiques au bois, les centrales
          thermiques, les carburants fossiles utilisés pour les véhicules…
          Invisibles à l&apos;oeil nu, les particules PM10, de taille inférieure
          à 10 micromètres (µ) sont retenues au niveau du nez et des voies
          aériennes supérieures. Les particules fines ou PM2,5, inférieures ou
          égales à 2,5 micromètres (de la taille des bactéries) se logent
          facilement dans les alvéoles pulmonaires. Les particules les plus
          fines, PM 1 et inferieures peuvent passer la barrière
          alvéolo-capilaire. Le dioxyde de soufre (SO2) (qui produit de
          l&apos;acide sulfurique au contact de l&apos;eau), rejeté par les
          activités industrielles y compris celles liées à l&apos;énergie
          (centrales thermiques), les chauffages résidentiels ou professionnels
          et la combustion du fuel, du charbon, du gazole. De l&apos;ozone (O3),
          un polluant photochimique, (présent surtout l&apos;été), issu de la
          transformation chimique de l&apos;oxygène en contact avec des
          hydrocarbures et des oxydes d&apos;azote, dans un environnement chaud,
          exposé aux rayons UV. L&apos;ozone est notamment à l&apos;origine
          d&apos;un type de smog, une brume brunâtre qui stagne de temps à autre
          au-dessus de grandes villes comme Paris et limite la visibilité dans
          l&apos;atmosphère De dioxyde d&apos;azote NO2 qui provient en grand
          partie de l&apos;oxydation du monoxyde d&apos;azote rejeté dans
          l&apos;air par l&apos;ozone.
        </p>
      </section>
      <Link to="/Search">
        <button type="button" className="home_bouton_tg">
          Rechercher Votre ville
        </button>
      </Link>
    </main>
  );
}

export default Welcome;
