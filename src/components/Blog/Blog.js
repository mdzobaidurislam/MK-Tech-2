import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";
import Slider from "react-slick";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "./../images/blog/blog1.jpg";
export default function Blog() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      title: " Praesent ut lobortis purus hasellus libero orci, accumsan.",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id`,
      img: blog1,
    },
    {
      title: " Praesent ut lobortis purus hasellus libero orci, accumsan.",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id`,
      img: blog1,
    },
    {
      title: " Praesent ut lobortis purus hasellus libero orci, accumsan.",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id`,
      img: blog1,
    },
    {
      title: " Praesent ut lobortis purus hasellus libero orci, accumsan.",
      des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id`,
      img: blog1,
    },
  ];
  return (
    <div className="blog_section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading_titile text-center">
              <h2>
                Lates Blog <span>Posts</span>{" "}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="blog_slider pb-5 pt-5">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div>
                  <div className="blog_item">
                    <div className="blog_thum">
                      <Image src={item.img} className="img-fluid" />
                    </div>
                    <div className="blog_content">
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                    <div className="text-center mb-4 ">
                      <Link to="" className="text-decoration-none read_more">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </div>
  );
}
