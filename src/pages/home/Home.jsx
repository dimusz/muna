import "./Home.css";
import pozaMuna from "../../logo/pozaMuna.png";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home">
      <div><Helmet><title>Muna | Acasa</title></Helmet></div>
      <h1> Let's get digital!</h1>
      <div id="poza-muna-principal">
        <img id="poza-muna" src={pozaMuna} alt="poza Muna" />
      </div>  
    </div>
  );
}

export default Home;
