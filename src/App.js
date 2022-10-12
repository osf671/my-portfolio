import "./App.css";
import self from "./selfPhoto.jpeg";
import SocialFollow from "./SocialFollow.js";
import Carousel, {CarouselItem} from "./Carousel"
import Leon from './Leon.jpg'
import Beatles from './Beatles.jpg'
import Caamp from './Caamp.jpg'
 
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      <body class="body" id ="home">
        <div id="home" style={{ minHeight: "10rem" }}>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <h1 className="h1 flip-1">Hi, I'm Omar</h1>
        <div className="flip-2">
          <em>
            I'm a Full-Stack Developer that uses my business backround to
            deliver<br></br> the best projects possible. I love React and connecting with people.
            Half Irish, half Indian means your diversity numbers skyrocket.
          </em>
          <br></br>
          <br></br>
          <br></br>{" "}
          <em>
          Before you continue, here's my top 3 albums right now as some background noise while learning about me 
          </em>
          <br></br>
          <div>
          <Carousel>
            <CarouselItem>
              <a href="https://open.spotify.com/album/6RgGsXtsTnwA53ts3jDeDW?si=ZAfacCdrSaid8MRByjBspw">
              <img src={Caamp} alt="caamp"/>
              </a>
              </CarouselItem>
            <CarouselItem>
              <a href="https://open.spotify.com/album/21KIagsx1ZvYcv0sVkEAWv?si=qIKVNTygQy-uNw7pr7tPzg">
            <img src={Leon} alt="leon"/>
            </a>
              </CarouselItem>
            <CarouselItem>
            <a href="https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW?si=Ry9Sb-rnQv-rYT0P3CeCkQ">
            <img src={Beatles} alt="beatles"/>
            </a>
            </CarouselItem>
          </Carousel>
          <p>*Woah a carousel that pauses when you hover over it made from scratch? We have to hire this guy asap!</p>
          </div>
        <br></br>
        <br></br>
        </div>
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
              programming,<br></br> I never looked back.
            </div>
          </div>
        </section>
        <section>
        <h2 className="recently" id="recently">
          Recently
        </h2>
        <div className="recently-body">
          Recently, I built a Wordpress site for <br></br> a non-profit organization in
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
          developing the next generation of leaders.<br></br> Although Wordpress isn't something I utilize often or focus on,<br></br> the organization is close to my heart
          and I wanted to display it here
        </div>
        </section>
        <section>
        <h2 className="podcast" id="podcast">
          Podcast
        </h2>
        <div className="podcast-body">
          In my free time, I like to do a podcast called Lesson Learned.<br></br>
          It's a mental health podcast where we talk about  <br></br>
          lessons we've learned while navigating life. Some of my guests
          include<br></br>
          <a
            className="link"
            href="https://open.spotify.com/episode/4HGEq1ntz5S6HFKiDVsXj3?si=5cd7516ffaf145cb"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Quinn XCII
          </a>{" "}
          (Musician), <br></br>
          <a
            className="link"
            href="https://open.spotify.com/episode/2eB707ZikKxipFdVNRBFaf?si=320078fa39d14ec7"
            target="_blank"
            rel="noreferrer"
          >
            Kota the Friend
          </a>
          (Independent Rapper),<br></br>{" "}
          <a
            className="link"
            href="https://open.spotify.com/episode/0uYGP8T6gqHB2GgExC6BkY?si=83ee5d9dbb464d40"
            target="_blank"
            rel="noreferrer"
          >
            Emily Hampshire
          </a>
          (Schitts Creek Actress),
          <br></br>
           and more coming soon
        </div>
        </section>
        <section>
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

