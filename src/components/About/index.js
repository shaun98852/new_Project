import './index.css'

const About = () => (
  <div className="aboutBackground">
    <div className="topSection">
      <h1 className="logoHeading">Pat.Co</h1>
      <div className="rightBoxs">
        <p className="texts">HOME</p>
        <p className="texts">ABOUT US</p>
        <p className="texts">OUR WORK</p>
        <p className="texts">SERVICES</p>
        <p className="texts">CONTACT US</p>
      </div>
    </div>

    <div className="middleText">
      <h1 className="headings">PATCO PRODUCTIONS</h1>
      <p className="paraText">(Landling video)</p>
    </div>

    <div className="nextBoxes">
      {/* #Left side Box */}
      <div className="leftBox">
        <h1 className="leftHeading">ABOUT US</h1>
        <div className="leftLineSectionsss">
          <hr className="lineColorsss" />
          <div className="circless">{null}</div>
        </div>

        <h1 className="headingTexts">
          "DELIVERING STUNNING VISUAL NARRATIVES"
        </h1>

        <p className="paraDetails">
          From concept to final edit, we tailor our production process to suit
          your unique needs, ensuring the highest quality results.
        </p>
      </div>

      {/* Right sideBox */}
      <div className="rightSideBoxess">
        <p className="para">
          <span className="spanText">PATCO PRODUCTIONS</span> has earned its
          reputation in the market for its services. We aim to grow as the most
          prominent firm for our Customers, Business Associates & Stakeholders
          and we take pride that the intense vision of our experienced personnel
          encourages us to create a niche in the industry by serving clients
          across the globe.
        </p>

        <h1 className="storyHeadingStory">OUR STORY</h1>
        <div className="lineSectionss">
          <div className="circlesss">{null}</div>
          <hr className="colorLinesOne" />
        </div>
      </div>
    </div>

    <h1 className="headingNews">about</h1>
  </div>
)

export default About
