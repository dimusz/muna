import "./WebDev.css";
import website from "../../logo/website.png";
import onlineShop from "../../logo/online-shop.png";
import design from "../../logo/design.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet";
function WebDev() {
  let navigate = useNavigate();
  return (
    <div className="webDev">
      <div><Helmet><title>Muna | WebDev</title></Helmet></div>
      <Button onClick={() => navigate("/servicii")}>
        <ArrowBackIcon />
      </Button>
      <h1>Web-design</h1>
      <div>
        {" "}
        <img id="design" src={design} alt="design image" />
      </div>
      <div className="website">
        <div>
          {" "}
          <img id="website-image" src={website} alt="website image" />
        </div>
        <div>
          <h1>Website pentru portofoliu/ site de prezentare/blog</h1>
          <h2>
            de la 1000 RON* - creare website folosind platforme (WordPress, Wix,
            etc)
          </h2>
          <h2>de la 2500 RON* - creare website custom</h2>
          <h4>*prețurile nu includ domeniul și serviciile de hosting</h4>
        </div>
      </div>
      <div className="online-shop">
        <div>
          <img
            id="online-shop-image"
            src={onlineShop}
            alt="online-shop image"
          />
        </div>
        <div>
          <h1>Magazin online</h1>
          <h2>
            de la 3000 RON* - creare magazin online folosind platforme
            (WordPress, Wix, etc)
          </h2>
          <h2>de la 6000 RON* - creare magazin online custom</h2>
          <h4>*prețurile nu includ domeniul și serviciile de hosting</h4>
        </div>
      </div>
    </div>
  );
}
export default WebDev;
