import  { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Code2, 
  Database,  
  Cloud,
  Server
} from 'lucide-react';

const HomePage = () => {
  const controls = useAnimationControls();
  const textControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        background: [
          'linear-gradient(45deg, #020617 0%, #0f172a 100%)',
          'linear-gradient(45deg, #0f172a 0%, #020617 100%)'
        ],
        transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
      });
    };
    
    const textSequence = async () => {
      await textControls.start({
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: { duration: 5, repeat: Infinity }
      });
    };
    
    sequence();
    textSequence();
  }, [controls, textControls]);

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/iewednat", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dewei-tan/", label: "LinkedIn" }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Vue.js"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Java", "Python", "C"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Databases & Data Science",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "SQL", "NumPy", "Pandas"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "Kubernetes", "Git", "AWS", "Firebase"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <motion.div 
      animate={controls}
      className="min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-indigo-400 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto pt-20 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Hi, I'm Tan De Wei
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                delay: 0.4,
                backgroundPosition: { duration: 5, repeat: Infinity }
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              style={{
                background: 'linear-gradient(90deg, #93c5fd, #818cf8)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Computing Science Student at SIT-UOG
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-slate-300 max-w-2xl"
          >
            Aspiring Software Engineer/Data Analyst
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 ease-in-out"
            >
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.span>
            </motion.button>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#93c5fd",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-slate-300 hover:text-blue-400 transition-colors relative group"
                  aria-label={link.label}
                >
                  {link.icon}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-slate-800 text-slate-200 px-2 py-1 rounded"
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-semibold mb-8 text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-lg bg-slate-800/50 p-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 + skillIndex * 0.1 }}
                        className="relative"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate-300">{skill}</span>
                        </div>
                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${75 + Math.random() * 25}%` }}
                            transition={{ delay: 2 + index * 0.1 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color.replace('/20', '')}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact/Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-300 mb-4">Looking to collaborate or learn more about my experience?</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 ease-in-out"
            >
              Get in Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;