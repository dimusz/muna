import marketing from "../../logo/marketing.png";
import marketing1 from "../../logo/marketing1.png";
import "./Marketing.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from '@mui/material/Button';
import { Helmet } from "react-helmet";
function Marketing() {
  let navigate=useNavigate()
  return (
    <div className="marketing">
      <div><Helmet><title>Muna | Marketing</title></Helmet></div>
     <Button onClick={()=>navigate('/servicii')}><ArrowBackIcon/></Button> 
    <div> <h1>Marketing</h1> </div>
     <div className="basic">
      
        <div>
          <img id="marketing" src={marketing} alt="marketing image" />
        </div>
        <div>
          {" "}
          <h1>Basic</h1>
          <h2>de la 600 RON/Lună</h2>
          <h3>
            <p>
              {" "}
              • Creare/Moderare conținut pentru paginile de pe platformele
              sociale(Instagram, FaceBook, Twitter, LinkedIn)
            </p>{" "}
            <p>• 3 postări pe săptămână (de tip story)</p>
            <p> • 3 postări pe săptămână</p>{" "}
          </h3>
        </div>
      </div>
      <div className="business">
        <div>
          {" "}
          <img id="marketing1" src={marketing1} alt="marketing image" />
        </div>
        <div>
          <h1>Bussines</h1>
          <h2>de la 1200 RON/Lună</h2>
          <h3>
            <p>
              • Creare/Moderare conținut pentru paginile de pe platformele
              sociale(Instagram, FaceBook, Twitter, LinkedIn)
            </p>
            <p>• 5 postări pe săptămână (de tip story) </p>
            <p> • 5 postări pe săptămână</p>
            <p>
              {" "}
              • 2 sesiuni foto-video/luna • buget 100 lei/lună pentru postări
              sponsorizate
            </p>{" "}
          </h3>
        </div>
      </div>
      <div className="pro">
        <div>
          <img id="marketing1" src={marketing1} alt="marketing image" />
        </div>
        <div>
          <h1>PRO</h1>
          <h2>de la 2000 RON/Lună</h2>
          <h3>
            <p>
              • Creare/Moderare conținut pentru paginile de pe platformele
              sociale(Instagram, FaceBook, Twitter, LinkedIn)
            </p>
            <p>• 7 postări pe săptămână (de tip story)</p>
            <p> • 7 postări pe săptămână</p>
            <p>• 4 sesiuni foto-video/luna</p>
            <p>• buget 300 lei/lună pentru postări sponsorizate</p>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
