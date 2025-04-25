
import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

export const FeaturedCareers = () => {
  const { t } = useTranslation();

  return (
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
  );
};
