import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const navigate = useNavigate();
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                A movies app serves as a comprehensive platform for movie enthusiasts, offering a rich and immersive experience that enables users to explore, discover, and enjoy a wide range of films. With features like personalized recommendations, detailed movie information, and convenient streaming options, these apps provide a convenient and enjoyable way to engage with the world of movies.Each movie listed in the app's catalog has a dedicated page that displays detailed information about the film. This includes the title, synopsis, cast and crew details, ratings, reviews, and related recommendations.
                </div>
                <div className="socialIcons">
                    <Link to={"https://twitter.com/RupeshJ28"} className="icon">
                        <FaTwitter  />
                    </Link>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span>© Rupesh Jadhav</span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
