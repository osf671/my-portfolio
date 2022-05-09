import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faLinkedin)

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3> Follow Me</h3>
      <a href="https://www.facebook.com/omar.fallon"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/omarfallon671" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/omarfallon/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/omar-fallon/"
        className="instagram social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
    </div>
  );
}
