
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, CalendarIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Mock scholarship data
const scholarshipData = [
  {
    id: 1,
    title: "Rural Student Excellence Scholarship",
    organization: "National Education Foundation",
    amount: "$10,000",
    deadline: "2025-09-01",
    description: "Scholarship for outstanding students from rural communities pursuing STEM careers.",
    requirements: "3.5+ GPA, rural residence, STEM major",
    category: "STEM"
  },
  {
    id: 2,
    title: "Healthcare Professionals of Tomorrow",
    organization: "Healthcare Initiative",
    amount: "$8,000",
    deadline: "2025-08-15",
    description: "Supporting rural students who aim to become healthcare professionals and return to serve their communities.",
    requirements: "3.2+ GPA, interest in healthcare, community service",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Agricultural Sciences Scholarship",
    organization: "Farming Future Foundation",
    amount: "$5,000",
    deadline: "2025-07-30",
    description: "For students pursuing degrees in agricultural sciences or related fields.",
    requirements: "3.0+ GPA, agricultural focus, rural background",
    category: "Agriculture"
  },
  {
    id: 4,
    title: "First-Generation College Student Scholarship",
    organization: "Pathway to Education",
    amount: "$7,500",
    deadline: "2025-10-15",
    description: "Supporting first-generation college students from rural areas in any field of study.",
    requirements: "First-generation college student, rural residence",
    category: "General"
  },
  {
    id: 5,
    title: "Digital Futures Scholarship",
    organization: "Tech for All Initiative",
    amount: "$12,000",
    deadline: "2025-09-30",
    description: "For students pursuing careers in computer science, IT, or digital media who want to bring technology expertise to underserved areas.",
    requirements: "3.0+ GPA, technology focus, community project",
    category: "Technology"
  },
  {
    id: 6,
    title: "Rural Teacher Education Scholarship",
    organization: "Education for Tomorrow",
    amount: "$9,000",
    deadline: "2025-11-01",
    description: "For students who plan to become teachers and work in rural school districts.",
    requirements: "3.0+ GPA, education major, commitment to rural teaching",
    category: "Education"
  }
];

const Scholarships = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Filter scholarships based on search and category
  const filteredScholarships = scholarshipData.filter(scholarship => {
    const matchesSearch = 
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter === 'all' || scholarship.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-full bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('scholarships.title')}</h1>
          <p className="text-gray-600">
            Find financial assistance to help you achieve your educational goals
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 bg-white p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('scholarships.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder={t('scholarships.filter')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="STEM">STEM</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="General">General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{scholarship.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {scholarship.organization}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-primary/10">
                        {scholarship.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{scholarship.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                        <span className="font-medium">Amount:</span> {scholarship.amount}
                      </div>
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        <span className="font-medium">Deadline:</span> {formatDate(scholarship.deadline)}
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium">Requirements:</span> {scholarship.requirements}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{t('scholarships.apply')}</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-gray-500">No scholarships match your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
