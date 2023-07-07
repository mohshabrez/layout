import "./Frame4.css"
import rectangle1 from "../../../Images/Rectangle1.png"
import rectangle2 from "../../../Images/Rectangle 2.png"
import rectangle3 from "../../../Images/Rectangle 3.png"
import rectangle4 from "../../../Images/Rectangle 4.png"

export function Frame4(){
    return(
        <div className="Frame4">
            <div className="section1frame">
                <span className="servicesFrameone">Our Recent Projects</span>
            </div>
            <div className="section1frameline">
                <p>Elevating our Partners’ Products with <span className="colorFrame4">Unparalleled Value</span></p>
            </div>
            <div className="frame4Griding">
                <div className="cards">
                    <img src={rectangle1} alt="rectangle1"/>
                    <h3>LOREM IPSUM</h3>
                    <p>Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed.</p>
                </div>
                <div className="cards">
                    <img src={rectangle2} alt="rectangle1"/>
                    <h3>LOREM IPSUM</h3>
                    <p>Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed.</p>
                </div>
                <div className="cards">
                    <img src={rectangle3} alt="rectangle1"/>
                    <h3>LOREM IPSUM</h3>
                    <p>Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed.</p>
                </div>
                <div className="cards">
                    <img src={rectangle4} alt="rectangle1"/>
                    <h3>LOREM IPSUM</h3>
                    <p>Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed.</p>
                </div>
            </div>
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="226" height="10" viewBox="0 0 226 10" fill="none">
  <rect x="0.450684" width="225.549" height="9.50704" rx="4.75352" fill="#D0D0D0"/>
  <rect x="0.450684" width="56.3873" height="9.50704" rx="4.75352" fill="url(#paint0_linear_1_313)"/>
  <defs>
    <linearGradient id="paint0_linear_1_313" x1="6.83027" y1="1.7656" x2="51.4526" y2="16.7582" gradientUnits="userSpaceOnUse">
      <stop stop-color="#967BDC"/>
      <stop offset="1" stop-color="#6C54F6"/>
    </linearGradient>
  </defs>
</svg>
            </div>
        </div>
    )
}