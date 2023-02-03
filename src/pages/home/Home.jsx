import "./Home.css";
import pozaMuna from "../../logo/pozaMuna.png";

function Home() {
  return (
    <div className="home">
      <h1> Let's get digital!</h1>
      <div id="poza-muna-principal">
        <img id="poza-muna" src={pozaMuna} alt="poza Muna" />
      </div>  
    </div>
  );
}

export default Home;
