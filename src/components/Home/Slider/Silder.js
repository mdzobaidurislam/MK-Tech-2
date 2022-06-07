import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slider.css";
import banner1 from "./../../images/banner1.png";
import banner2 from "./../../images/banner2.png";
import banner3 from "./../../images/banner3.png";
const Slider = () => {
  return (
    <div className="slider_section">
      <Carousel>
        <Carousel.Item>
          <div className="ptb_80 banner1">
            <Container>
              <Row>
                <Col lg={6}>
                  <div class="slider_content">
                    <h1>Bangladesh Travel: Know Before you Go.</h1>
                    <p>
                      A large number of people view this post regularly in
                      search of Bangladesh travel advice and information about
                      travel in Bangladesh. We try to keep it as up to date as
                      possible (we last updated it in January 2020) – to help.
                    </p>
                    <Link to="" class="custom_btn">
                      Read more >>
                    </Link>
                  </div>
                </Col>
                <Col lg={5}>
                  <Image src={banner2} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner1 ptb_80">
            <Container>
              <Row>
                <Col lg={5}>
                  <Image src={banner1} alt="" className="img-fluid" />
                </Col>
                <Col lg={6}>
                  <div class="slider_content">
                    <h1>
                      Capitalism will be the source of <span>development</span>{" "}
                      funding for the Mujib Year pledge
                    </h1>
                    <p>
                      Prime Minister Sheikh Hasina has called upon all concerned
                      in the capital market, including BSEC, to ensure the
                      safety of investors by implementing six-point
                      recommendations for the development of the capital market.
                    </p>
                    <Link to="" class="custom_btn">
                      Read more >>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner1 ptb_80">
            <Container>
              <Row>
                <Col lg={5}>
                  <Image src={banner3} alt="" className="img-fluid" />
                </Col>
                <Col lg={6}>
                  <div class="slider_content">
                    <h1>
                      Islamic Relief started working in Bangladesh in 1991
                      <span> immediately</span> after a devastating cyclone.
                    </h1>
                    <p>
                      When you love this country, and feel every bit of it from
                      the core of your heart and when you do good for the people
                      and the country itself (without even you are being asked
                      for) – you become Bangladesh.
                    </p>
                    <Link to="" class="custom_btn">
                      Read more >>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
