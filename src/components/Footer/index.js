import {BiSolidPhoneCall, BiLogoPinterestAlt} from 'react-icons/bi'
import {
  AiTwotoneMail,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineBehance,
} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'

// import {AiFillLinkedin} from 'react-icons/ai'

import './index.css'

const Footer = () => (
  <div className="footerBackground">
    <div className="footerLeft">
      <div className="boxesBottomss">
        <h1 className="detailsHeading">CONTACT US</h1>
        <div className="arrowBoxess">
          <hr className="horizontalLiness" />
          <div className="circlesNewOnes">{null}</div>
        </div>
      </div>

      <div className="contactDetails">
        <div className="contact1">
          <div className="call">
            <BiSolidPhoneCall className="callIcon" />
          </div>
          <p className="callDetails">+91 8169961396</p>
        </div>

        <div className="contact1">
          <div className="call">
            <AiTwotoneMail className="callIcon" />
          </div>
          <p className="callDetails">patcoproduction@gmail.com</p>
        </div>

        <div className="contact1">
          <div className="call">
            <ImLocation2 className="callIcon" />
          </div>
          <p className="callDetails">
            66, hariminder singh road, aram nagar part-1,versova, mumbai-400061
          </p>
        </div>
      </div>
    </div>

    <div className="footerRight">
      <div className="calls">
        <AiFillLinkedin className="callIcons" />
      </div>

      <div className="calls1">
        <AiOutlineInstagram className="callIcons" />
      </div>

      <div className="calls2">
        <AiOutlineBehance className="callIcons" />
      </div>

      <div className="calls3">
        <AiFillFacebook className="callIcons" />
      </div>

      <div className="calls4">
        <BiLogoPinterestAlt className="callIcons" />
      </div>

      <div className="companyBox">
        <h1 className="companyName">Pat.Co</h1>
        <p className="companyPara">Productions</p>
      </div>
    </div>
  </div>
)

export default Footer
