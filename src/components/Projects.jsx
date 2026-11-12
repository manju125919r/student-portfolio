
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  FolderGit2,
  ShoppingBasket,
  ShieldCheck
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "SnapGuard-X",
    category: "AI / Machine Learning",

    description:
      "SnapGuard-X is an intelligent message security application designed to identify fraudulent and suspicious messages. It analyzes message content using Natural Language Processing (NLP) and a machine learning classification model to categorize messages into SAFE, SCAM, and SUSPICIOUS. The system helps users recognize potential online scams and make safer digital communication decisions.",

    features: [
      "Real-time message analysis",
      "Scam and suspicious message detection",
      "NLP-based text preprocessing",
      "Three-class ML classification",
      "REST API integration"
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "FastAPI",
      "React",
      "ONNX"
    ],

    github: "https://github.com/",
    demo: ""
  },

  {
    number: "02",
    title: "ShopSphere AI",
    category: "Full Stack / AI E-Commerce",

    description:
      "ShopSphere AI is a modern AI-powered e-commerce platform designed to improve the online shopping experience. It combines a responsive React frontend with backend services and database management. The project aims to integrate intelligent shopping features, product discovery and personalized recommendations into an online shopping platform.",

    features: [
      "Product browsing and discovery",
      "Product search and filtering",
      "Shopping cart management",
      "Database-driven product management",
      "AI-powered shopping features (planned)"
    ],

    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Prisma",
      "JavaScript",
      "CSS"
    ],

    github: "https://github.com/",
    demo: ""
  },

  {
    number: "03",
    title: "Zepto AI Data Analytics",
    category: "Data Analytics / AI & ML",

    description:
      "Zepto AI Data Analytics is a data-driven project focused on analyzing quick-commerce grocery product data. It explores product pricing, discounts, category-wise distribution, availability and sales-related patterns. Using Python, data analysis and machine learning techniques, the project aims to transform raw grocery data into meaningful business insights and support better inventory planning, demand forecasting and business decision-making.",

    features: [
      "Grocery product data analysis",
      "Data cleaning and preprocessing",
      "Product category analysis",
      "Price and discount analysis",
      "Inventory and availability insights",
      "Data visualization dashboards",
      "Demand forecasting using ML (planned)"
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn"
    ],

    github: "https://github.com/",
    demo: ""
  }
];

function Projects() {
  return (
    <section className="section" id="projects">

      <div className="section-heading">
        <p className="eyebrow">WHAT I'VE BUILT</p>

        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p>
          Practical applications combining full-stack development,
          artificial intelligence and data analytics.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >

            <div className="project-top">
              <FolderGit2
                size={30}
                className="skill-icon"
              />

              <span className="project-number">
                {project.number}
              </span>
            </div>

            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4 className="project-feature-title">
              Key Features
            </h4>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <ShieldCheck size={15} />
                  {feature}
                </li>
              ))}
            </ul>

            <h4 className="project-feature-title">
              Technologies Used
            </h4>

            <div className="skill-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}

            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}

export default Projects;
