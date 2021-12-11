import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Button from "../Button/Button";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import "./GoogleAds.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const element1 = <FontAwesomeIcon icon={faCaretRight} />;
const element2 = <FontAwesomeIcon icon={faCaretDown} />;

const GoogleAds = () => {
  const [toggles, setToggles] = useState(false);
  const [toggle, setToggle] = useState(false);
  const IMG = styled.img`
    margin-top: 8rem;
    margin-left: 2rem;
    @media (max-width: 980px) {
      margin-top: 2rem;
      margin-left: 3rem;
      margin-bottom: 3rem;
    }
  `;

  const Div = styled.div`
    border-top: 1px solid #000000;
    margin-left: 3rem;
    margin-right: 30rem;
    margin-top: 3rem;
    @media (max-width: 1000px) {
      margin-right: 15rem;
      margin-left: 2rem;
    }
    @media (max-width: 700px) {
      margin-right: 5rem;
      margin-left: 2rem;
    }
    @media (max-width: 520px) {
      margin-right: 1rem;
      margin-left: 2rem;
    }
  `;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Header />
      {/* Home Container of GoogleAds */}
      <div
        className="cotainer-fluid"
        style={{ backgroundColor: "#222b38", fontFamily: "Merriweathe,serif" }}
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-white">
            <h6
              className="mx-5"
              style={{
                fontWeight: "bold",
                marginTop: "6rem",
              }}
              data-aos="fade-up"
            >
              ADVERTEREN IN GOOGLE
            </h6>
            <div
              className="h1 text-white mx-5"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginTop: "1rem",
              }}
              data-aos="fade-up"
            >
              Meer Traffic, Leads en Sales dankzij een ijzersterke Google Ads
              campagne.
            </div>
            <p
              className="mx-5"
              style={{
                marginTop: "1rem",
              }}
              data-aos="fade-up"
            >
              Wil je meer leads, verkopen én beter gevonden worden? Met
              adverteren via Google Ads behaal je snel resultaat. Wij helpen je
              met succesvolle advertenties en optimale conversies
            </p>
            <div
              style={{
                marginLeft: "3rem",
                marginBottom: "5rem",
              }}
              data-aos="fade-up"
            >
              <Button btnType="MainPageButton">Neem contact op</Button>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <IMG
              src="Placeholder.png"
              className="img-responsive w-75"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      {/* Content Container of GoogleAds */}
      <div
        className="container-fluid"
        style={{ fontFamily: "Merriweathe,serif" }}
      >
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
            style={{ marginLeft: "3rem" }}
          >
            <p
              style={{
                marginTop: "5rem",

                fontSize: "0.7rem",
                color: "gray",
                fontWeight: "bold",
              }}
            >
              WEBSITE ONTWIKKELING
            </p>
            <h1 style={{ fontWeight: "bold", color: "#222b38" }}>
              Alles over adverteren in
              <br /> Google
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
              Adverteren op Google heeft vele mogelijkheden. Daarnaast kunnen we
              alles heel goed meten om zo de resultaten de goede kant op te
              sturen
            </p>
          </div>
        </div>
      </div>
      {/* Card Container 1*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card className="Cards">
              <Card.Body style={{ marginLeft: "2rem", marginTop: "2rem" }}>
                <Card.Title style={{ color: "#00fa96", fontSize: "1.7rem" }}>
                  01
                </Card.Title>
                <h3 style={{ color: "#3a3a3a" }}>Zoekadvertenties</h3>
                <Card.Text
                  style={{
                    color: "#3a3a3a",
                    fontSize: "1.1rem",
                    marginTop: "1rem",
                  }}
                >
                  Met tekstadvertenties verschijn je bovenaan in de Google
                  zoekresultaten wanneer mensen zoeken op de woorden die voor
                  jou relevant zijn. Je betaalt per klik. Met een goede
                  optimalisatie van de campagne halen we zoveel mogelijk
                  waardevolle kliks binnen.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card className="Cards">
              <Card.Body style={{ marginLeft: "2rem", marginTop: "2rem" }}>
                <Card.Title style={{ color: "#00fa96", fontSize: "1.7rem" }}>
                  02
                </Card.Title>
                <h3 style={{ color: "#3a3a3a" }}>Google Shopping</h3>
                <Card.Text>
                  Heb je een webshop maar maak je nog geen gebruik van Google
                  Shopping? Gemiste kans! Bij veel van onze klanten komt
                  ongeveer de helft van alle online omzet via Google Shopping.
                  Het opzetten ervan is vrij eenvoudig en het managen ervan is
                  nog eenvoudiger. Het enige wat je nodig hebt is een
                  productfeed
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card className="Cards">
              <Card.Body style={{ marginLeft: "2rem", marginTop: "2rem" }}>
                <Card.Title style={{ color: "#00fa96", fontSize: "1.7rem" }}>
                  03
                </Card.Title>
                <h3 style={{ color: "#3a3a3a" }}>Display ads</h3>
                <Card.Text
                  style={{
                    color: "#3a3a3a",
                    fontSize: "1.1rem",
                    marginTop: "1rem",
                  }}
                >
                  Trek de aandacht met mooie banners terwijl mensen online
                  browsen op diverse websites, op YouTube of terwijl ze apps
                  gebruiken. Met een display campagne heb je een groot bereik.
                  Ideaal voor naamsbekendheid. Of zet het in als remarketing om
                  eerder bekeken producten nog eens te laten zien
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <Card className="Cards">
              <Card.Body style={{ marginLeft: "2rem", marginTop: "2rem" }}>
                <Card.Title style={{ color: "#00fa96", fontSize: "1.7rem" }}>
                  04
                </Card.Title>
                <h3 style={{ color: "#3a3a3a" }}>Video campagnes</h3>
                <Card.Text
                  style={{
                    color: "#3a3a3a",
                    fontSize: "1.1rem",
                    marginTop: "1rem",
                  }}
                >
                  Heb je goed videomateriaal? Vergroot dan je bereik door te
                  adverteren op YouTube. Hier zijn verschillende mogelijkheden
                  voor, afhankelijk van je budget, doelstellingen en de video’s
                  die je hebt. Denk aan het afspelen van een reclameboodschap
                  voor of tijdens YouTube video’s. Wij adviseren je graag.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Card Container 2*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <Card className="Cards2">
              <Card.Body>
                <p>5</p>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    marginTop: "2rem",
                    fontSize: "1.4rem",
                  }}
                >
                  Het is een feest om met Superfijn Online te werken
                </Card.Title>
                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Voor Ruimtehouders heeft Superfijn Online het beeldmerk en de
                  huisstijl ontwikkeld, en deze op een consistente en originele
                  manier vertaald naar verschillende middelen, waaronder de
                  website en opleidingsmaterialen. Het team geeft diverse
                  opties, vult teksten aan met eigen ideeën, kan snel schakelen
                  en ook onder tijdsdruk constante kwaliteit leveren. Kortom,
                  het is een feest om met Superfijn Online te werken.
                </Card.Text>
                <h5>Hilde & Mieke</h5>
                <p>Ruimtehouders</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <Card className="Cards2">
              <Card.Body>
                <p>5</p>
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    marginTop: "2rem",
                    fontSize: "1.4rem",
                  }}
                >
                  Professionaliteit, inlevend vermogen, interesse en
                  vakkundigheid
                </Card.Title>
                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Via een kennis kwam ik in contact met Roderick van Superfijn
                  Online. Hij was erg geïnteresseerd in mijn verhaal en
                  bezigheden. Zo ontstond een mooie samenwerking om mijn website
                  een boost te geven. Ik kan Superfijn Online zeer aanbevelen
                  vanwege de professionaliteit, het inlevende vermogen, de
                  interesse en vakkundigheid.
                </Card.Text>
                <h5>Saskia Geerts</h5>
                <p>Flare Uitvaartbegeleiding</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <Card className="Cards2">
              <Card.Body>
                <p>5</p>

                <Card.Text
                  style={{
                    marginTop: "2rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Om mijn bedrijf te onderscheiden heeft Superfijn Online een
                  website en logo ontwikkeld. We zijn super tevreden en krijgen
                  heel veel complimenten. Superfijn Online reageert snel op
                  vragen, levert volgens de afgesproken deadline, is creatief en
                  denkt graag mee.
                </Card.Text>
                <h5>Henk Vrieling</h5>
                <p>Opgeruimd Buiten</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* Alles over Container */}
      <div className="container-fluid" style={{ marginTop: "10rem" }}>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
            style={{ padding: "2rem" }}
          >
            <h6 style={{ color: "gray", fontSize: "0.8rem" }}>
              GOOGLE ADS CAMPAGNES
            </h6>
            <h1>
              Alles over adverteren in
              <br /> Google
            </h1>
            <p style={{ fontSize: "1.2rem" }}>
              Wil je adverteren op Google maar weet je niet hoe je dit op de
              juiste manier aan kunt pakken? Ben je benieuwd naar de
              mogelijkheden die er bestaan op het gebied van online adverteren ,
              adverteren op Google of zoek je een digital marketing specialist
              om jouw AdWords campagne aan uit te besteden? In onderstaand
              artikel verduidelijken we de toegevoegde waarde van adverteren bij
              Google en laten wij je zien wat er allemaal mogelijk is.
              Adverteren op Google is in de meeste gevallen zeer interessant
              doordat je direct beter vindbaar in Google bent. Door een
              grootschalig onderzoek dat we vooraf uitvoeren en de Quickscan die
              we kunnen maken als je een bestaand account hebt, weten we exact
              welke potentie er voor jou bestaat.
            </p>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12"
            style={{ padding: "1.5rem" }}
          >
            <p>
              Denk je eraan om Google Ads in te zetten? Slim, want adverteren in
              Google heeft verschillende voordelen:
            </p>
            <ul style={{ listStyle: " square outside", fontSize: "1.3rem" }}>
              <li>
                Je bent direct zichtbaar voor jouw doelgroep dankzij uitgebreide
                targeting. Ook wanneer je op SEO gebied niet hoog scoort
              </li>
              <li>
                Je bepaalt zelf voor wie jouw advertenties zichtbaar moeten
                zijn. Door slimme targeting trek je enkel relevante bezoekers.
              </li>
              <li>Je genereert meer verkeer naar je website.</li>
              <li>
                Je bepaalt zelf je advertentiebudget, te aller tijde heb je
                controle.
              </li>
              <li>
                Je krijgt inzicht in zoektermen die leiden tot ingevulde
                contactformulieren, downloads en bestellingen (vrijwel alles is
                meetbaar).
              </li>
              <li>
                Je wedt op twee paarden (SEA en SEO), vergroot hiermee je
                naamsbekendheid én je kans op nieuwe klanten.
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <hr className=" w-75" />
          </div>
        </div>
      </div>
      {/* Hoe Werket Container */}
      <div className="container-fluid" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className="col" style={{ padding: "2rem" }}>
            <h6 style={{ color: "gray", fontSize: "0.8rem" }}>
              OVER GOOGLE ADS
            </h6>
            <h1>
              Hoe werkt adverteren in
              <br />
              Google Ads?
              <br />
            </h1>
            <div style={{ fontSize: "1.2rem" }}>
              <p style={{ marginTop: "1.5rem" }}>
                Er zijn verschrikkelijk veel systemen om websites mee te maken.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                Met een Google Ads campagne betaal je per klik voor een
                toppositie in de zoekresultaten van
                <br /> Google. De prijs voor een klik varieert van Eur 0,01 tot
                Eur 2,50 afhankelijk van jouw type
                <br /> product of dienst. Hoeveel je wilt betalen voor een klik
                bepaal je zelf. Bij dit zogenaamde ‘pay
                <br /> per click’ model, betaal je dus enkel een klein bedrag
                wanneer iemand op je advertentie
                <br /> klikt.
                <h6>Wordt er niet geklikt? Dan kost het je niets.</h6>
              </p>
              <h4 style={{ marginTop: "2rem" }}>
                Wat kost Google Ads per maand?
              </h4>
              <p style={{ marginTop: "2rem" }}>
                Adverteren kost geld. Ja dat klopt, maar hoe duur is online
                adverteren of zoals het mij vaak
                <br /> gevraagd wordt: Wat kost online adverteren met Google?
                Het antwoord op deze vraag is
                <br /> eigenlijk heel simpel: Zoveel als je zelf maar wilt. Ik
                zie je denken “Leuk antwoord maar daar
                <br /> heb ik niets aan”. Nee dat kan ik me voorstellen. In deze
                blog leg ik uit hoe het zit.
              </p>
              <p>
                Online adverteren werkt namelijk anders als offline adverteren
                (advertentie in een krant of iets
                <br /> dergelijke). Je betaalt niet voor een plaatsing maar voor
                een click*. Elke keer als iemand iets
                <br /> opzoekt op bijvoorbeeld google.nl, dan vindt er een
                veiling plaats. De kosten van een click (cpc
                <br /> = cost per click) is afhankelijk van de concurrentie op
                de ingestelde keywords, de matchtype
                <br /> van het keyword, de relevantie van je advertentie, de
                kwaliteit van je
                <br />
                landingspagina en wat je bereid bent om te betalen. Dit houdt in
                dat je voor een click een half uur later een ander
                <br /> bedrag kunt betalen als daarvoor. Daarbij kun je elk
                moment inloggen en je maximaal
                <br /> ingestelde CPC of budget aanpassen.
              </p>
              <h4 style={{ marginTop: "2rem" }}>Max CPC en budget</h4>
              <p style={{ marginTop: "2rem" }}>
                Met adverteren op zoekmachines als google.nl kun je instellen
                hoeveel geld je maximaal per
                <br /> dag kwijt wilt zijn (dagbudget) en wat je maximaal wilt
                betalen voor vertoningen per keyword
                <br /> (max CPC). Op deze manier kun je zelf je budget bepalen.
                Daarbij komt, doordat het op basis
                <br /> van een veiling is je € 0,01 meer betaalt dan de
                concurrent met dezelfde Ad rank** en
                <br /> daarmee vaak onder je maximale CPC blijft. Met andere
                woorden, het komt regelmatig voor
                <br /> dat je onder je maximale gestelde dagbudget blijft.
              </p>
              <h4 style={{ marginTop: "2rem" }}>Dagbudget</h4>
              <p style={{ marginTop: "2rem" }}>
                Stel: je dagbudget is € 3 en een gemiddelde CPC is € 0,55. Dan
                is het niet zo dat als er 6x een
                <br /> zoekterm ingetikt wordt die relevant is voor jouw
                advertenties, deze elke keer getoond wordt.
                <br /> De default instelling in Adwords is dat de advertenties
                verdeeld over de dag vertoond worden,
                <br /> zodat je niet bij een beperkt budget meteen als ‘s
                ochtends door je dagbudget heen beent en
                <br /> de rest van de dag je advertentie niet meer getoond kan
                worden. Inherent houdt dit dus ook in
                <br /> dat als je een beperkt budget hebt dat het kan voorkomen
                dat je
                <br /> minder zichtbaar bent dan je wilt. Vaak kun je dit al
                verbeteren door middel van optimalisaties in de instellingen en/
                of
                <br /> campagnes.
              </p>
              <p style={{ marginTop: "2rem" }}>
                Kortom een max CPC en een dagbudget kan elk bedrag zijn vanaf €
                0,01. Dit is waarom ik vaak
                <br /> antwoord op de vraag: “Wat kost online adverteren met
                Google? – Zoveel als je zelf maar wilt.”
                <br />
                Dus ook met een beperkt budget is het mogelijk online te
                adverteren met google en daarmee
                <br /> je online vindbaarheid te vergroten
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr className=" w-75" />
      </div>

      {/* Toggle Div Container */}
      <div className="container-fluid">
        <div className="row">
          <div className="col" style={{ color: "#424242" }}>
            <Div></Div>
            <div
              style={{
                marginTop: "1rem",
                marginLeft: "3rem",
              }}
              onClick={() => setToggles((prevState) => !prevState)}
            >
              {toggles ? element2 : element1}
              <span className="h5 mx-2">
                Is adverteren in Google interessant?
              </span>
            </div>
            {toggles ? (
              <div
                style={{ marginTop: "1rem", marginLeft: "3rem" }}
                data-aos="fade-up"
              >
                <h5>Adverteren in Google</h5>
                <h2>
                  Is adverteren in Google
                  <br /> interessant?
                </h2>
                <p style={{ fontSize: "1.2rem" }}>
                  Bezoekers naar de website trekken, dat wil je als marketing
                  manager of ondernemer. Dus
                  <br /> wordt er al vrij snel een budget vrij gemaakt om
                  betaald te adverteren in Google. Graag delen
                  <br />
                  we je wat ideeën om een zo goed mogelijk resultaat te halen
                  uit zoekmachine adverteren. We
                  <br /> zoomen daarbij in op de voor- en nadelen van een Google
                  Ads campagne, zodat je een goede
                  <br /> afweging kan maken over jouw budget. De effectiviteit
                  van een Google Adwords campagne valt
                  <br /> of staat uiteraard met de doelen die je vooraf stelt en
                  de strategie die je nastreeft. Snel een
                  <br /> campagne opzetten, te algemene zoekwoorden invoeren en
                  weinig oog voor detail zijn
                  <br />
                  bekende valkuilen die je kunt voorkomen. Je streeft immers
                  naar een geoliede en succesvolle
                  <br /> Google Ads campagne die nieuwe klanten oplevert en meer
                  geld oplevert dan dat het je kost.
                  <br /> Ondoordacht en gehaast werk zal zonder meer leiden tot
                  een ineffectieve kostenpost waar je
                  <br /> beter niet aan had kunnen beginnen. Een sterke Google
                  Ads campagne levert onbetwist een
                  <br />
                  aantal unieke voordelen op, op voorwaarde dat jouw Ads
                  campagne goed is doordacht en
                  <br /> opgebouwd. Ons advies luidt dan ook stellig: Heb oog
                  voor detail, neem de tijd en ga
                  <br /> doordacht en systematisch te werk.
                </p>
              </div>
            ) : null}
            <div
              style={{
                borderTop: "1px solid #000000 ",
                marginLeft: "3rem",
                marginRight: "30rem",
                marginTop: "1rem",
              }}
            ></div>
            <div
              style={{
                marginTop: "1rem",
                marginLeft: "3rem",
              }}
              onClick={() => setToggle((prevState) => !prevState)}
            >
              {toggle ? element2 : element1}
              <span className="h5 mx-2">Voor wie is Google Ads geschikt?</span>
            </div>
            {toggle ? (
              <div
                style={{ marginTop: "1rem", marginLeft: "3rem" }}
                data-aos="fade-up"
              >
                <h5>Google Ads tegoed</h5>
                <h2>Voor wie is Google Ads geschikt?</h2>
                <p style={{ fontSize: "1.2rem" }}>
                  Iedereen kan starten met Google Ads (een paar jaar geleden
                  heette dit trouwens nog
                  <br /> AdWords). Google zelf kan je hierbij helpen en biedt
                  zelfs gratis kliktegoed (tot wel € 150,-) voor
                  <br />
                  nieuwe accounts. Maar wil je écht resultaat halen met Ads, dan
                  komt er meer bij kijken. Om
                  <br /> een campagne echt goed te kunnen optimaliseren moet je
                  in ieder geval rekening houden met
                  <br /> het volgende: – Minimaal benodigd klikbudget van €
                  600,- per maand. – Minimale looptijd van
                  <br /> 6 maanden. – Het meten van conversies (aankopen,
                  aanvragen) moet mogelijk zijn. Daarnaast
                  <br /> is het belangrijk om ongeveer aan te kunnen geven wat
                  een conversie je gemiddeld oplevert
                  <br />
                  en hoeveel één conversie dus mag kosten wil de campagne
                  rendabel zijn. Als SEA specialist
                  <br /> helpen wij je graag dit in kaart te brengen en hier
                  concrete doelstellingen aan te koppelen.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GoogleAds;
