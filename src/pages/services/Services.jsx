import "./Services.css";
import servicesImage from "../../logo/servicesImage.png";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
function Services() {
  let navigate = useNavigate();

  const buttons = [
    { description: "Consultanta", path: "/consultanta" },
    { description: "Marketing", path: "/marketing" },
  ];

  const buttons1 = [
    { description1: "Branding si Rebranding", path: "/branding" },
    { description1: "Web-design", path: "/design" },
  ];

  return (
    <div className="services">
      <div className="services1">
        <div id="categories">
          <ul id="buttons-map">
            {buttons.map((buttonApp) => {
              const { description, path } = buttonApp;
              return (
                <li
                  id="desktop-buttons"
                  key={description}
                  onClick={() => navigate(path)}
                >
                  <div id="btn">
                  
                  <Button>{description}</Button>  
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="categories-1">
          <ul id="buttons-map-1">
            {buttons1.map((buttonApp1) => {
              const { description1, path } = buttonApp1;
              return (
                <li
                  id="desktop-buttons-1"
                  key={description1}
                  onClick={() => navigate(path)}
                >
                  <div id="btn1">
                 <Button>{description1}</Button>   
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="services-container">
        <img id="services-img" src={servicesImage} alt="services image" />
      </div>
    </div>
  );
}

export default Services;
