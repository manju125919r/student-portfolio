
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send
} from "lucide-react";

function Contact() {
  return (
    <section className="section" id="contact">

      <div className="section-heading">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p>
          Have an opportunity or project idea? Let's talk.
        </p>
      </div>

      <div className="contact-grid">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h3>Let's build something great together.</h3>

          <p>
            I'm currently interested in software development
            internships, full-stack development opportunities
            and AI-powered projects.
          </p>

          <a
            href="mailto:manjunadhsannidhi@gmail.com"
            className="contact-item"
          >
            <Mail />
            <span>manjunadhsannidhi@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <Linkedin />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <Github />
            <span>GitHub Profile</span>
          </a>

          <div className="contact-item">
            <MapPin />
            <span>India</span>
          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          action="https://formsubmit.co/yourmail@gmail.com"
          method="POST"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message..."
            rows="5"
            required
          />

          <button type="submit" className="primary-btn">
            Send Message
            <Send size={17} />
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;
