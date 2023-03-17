import React, { useState } from "react";
import branding from "../../logo/branding.png";
import "./BrRbr.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function BrRbr() {
  let navigate = useNavigate();
  return (<div><div><Helmet><title>Muna | Branding</title></Helmet></div>
    <div className="BrRbr">
      <Button onClick={() => navigate("/servicii")}>
        <ArrowBackIcon />
      </Button>
      <div className="BrRbr-2">
        <div>
          {" "}
          <img id="branding" src={branding} alt="branding image" />
        </div>
        <div className="principal-container">
          <div className="principal">
            {" "}
            <h2>Brandingul</h2> este procesul prin care se creaza in mintea
            consumatorului, o identitate asupra unei afaceri. Prin branding
            intelegem crearea unui logo, stabilirea unei palete de culori care
            va fi folosita intotdeauna, stabilirea misiunii companiei.
            Brandingul este important pentru ca te face memorabil si ii permite
            clientului sa afle de la ce sa se astepte de la compania
            ta.Brandingul este un proces continuu prin care compania isi schimba
            perceptia pe care o are publicul asupra ei.
          </div>
        </div>
        <div className="branding-setup">
          <table>
            <tbody>
              <tr>
                <th id="companie">
                  {" "}
                  <h2>Branding de companie</h2>
                  <h3>
                    <ReadMore>
                      Brandingul de companie este un proces prin care se creaza
                      o identitate distincta a companiei, in mintea
                      consumatorului.{" "}
                    </ReadMore>
                  </h3>{" "}
                </th>
                <th id="produs">
                  {" "}
                  <h2>Branding de produs</h2>{" "}
                  <h3>
                    {" "}
                    <ReadMore>
                      Brandingul de produs reprezinta o strategie de marketing
                      prin care un anumit produs se diferentiaza de celalate
                      produse ale companiei.
                    </ReadMore>{" "}
                  </h3>{" "}
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>*de la 2000 lei</h4>
        </div>
      </div>
    </div></div>
  );
}
export default BrRbr;
