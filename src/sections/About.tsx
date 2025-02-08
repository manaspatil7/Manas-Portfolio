import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import myImage from '../assests/manu.jpg'

const About = () => {
  const ref = useScrollReveal();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <motion.section 
      ref={ref}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ y, opacity, scale }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={myImage}
            alt="Manas Patil"
            className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
        
        <div className="space-y-6">
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm Manas Patil, a Full Stack Developer with a passion for creating innovative web solutions. 
            With expertise in modern web technologies like React, Node.js, and cloud platforms, I specialize 
            in building scalable applications that deliver exceptional user experiences.
          </motion.p>
          
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            My journey in software development has equipped me with strong problem-solving skills and 
            a deep understanding of both frontend and backend technologies. I believe in writing clean, 
            maintainable code and staying updated with the latest industry trends.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110">
              <FileText size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;