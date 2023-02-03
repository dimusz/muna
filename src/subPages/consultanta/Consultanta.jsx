import consultantaImage from "../../logo/consultanta.png";
import "./Consultanta.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Consultanta() {
  let navigate = useNavigate();
  return (
    <div className="consultanta">

       <Button onClick={() => navigate("/servicii")}><ArrowBackIcon/></Button> 
      
      <h1>Consultanta</h1>
      <div className="img-container">
        <img
          id="consultanta-img"
          src={consultantaImage}
          alt="consultanta image"
        />
      </div>{" "}
      <div className="consultanta2">
        <div className="consultanta2-container">
        <h1>200 lei/ora</h1>{" "}
        <div>
          <h2>Evaluare companie</h2>
          <h2>Identificarea nevoilor companiei</h2>
          <h2>Definirea strategiei si implementarea ei</h2>
          <h2>Bugetare</h2>
        </div></div>
        <h4>
          *în cazul unei colaborări serviciile de consultanță vor fi deduse din
          prima factură
        </h4>
      </div>
    </div>
  );
}

export default Consultanta;
