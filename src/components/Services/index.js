import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

import {IoArrowBackOutline, IoArrowForwardOutline} from 'react-icons/io5'

import './index.css'

const logoObjects = [
  {
    name: 'Docker',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
  },
  {
    name: 'Kubernetes',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/kubernetes-img.png',
  },
  {
    name: 'Terraform',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/terraform-img.png',
  },
  {
    name: 'Jenkins',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/jenkins-img.png',
  },
  {
    name: 'GO',
    image_url: 'https://assets.ccbp.in/frontend/react-js/jobby-app/go-img.png',
  },
  {
    name: 'Ansible',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/ansible-img.png',
  },
  {
    name: 'Docker',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png',
  },
  {
    name: 'Kubernetes',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/kubernetes-img.png',
  },
  {
    name: 'Terraform',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/terraform-img.png',
  },
  {
    name: 'Jenkins',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/jenkins-img.png',
  },
  {
    name: 'GO',
    image_url: 'https://assets.ccbp.in/frontend/react-js/jobby-app/go-img.png',
  },
  {
    name: 'Ansible',
    image_url:
      'https://assets.ccbp.in/frontend/react-js/jobby-app/ansible-img.png',
  },
]

const Services = () => (
  <div className="serviceBackground">
    <h1 className="newOneHeadings">OUR SERVICES</h1>
    <div className="bottomBox">
      <div className="boxexArrow">
        <div className="newCircles">{null}</div>
        <hr className="lineHorizontal" />
      </div>
    </div>

    <div className="detailBoxes">
      <div className="detail1">
        <h1 className="heading1">EXPLAINER VIDEOS</h1>

        <hr className="purpleHorizontal" />

        <p className="smallPara">
          unveil your brand's potential with our captivating explainer videos.
          Engaging visuals, seamless animations, and strategic storytelling that
          educates and inspires action. Elevate your brand with Patco
          Productions. Let's bring your story to life.
        </p>
      </div>

      <div className="detail1">
        <h1 className="heading1">MOTION GRAPHICS</h1>

        <hr className="purpleHorizontal" />

        <p className="smallPara">
          Captivating motion graphics that bring your brand to life. Enhance
          your content with dynamic visuals, engaging animations, and seamless
          transitions. Elevate your message with our expert motion graphics
          services.
        </p>
      </div>

      <div className="detail1">
        <h1 className="heading1">3D/VFX</h1>

        <hr className="purpleHorizontal" />

        <p className="smallPara">
          Experience the power of 3D VFX. Mind-blowing visual effects, realistic
          simulations, and immersive virtual words. Take your visuals to new
          dimensions with cutting-edge 3D VFX
        </p>
      </div>

      <div className="detail1">
        <h1 className="heading1">LIVE SHOOT</h1>

        <hr className="purpleHorizontal" />

        <p className="smallPara">
          Immersive live shoots that capture the essence of the moment. Expertly
          crafted visuals, dynamic camera work and captivating storytelling.
          Experience the magic of live shoots with us.
        </p>
      </div>
    </div>

    <div className="nextBox">
      <div className="insideBox">
        <div className="detail1">
          <h1 className="heading1">VIDEO EDITING</h1>
          <hr className="purpleHorizontal" />

          <p className="smallPara">
            Precise video editing that brings your story to life. Enhance your
            footage, add captivating effects, and deliver a polished final
            product. Elevate your videos with our expert editing services.
          </p>
        </div>

        <div className="detail1">
          <h1 className="heading1">CONTENT WRITING</h1>

          <hr className="purpleHorizontal" />

          <p className="smallPara">
            Compelling content that captivates and engages. From website copy to
            blog posts, we craft words that leave a lasting impression. Ignite
            your brand with our expert content writing.
          </p>
        </div>

        <div className="detail1">
          <h1 className="heading1">SOCIAL MEDIA CREATIVES</h1>

          <hr className="purpleHorizontal" />

          <p className="smallPara">
            Engaging social media content that sparks conversation and drives
            results. Stand out, connect with your audience, and make an impact
            with our strategic social media solutions.
          </p>
        </div>
      </div>
      <h1 className="headingNew">Services</h1>
    </div>

    <div className="clientSection">
      <div className="boxesBottom">
        <h1 className="headingsNewOne">CLIENTS</h1>

        <div className="arrowsRequired">
          <hr className="horizontalLines" />
          <div className="circlesMadeNew">{null}</div>
        </div>
      </div>

      <div className="bottomLogos">
        <MdKeyboardArrowRight className="icons" />
        <div className="middleIcons">
          {logoObjects.map(eachItem => (
            <div className="imageAndText">
              <p className="text">{eachItem.name}</p>
              <img src={eachItem.image_url} className="imageSize" />
            </div>
          ))}
        </div>

        <MdKeyboardArrowLeft className="icons" />
      </div>

      <div className="bottomBoxWork">
        <div className="bottomLeft">
          <div className="textDetails">
            <img
              src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1696298154/violins-1838390_1280_knlbda.jpg"
              className="impImage1"
              alt="impImage1"
            />

            <p className="impPara">
              Video lectures from the crux of all IIDE's student & corporate
              training curriculums. So creating content matching global
              education standards is paramount. TRC promptly adapted to brand
              guidelines &delivered quality animation that brought our experts
              explanation to life
            </p>

            <p className="founderName">Bhumit Gor</p>

            <p className="founderDetails">
              Co-Founder & Guitarist, Last Minute Band
            </p>
          </div>

          <div className="emptyBox">{null}</div>
        </div>
        <div className="bottomRight">
          <h1 className="headingsOne">testimonials</h1>
          <div className="boxesBottoms">
            <div className="arrowBoxes">
              <div className="circlesNewOne">{null}</div>
              <hr className="horizontalLines" />
            </div>
          </div>

          <h1 className="textItalic">What they say about our passion?</h1>

          <div className="arrowBoxes">
            <div className="leftArrow">
              <IoArrowBackOutline />
            </div>
            <div className="rightArrow">
              <IoArrowForwardOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
