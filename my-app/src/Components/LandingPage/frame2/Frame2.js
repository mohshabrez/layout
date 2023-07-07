import "./Frame2.css"
import rightArrow from "../../../Images/arrow-small-right.png"
export function Frame2(){
    return(
        <div className="frame2">
            <div className="frame2Info">
                <span className="AboutFrame">About Us</span>
                <p>Non sagittis sed quam Non sagittis sed quam sed turpis ac <span className="colorFrame">faucibus at eu. Dignissim nibh</span> orci nisl vitae at. Eu cras etiam nascetur in.</p>
            </div>
            <div className="frame2Infotwo">
                <p>Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed quam sed turpis ac faucibus at eu.Non sagittis sed quam sed turpis ac faucibus at eu.</p>
                <div className="knowMore">
                    <label>Know More <img src={rightArrow} alt="rightArrow"/></label>
                </div>
            </div>
        </div>
    )
}