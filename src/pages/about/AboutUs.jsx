import "./AboutUs.css";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    
    <div className="about">
      <div><Helmet><title>Muna | Despre noi</title></Helmet></div>
      <h1>
        {" "}
        <p>MUNA</p> este o agenție de dezvoltare pagini si aplicații web,
        marketing online, branding si rebranding și suntem parte a
        Dina&Muszuriak SRL.
      </h1>
      <h2>
        Suntem o companie cu capital 100% românesc, din 2014 am pornit doua
        afaceri de la 0 pe care am reușit să le creștem în fiecare an.{" "}
      </h2>
      <div id='about-description'><h3>
        {" "}
        După o pregatire asiduă, cursuri de perfectionare, webinarii,
        training-uri, în 2022 am intrat in online cu primul site și am început
        să facem marketing pentru compania noastră iar ulterior și pentru unii
        parteneri. Rezultatele au fost bune și așa a
        aparut</h3>
        <h4>
          <CopyrightIcon />
          MUNA marketing and branding.
        </h4>
      </div>
    </div>
  );
}

export default AboutUs;
