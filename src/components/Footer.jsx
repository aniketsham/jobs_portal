import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSquareXTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";
const Footer = () => {
 const {isAuthenticated}=useSelector((state)=>state.user) 
  return (
    <>
    <footer>
      <div>
        <img src="/logo.png" alt="logo"></img>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Mumbai, Maharasthra</li>
          <li>anikets2408@gmail.com</li>
          <li>+91 9920376331</li>
        </ul>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/jobs"}>Jobs</Link></li>
          {
            isAuthenticated && <li><Link to={"/dashboard"}>Dashboard</Link></li>
          }
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <ul>
          <li>
          <Link to={"/"}>
              <span><FaSquareXTwitter/></span>
              <span>Twitter</span>
            </Link>
          </li>
            
          <li>
          <Link to={"/"}>
              <span><FaInstagram/></span>
              <span>Instagram</span>
            </Link>
          </li>
          <li>
          <Link to={"/"}>
              <span><FaLinkedin/></span>
              <span>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>

    <div className="copyright">
          &copy; CopyRight 2024. All Rights Reserved by Aniket Sharma
    </div>
    </>
  )
}

export default Footer
