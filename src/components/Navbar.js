import "./Navbar.css";
import thali from "C:/Users/hetvi/OneDrive/Desktop/project/yumtiffin/src/images/thali.jpeg";
function Section_1_Landingpage() {
  return (
    <>
      <div className="section_1">
        <img src={thali} id="thali"></img>
        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">YUMTIFFIN</div>
          </div>

          <div className="nav-links">
            <a href="" target="_blank">
              LOGIN
            </a>
            <a href="" target="_blank">
              SIGIN
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Section_1_Landingpage;
