
import { motion } from "framer-motion";
import { BriefcaseBusiness, Database, Code2 } from "lucide-react";

function Experience() {
  return (
    <section className="section" id="experience">

      <div className="section-heading">
        <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>

        <h2>
          Experience & <span className="gradient-text">Internships</span>
        </h2>

        <p>My practical learning and professional experience.</p>
      </div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="experience-header">

          <div>
            <span className="date">Internship</span>

            <h3>Backend Developer Intern</h3>

            <h4>Abhyaz</h4>
          </div>

          <BriefcaseBusiness
            size={38}
            className="skill-icon"
          />

        </div>

        <p>
          Participated in backend development learning activities,
          working with database schema design, SQL and technical
          documentation.
        </p>

        <div className="experience-highlights">

          <div>
            <Database size={20} />
            <span>Database Design</span>
          </div>

          <div>
            <Code2 size={20} />
            <span>Backend Development</span>
          </div>

        </div>

        <div className="skill-tags">
          <span>SQL</span>
          <span>Database</span>
          <span>Backend</span>
          <span>Documentation</span>
        </div>

      </motion.div>

    </section>
  );
}

export default Experience;
