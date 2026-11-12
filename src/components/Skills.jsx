
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Brain,
  Wrench
} from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "React.js", "Responsive Design"]
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "FastAPI", "MySQL", "MongoDB"]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Scikit-learn", "NLP"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
  }
];

function Skills() {
  return (
    <section className="section" id="skills">

      <div className="section-heading">
        <p className="eyebrow">MY TECHNICAL EXPERTISE</p>

        <h2>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>

        <p>Technologies I use and continue to explore.</p>
      </div>

      <div className="skills-grid">

        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              className="skill-card"
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              <Icon className="skill-icon" size={30} />

              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;
