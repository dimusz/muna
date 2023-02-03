import React, { useState } from "react";
import branding from "../../logo/branding.png";
import "./BrRbr.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
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
  return (
    <div className="BrRbr">
      <Button onClick={() => navigate("/servicii")}>
        <ArrowBackIcon />
      </Button>
      <div className="BrRbr-2">
        <div>
          {" "}
          <img id="branding" src={branding} alt="branding image" />
        </div>
        <div>
          <h1>
            {" "}
            <ReadMore>
              Brandingul este procesul prin care se creaza in mintea
              consumatorului, o identitate asupra unei afaceri. Prin branding
              intelegem crearea unui logo, stabilirea unei palete de culori care
              va fi folosita intotdeauna, stabilirea misiunii companiei.
              Brandingul este important pentru ca te face memorabil si ii
              permite clientului sa afle de la ce sa se astepte de la compania
              ta.
            </ReadMore>
          </h1>
        </div>
        <div className="branding-setup">
          <table>
            <tr>
              <th id="personal">
                {" "}
                <h2>Branding personal</h2>
                <h3>
                  <ReadMore>sadfghdjkghl</ReadMore>{" "}
                </h3>{" "}
              </th>
              <th id="produs">
                {" "}
                <h2>Branding de produs</h2>{" "}
                <h3>
                  {" "}
                  <ReadMore>asfhgdjkfiuytdxc</ReadMore>{" "}
                </h3>{" "}
              </th>
              <th id="companie">
                {" "}
                <h2>Branding de companie</h2>
                <h3>
                  <ReadMore>dsfafhgdjkcfzd</ReadMore>
                </h3>{" "}
              </th>
            </tr>
          </table>
        </div>

        <div>
          <h4>*de la 2000 lei</h4>
        </div>
      </div>
    </div>
  );
}
export default BrRbr;
