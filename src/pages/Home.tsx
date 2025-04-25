
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Briefcase, GraduationCap, Lightbulb, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

// Mock data for featured careers
const featuredCareers = [
  {
    id: 1,
    title: "Software Developer",
    description: "Design, build, and maintain software applications.",
    icon: <Lightbulb size={32} />,
    color: "bg-blue-50 text-blue-500",
  },
  {
    id: 2,
    title: "Healthcare Professional",
    description: "Provide medical care and support to patients.",
    icon: <GraduationCap size={32} />,
    color: "bg-green-50 text-green-500",
  },
  {
    id: 3,
    title: "Agricultural Scientist",
    description: "Research and improve agricultural techniques.",
    icon: <Map size={32} />,
    color: "bg-amber-50 text-amber-500",
  },
];

// Mock data for educational resources
const resources = [
  {
    id: 1,
    title: "Scholarship Guide",
    description: "Find financial aid opportunities for your education.",
    link: "/scholarships",
    icon: <Book size={32} />,
    color: "bg-purple-50 text-purple-500",
  },
  {
    id: 2,
    title: "Career Opportunities",
    description: "Discover job and internship opportunities in your area.",
    link: "/opportunities",
    icon: <Briefcase size={32} />,
    color: "bg-pink-50 text-pink-500",
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-primary text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground/70 z-0"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t('home.hero')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t('home.subtitle')}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/explore">
                  {t('home.getStarted')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* Featured Careers Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.featured')}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCareers.map((career, index) => (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className={`${career.color} rounded-t-lg`}>
                    <div className="mb-2">{career.icon}</div>
                    <CardTitle>{career.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardDescription className="text-base">{career.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/explore">
                Explore All Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.resources')}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={resource.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className={`${resource.color} rounded-t-lg`}>
                      <div className="mb-2">{resource.icon}</div>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-base">{resource.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="default" className="w-full">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AR/VR Features */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Immersive Career Exploration</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-purple-100 p-2 rounded-full mr-3 text-purple-500">AR</span>
                Augmented Reality Experiences
              </h3>
              <p className="mb-6">
                Point your camera at our special markers to see 3D models of different career environments and tools. Experience what it's like to work in different fields!
              </p>
              <Button asChild>
                <Link to="/ar">
                  Try AR Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-green-100 p-2 rounded-full mr-3 text-green-500">VR</span>
                Virtual Reality Tours
              </h3>
              <p className="mb-6">
                Put on your VR headset and step into different workplaces. Walk around, interact with objects, and get a feel for what different careers are really like.
              </p>
              <Button asChild>
                <Link to="/vr">
                  Try VR Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-12 md:py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Take CareerConnect With You</h2>
            <p className="text-lg mb-6 opacity-90">
              Download our mobile app to access career resources anytime, anywhere — even offline.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Download Mobile App
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
