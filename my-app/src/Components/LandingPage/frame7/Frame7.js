import "./Frame7.css"
import logo from "../../../Images/logoipsum-211.png"
import faceBook from "../../../Images/001-facebook.png"
import twitter from "../../../Images/003-twitter.png"
import instagram from "../../../Images/004-instagram.png"
import linkedin from "../../../Images/Vector.png"
import calling from "../../../Images/Calling.png"
import mail from "../../../Images/email 2.png"
import location from "../../../Images/Location.png"

export function Frame7(){
    return(
        <>
        <div className="frame7">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="1441" height="303" viewBox="0 0 1441 303" fill="none">
            <path opacity="0.05" d="M0 194.663C16.9128 194.663 145.45 302 315.544 302C551.839 302 679.065 -89.0202 1011.87 20.2838C1275.7 106.938 1391.68 116.21 1440 55.9442" stroke="url(#paint0_linear_1_403)"/>
            <defs>
            <linearGradient id="paint0_linear_1_403" x1="162.92" y1="56.9001" x2="1344.34" y2="377.077" gradientUnits="userSpaceOnUse">
            <stop stop-color="#967BDC"/>
            <stop offset="1" stop-color="#6C54F6"/>
            </linearGradient>
            </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1441" height="347" viewBox="0 0 1441 347" fill="none">
            <path opacity="0.05" d="M0 292.729C16.9128 292.729 145.45 346 315.544 346C551.839 346 681.825 -112.874 992.537 27.8041C1219.17 130.413 1353.02 171.171 1440 125.051" stroke="black"/>
        </svg> */}
        <div className="footer">
            <div className="firstFooter">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <p>Compuwon</p>
                </div>
                <div className="frstFooterInfo">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Non sagittis sed quam sed turpis ac faucibus at eu.</p>
                </div>
                <div className="frstFooterFollow">
                    <p>Follow us on</p>
                    <div className="followLinks">
                        <img src={faceBook} alt="faceBook"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={linkedin} alt="linkedin"/>
                    </div>
                </div>
                <div className="terms">
                    <p>©Compuwon   All Right Reserved</p>
                </div>
            </div>
            <div className="secondFooter">
                <h5>Quick Links</h5>
                <ul>
                    <li>About Us</li>
                    <li>Staffing</li>
                    <li>Product Development</li>
                    <li>Testimonials</li>
                    <li>Blogs</li>
                    <li>Career</li>
                    <li>Get In Touch</li>
                </ul>
            </div>
            <div className="thirdFooter">
                <h5>Contact & Information</h5>
                <ul>
                    <li>
                        <div className="bgBackgrey">
                            <div className="bgBackVoilet">
                                <img src={calling} alt="calling"/>
                            </div>
                        </div>
                        <div className="Details">
                            <p>Phone Number</p>
                            <p>+088 123 654 987</p>
                        </div>
                    </li>
                    <li>
                        <div className="bgBackgrey">
                            <div className="bgBackVoilet">
                                <img src={mail} alt="mail"/>
                            </div>
                        </div>
                        <div className="Details">
                            <p>Email</p>
                            <p>ABC@Gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <div className="bgBackgrey">
                            <div className="bgBackVoilet">
                                <img src={location} alt="location"/>
                            </div>
                        </div>
                        <div className="Details">
                            <p>Address</p>
                            <p>35 West Dental Street California 1004</p>
                        </div>
                    </li>
                </ul>
                <div className="linkslast">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            
        </div>
        </div>
        </>
    )
}