
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    year: "2024 – 2028",
    title: "B.Tech – Computer Science & Engineering",
    subtitle: "Artificial Intelligence & Machine Learning",
    institution: "Uttaranchal University, Dehradun",
    result: "Currently Pursuing",
    icon: GraduationCap
  },
  {
    year: "2022 – 2024",
    title: "Intermediate",
    subtitle: "Higher Secondary Education",
    institution: "BSSB Junior College",
    result: "81.6%",
    icon: BookOpen
  },
  {
    year: "2021 – 2022",
    title: "Secondary School (SSC)",
    subtitle: "School Education",
    institution: "Geetham High School",
    result: "79%",
    icon: BookOpen
  }
];

function Education() {
  return (
    <section className="section" id="education">

      <div className="section-heading">
        <p className="eyebrow">MY ACADEMIC JOURNEY</p>

        <h2>
          My <span className="gradient-text">Education</span>
        </h2>

        <p>My educational background and qualifications.</p>
      </div>

      <div className="timeline">

        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              className="timeline-item"
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >

              <span className="timeline-dot"></span>

              <div className="timeline-card">

                <div className="education-header">
                  <span className="date">{item.year}</span>
                  <Icon size={25} className="skill-icon" />
                </div>

                <h3>{item.title}</h3>

                <h4>{item.subtitle}</h4>

                <p>{item.institution}</p>

                <span className="education-status">
                  {item.result}
                </span>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Education;
