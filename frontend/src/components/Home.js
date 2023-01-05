import './Home.css';
import Placeholder from '../assets/Placeholder'
function Home() {
  return (
    <div className="home-container">
        <div className="panel-1">
          {/*PLACEHOLDER DIV*/}
          <div className="img-placeholder">
            <Placeholder></Placeholder>
          </div>
          {/*  */}
          <div className="description">
            <h1>
              Join the Aisha Comfortable Coliving Community
            </h1>
            <h2 className="small-text">
              Safe, Comfortable, and Community Oriented
            </h2>
            <p>
              Aisha Comfortable Coliving is a platform that works
              to empower women by matching like-minded women to colive
              in a safe and enjoyable space. We strive to build an
              inclusive, supportive, and fun community for all women.
            </p>

            <div className="button-container">
              <button className="tenant-button">
                <strong> Tenant </strong>
              </button>
              <button className="homeowner-button">
                <strong> Homeowner </strong>
              </button>
            </div>
          </div>
        </div>
        <h1 className="banner large-text blue-font blue-background">
          Why Coliving?
        </h1>
        <h2 className="banner small-text blue-font blue-background">
          Coliving is the new way of wellness living
        </h2>

        <div className="infographic">
          <div className="infobox colour-info-pink">
            Social Support
          </div>
          <div className="infobox colour-info-dark-blue">
            Money Saving
          </div>
          <div className="infobox colour-info-light-blue">
            Sustainable Living
          </div>
          <div className="infobox colour-info-blue">
            Network Building
          </div>
        </div>

        <object className="video-box" data="coliving explanation" type="video"> 
          <h2 className="video-caption small-text"> 
          Watch this short video to hear <b>Wendy and Innes</b> talk about
          how they began <b>coliving</b> and how their lives have changed since.
          </h2>
          {/*PLACEHOLDER DIV*/}
          <div className="img-placeholder">
            <Placeholder></Placeholder>
          </div>
          {/*  */}
        </object>


    </div>
  );
}

export default Home;
