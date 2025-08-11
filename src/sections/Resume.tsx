import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FileText, Download, Award, Briefcase, Code, Database, PenTool as Tool } from 'lucide-react';

const Resume = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const experience = [
    {
      title: "Web Developer & Content Tester",
      company: "Engineers Way Out (EWO)",
      period: "Aug 2023",
      description: "Developed and tested web content, ensuring high-quality technical documentation and user experience.",
      icon: <Briefcase className="text-red-600" size={24} />
    },
    {
      title: "Hackathon & Workshop Organizer",
      company: "CODETANTRA, TSEC",
      period: "April 2023 - Present",
      description: "Organized and facilitated technical workshops and hackathons, fostering innovation and learning.",
      icon: <Award className="text-red-600" size={24} />
    },
    {
      title: "Hackathon Finalist",
      company: "Hackshetra'24, NIT Kurukshetra",
      period: "March 2024",
      description: "Achieved finalist position in a prestigious national-level hackathon, demonstrating problem-solving skills.",
      icon: <Award className="text-red-600" size={24} />
    },
    {
      title: "General Member",
      company: "IIC TSEC",
      period: "Oct 2023",
      description: "Active member of the Institution's Innovation Council, contributing to innovation initiatives.",
      icon: <Briefcase className="text-red-600" size={24} />
    }
    
  ];

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "Java", "C", "C++", "MySQL"]
    },
    {
      category: "Web Technologies",
      icon: <FileText size={24} />,
      skills: ["React.js", "Node.js", "Express.js", "Google Maps API", "Firebase"]
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Developer Tools",
      icon: <Tool size={24} />,
      skills: ["GitHub", "Power BI", "Excel", "Bash"]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: string; index: number }) => {
    const barRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: barRef,
      offset: ["start end", "center center"]
    });

    const width = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
      <motion.div
        ref={barRef}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">{skill}</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-red-600 rounded-full"
            style={{ scaleX: width, transformOrigin: "left" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section 
      ref={containerRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ y, opacity, scale }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <motion.h2 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resume
        </motion.h2>
        <motion.a 
          href="https://drive.google.com/file/d/1jNlRPYh2yVkkvCRAF7kWxHUHdyxHT5UT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-lg group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Download size={20} className="group-hover:animate-bounce" />
          Download CV
        </motion.a>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-red-600" />
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div 
                key={index} 
                className="relative border-l-2 border-red-600 pl-6 hover:border-l-4 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <div className="absolute -left-3 top-0 bg-black p-1 rounded-full">
                  {job.icon}
                </div>
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p className="text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-400">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-red-600" />
            Skills
          </h3>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-red-600">{category.icon}</span>
                <h4 className="text-lg font-semibold">{category.category}</h4>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;





// import React from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { FileText, Download, Award, Briefcase, Code, Database, PenTool as Tool } from 'lucide-react';

// const Resume = () => {
//   const containerRef = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });
  
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

//   const experience = [
//     {
//       title: "Web Developer & Content Tester",
//       company: "Engineers Way Out (EWO)",
//       period: "Aug 2023",
//       description: "Developed and tested web content, ensuring high-quality technical documentation and user experience.",
//       icon: <Briefcase className="text-red-600" size={24} />
//     },
//     {
//       title: "Hackathon & Workshop Organizer",
//       company: "CODETANTRA, TSEC",
//       period: "April 2023 - Present",
//       description: "Organized and facilitated technical workshops and hackathons, fostering innovation and learning.",
//       icon: <Award className="text-red-600" size={24} />
//     },
//     {
//       title: "Hackathon Finalist",
//       company: "Hackshetra'24, NIT Kurukshetra",
//       period: "March 2024",
//       description: "Achieved finalist position in a prestigious national-level hackathon, demonstrating problem-solving skills.",
//       icon: <Award className="text-red-600" size={24} />
//     },
//     {
//       title: "General Member",
//       company: "IIC TSEC",
//       period: "Oct 2023",
//       description: "Active member of the Institution's Innovation Council, contributing to innovation initiatives.",
//       icon: <Briefcase className="text-red-600" size={24} />
//     }
//   ];

//   const skillCategories = [
//     {
//       category: "Languages",
//       icon: <Code size={24} />, 
//       skills: ["Python", "Java", "C", "C++", "MySQL"],
//       value: "Expert",
//       percentage: 90
//     },
//     {
//       category: "Web Technologies",
//       icon: <FileText size={24} />,
//       skills: ["React.js", "Node.js", "Express.js", "Google Maps API", "Firebase"],
//       value: "Advanced",
//       percentage: 85
//     },
//     {
//       category: "Databases",
//       icon: <Database size={24} />,
//       skills: ["MySQL", "MongoDB"],
//       value: "Proficient",
//       percentage: 80
//     },
//     {
//       category: "Developer Tools",
//       icon: <Tool size={24} />,
//       skills: ["GitHub", "Power BI", "Excel", "Bash"],
//       value: "Proficient",
//       percentage: 75
//     }
//   ];

//   return (
//     <motion.section 
//       ref={containerRef}
//       className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//       style={{ y, opacity, scale }}
//     >
//       <div className="grid md:grid-cols-2 gap-12">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//             <Briefcase className="text-red-600" />
//             Experience
//           </h3>
//           <div className="space-y-8">
//             {experience.map((job, index) => (
//               <motion.div 
//                 key={index} 
//                 className="relative border-l-4 border-red-600 pl-6 transition-all duration-300 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="absolute -left-4 top-2 bg-black p-2 rounded-full">
//                   {job.icon}
//                 </div>
//                 <h4 className="text-lg font-semibold">{job.title}</h4>
//                 <p className="text-gray-400">{job.company}</p>
//                 <p className="text-sm text-gray-500 mb-2">{job.period}</p>
//                 <p className="text-gray-400">{job.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//             <Code className="text-red-600" />
//             Skills
//           </h3>
//           <div className="grid grid-cols-2 gap-6">
//             {skillCategories.map((category, index) => (
//               <motion.div 
//                 key={index} 
//                 className="p-6 bg-gray-900 rounded-xl text-center shadow-lg hover:shadow-2xl"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <div className="text-red-600 mb-2">{category.icon}</div>
//                 <h4 className="text-lg font-semibold mb-2">{category.category}</h4>
//                 <p className="text-gray-300 text-sm font-bold">{category.value}</p>
//                 <p className="text-gray-400 text-xs font-semibold">{category.skills.join(", ")}</p>
//                 <motion.div className="h-3 bg-gray-700 rounded-full mt-3 overflow-hidden">
//                   <motion.div className="h-full bg-red-600 rounded-full" initial={{ width: 0 }} animate={{ width: `${category.percentage}%` }} transition={{ duration: 1.5, ease: "easeOut" }} />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Resume;
