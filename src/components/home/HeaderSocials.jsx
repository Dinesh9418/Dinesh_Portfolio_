import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.github.com/Dinesh9418"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://hashnode.com/@gregsithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a>

      <a
        href="https://dev.to/gregsithole"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a>

      <a
        href="https://www.linkedin.com/in/dinesh-jadhav-662a74186/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://wwww.facebook.com/Dinesh.Jadhav/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.twitter.com/DineshJadhav"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
