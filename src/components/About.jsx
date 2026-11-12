
import { motion } from "framer-motion";
import { Code2, Brain, Rocket, GraduationCap } from "lucide-react";

function About() {
  const cards = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building modern and responsive web applications."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Exploring machine learning and intelligent solutions."
    },
    {
      icon: Rocket,
      title: "Problem Solving",
      description: "Turning ideas into practical digital products."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Improving my technical and professional skills."
    }
  ];

  return (
    <section className="section" id="about">

      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span className="gradient-text">Me</span></h2>
        <p>A little introduction about my journey.</p>
      </div>

      <div className="about-grid">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>
            Turning Ideas Into
            <span className="gradient-text"> Digital Experiences</span>
          </h3>

          <p>
            I'm a Computer Science and Engineering student
            specializing in Artificial Intelligence and Machine
            Learning at Uttaranchal University, Dehradun.
          </p>

          <p>
            I have a strong interest in full-stack development,
            Python programming, machine learning and building
            AI-powered applications.
          </p>

          <p>
            I enjoy developing real-world projects, learning
            emerging technologies and improving my problem-solving
            abilities.
          </p>

          <p>
            My career goal is to become a successful software
            developer and contribute to innovative technology products.
          </p>

        </motion.div>

        <div className="about-cards">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                className="info-card"
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <Icon size={30} />

                <h3>{card.title}</h3>

                <p>{card.description}</p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default About;
