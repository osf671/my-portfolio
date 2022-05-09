import "./App.css";
import self from "./selfPhoto.jpeg";
import SocialFollow from "./SocialFollow.js";

//Hello! Thank you for coming, please reach out for any questions.
function App(){
  return (
    <div className="App">
      <header className="header">
        <h2>Omar Fallon</h2>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#recently">Recently</a>
          </li>
          <li>
            <a href="#podcast">Podcast</a>
          </li>
          <li>
            <a href="#contact">Connect</a>
          </li>
        </ul>
      </header>
      <body class="body">
        <div id="home" style={{ minHeight: "10rem" }}>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h1 className="h1 flip-1">Hi, I'm Omar</h1>
        <div className="flip-2">
          <em>
            I'm a Full-Stack Developer that uses my business backround to
            deliver<br></br> the best projects possible.
          </em>
          <br></br>
          <br></br>{" "}
          <em>
            Half Irish, half Indian means your diversity numbers skyrocket
          </em>
          .<br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
          <h2 className="about" id="about">
            About
          </h2>
          <div className="divabout">
            <img class="img" alt="brown boy smoulder" src={self} />
            <div className="about-body">
              Before I began my software development journey,<br></br>I was
              pursuing a double major<br></br> in International Business and
              Spanish <br></br>at the University of Cincinnati. While doing so,{" "}
              <br></br> I completed an apprenticeship at Tensure.io <br></br>to
              broaden my abilites,<br></br> once I realized my passion for
              programming,<br></br> I never looked back
            </div>
          </div>
        </section>
        <section>
        <h2 className="recently" id="recently">
          Recently
        </h2>
        <div className="recently-body">
          My most recent project was for <br></br> a non-profit organization in
          Haiti.<br></br>{" "}
          <a
            className="link"
            href="https://gospelofgraceacademy.org/"
            target="_blank"
            rel="noreferrer"
          >
            Gospel of Grace{" "}
          </a>{" "}
          builds orphanages and establishes<br></br> communities while
          developing the next generation of leaders.<br></br> I used custom
          coding and hosted in Wordpress <br></br> so that my client could make
          changes when necessary.
        </div>
        </section>
        <section>
        <h2 className="podcast" id="podcast">
          Podcast
        </h2>
        <div className="podcast-body">
          In my free time, I like to do a podcast.<br></br> Some of our guests
          include<br></br>
          <a
            className="link"
            href="https://open.spotify.com/episode/05QvMoIpoE9td0Wjx8aTO4?si=83d19cf03c2d405e"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Robert J. O'Neill
          </a>{" "}
          (Seal Team Six Member), <br></br>
          <a
            className="link"
            href="https://open.spotify.com/episode/17W5kB8yIRr2BeAm1tpw7o?si=507d993cb1454021"
            target="_blank"
            rel="noreferrer"
          >
            Emily Hampshire
          </a>
          (Schitts Creek Actress),<br></br>{" "}
          <a
            className="link"
            href="https://open.spotify.com/episode/2wi5SxYiNTuYVTotxajsxs?si=bbe3db2c6f7e4025"
            target="_blank"
            rel="noreferrer"
          >
            Harvey Guillen
          </a>
          (Emmy Award Winning Actor), and more
        </div>
        </section>
        <h2 className="contact" id="contact">
          Let's Connect
        </h2>
        <div className="contact-body">
          Location: Cincinnati, Oh <br></br>
          <br></br>Email: omarfallon@gmail.com<br></br>
          <br></br> Phone: (561) 479-6788
        </div>
      </body>
      <SocialFollow />
    </div>
  );
}

export default App;
