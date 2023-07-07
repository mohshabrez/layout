import "./Frame1.css"
import logo from "../../../Images/logoipsum-211.png"
import down from "../../../Images/chevron-down.png"
import eclipse from "../../../Images/Ellipse 1.png"
import arrowDown from "../../../Images/arrow-small-down.png"
import tefal from "../../../Images/tefal-2.png"


export function Frame1(){

    return(
        <>
        <div className="Frame1" style={{overflow:"hidden"}}>
            <div className="Nav">
                <div className="logo">
                    <div className="navGreyBox"></div>
                    <img src={logo} alt="logo" />
                    <p>Compuwon</p>
                </div>
                <div className="NavSection">
                    <p>AboutUs</p>
                    <p>Services <span className="chevronDown"><img src={down} alt="down" /></span></p>
                    <p>Blogs</p>
                    <p>Carrers</p>
                </div>
                <div className="navGreyBoxend"></div>
                <div className="navEndd">
                    <p>Get In Touch</p>
                </div>
            </div>
            <div className="navGreyBoxnxtFrame"><div className="navGreyBoxnxtinFrame"></div></div>
            <div className="frameone">
                <div className="frameheadingone"><p>Tempus nam at iaculis elementum odio eu sapien.</p></div>
                <div className="frameheadingtwo"><p>Non sagittis sed quam sed turpis ac faucibus at eu.</p></div>
                <div className="eclipse"><img src={eclipse} alt="eclipse" /></div>
                <div className="arrowDown"><img src={arrowDown} alt="eclipse" /></div>
            </div>
            <div className="breakone"></div>
            <div className="frametwo"><p>Trusted by the best companies:</p></div>
            <br/>
            <div className="Tefal">
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
                <img src={tefal} alt="tefalImg" />
            </div>
        </div>
        </>
    )
}