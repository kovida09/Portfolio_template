/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/p.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Food Delivery App",
    description:
      "From Kitchen to Your Doorstep: Effortless Dining Experience",
    url: "https://github.com/kovida09/Food-Delivery-WebApp-using-MERN?tab=readme-ov-file#food-delivery-webapp-using-mern-1",
  },
  {
    title: "PROJECT-2",
    description:
      "Forecasting friendships, predicting paths ahead. Navigate networks with precision, connect with confidence.",
    url: "https://github.com/kovida09/Prediction-of-social-network-",
  },
  {
    title: "Resume",
    description:
      "My career narrative, perfectly crafted.Showcasing your skills, achievements, and ambition.",
    url: "https://drive.google.com/file/d/1Sjr4HuoCK4wJeU_ZfkGSrvLW9l-jlZs_/view?usp=sharing",
  },
  {
    title: "Are u a Tech geek?",
    description:
      "Exploring the forefront of technology.Unveiling innovation, one byte at a time",
    url: "https://techcrunch.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "50%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "70%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
