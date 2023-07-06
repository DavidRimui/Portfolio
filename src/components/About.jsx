import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Welcome to my portfolio! I'm David Rimui, a software engineer passionate about programming. Throughout my career, I have gained hands-on experience in web development & software development and have successfully delivered notable projects.
        
        My problem-solving skills and attention to detail allow me to tackle complex challenges and deliver high-quality results. I have a deep love for anything computer-related, constantly staying updated with the latest trends and advancements.
         
        This passion drives me to continuously learn and improve my skills, ensuring that I provide cutting-edge solutions to my clients or employers. Collaboration and effective communication are key elements of my work ethic.
        
         I believe that by fostering a positive and inclusive environment, we can achieve outstanding results as a team. I enjoy working with cross-functional teams, leveraging each member's unique strengths to drive success.

        In addition to my technical expertise, I value creativity and design aesthetics. I have a keen eye for user-centered design and strive to create intuitive and visually appealing experiences.
        
         By combining my technical skills with a strong sense of design, I aim to deliver seamless and engaging solutions that leave a lasting impact. I'm excited about the opportunity to collaborate on new projects and challenges. 
         
         If you're looking for a dedicated and skilled full stack software engineer who is passionate about making a difference, let's connect! I'm eager to discuss how I can contribute to your team or organization.

        Thank you for visiting my portfolio, and I look forward to hearing from you soon! 
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
