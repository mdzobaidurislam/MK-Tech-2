import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_section ptb_100">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className="footer_about widget">
              <h3>About Us</h3>
              <p>
                Everyone involved in the capital market, including the BSEC, has
                a role to play in ensuring that the economy contributes.
              </p>
              <div className="social_icon">
                <Link to="">
                  <FiFacebook />
                </Link>
                <Link to="">
                  <AiFillInstagram />
                </Link>
                <Link to="">
                  <AiOutlineTwitter />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className=" widget">
              <h3>Links</h3>

              <div className="footer_link">
                <Link to="">ADVERTISERS</Link>
                <Link to="">PUBLISHERS</Link>
                <Link to="">INFLUENCERS</Link>
                <Link to="">AD FORMATS</Link>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className=" widget ">
              <h3>Documentation</h3>

              <div className="footer_link ">
                <Link to="">TERMS & CONDITIONS </Link>
                <Link to="">PRIVACY POLICY </Link>
                <Link to="">CANCELLATION POLICY </Link>
                <Link to="">BLOG</Link>
              </div>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className=" widget ">
              <h3>Support</h3>

              <div className="footer_link">
                <Link to="">FAQ</Link>
                <Link to="">MEDIA KIT </Link>
                <Link to="">CONTACT US </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
