
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    name: "Artificial Intelligence",
    issuer: "Skill India",
    year: "2025"
  },
  {
    name: "Artificial Intelligence Course",
    issuer: "Internforte",
    year: "2025"
  },
  {
    name: "AI / Technology Certification",
    issuer: "IIT iHub, Patna",
    year: "2026"
  },
  {
    name: "TCS CodeVita",
    issuer: "Tata Consultancy Services",
    year: "2026"
  }
];

function Certificates() {
  return (
    <section className="section" id="certificates">

      <div className="section-heading">
        <p className="eyebrow">ACHIEVEMENTS & LEARNING</p>

        <h2>
          My <span className="gradient-text">Certifications</span>
        </h2>

        <p>Courses, certifications and achievements.</p>
      </div>

      <div className="certificates-grid">

        {certificates.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={cert.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
          >

            <Award
              size={32}
              className="skill-icon"
            />

            <div>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <span className="date">{cert.year}</span>
            </div>

            <ExternalLink size={17} />

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Certificates;
