
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, MapPin, Building, CalendarClock } from 'lucide-react';
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

// Mock opportunity data
const opportunityData = [
  {
    id: 1,
    title: "Healthcare Intern",
    organization: "Rural Health Clinic",
    location: "Springfield",
    type: "Internship",
    industry: "Healthcare",
    description: "Gain hands-on experience in a rural healthcare setting. Shadow healthcare professionals and learn about patient care in underserved communities.",
    requirements: "High school diploma, interest in healthcare, reliable transportation"
  },
  {
    id: 2,
    title: "Agricultural Research Assistant",
    organization: "County Extension Office",
    location: "Riverdale",
    type: "Part-time",
    industry: "Agriculture",
    description: "Assist agricultural scientists with field research. Collect and analyze soil and crop samples, maintain research plots, and participate in community education.",
    requirements: "Basic knowledge of agriculture, detail-oriented, willing to work outdoors"
  },
  {
    id: 3,
    title: "IT Support Specialist",
    organization: "Rural School District",
    location: "Millfield",
    type: "Full-time",
    industry: "Technology",
    description: "Provide technical support for schools in the district. Maintain computer labs, troubleshoot hardware and software issues, and assist with technology integration.",
    requirements: "Associate's degree in IT or equivalent experience, problem-solving skills"
  },
  {
    id: 4,
    title: "Teaching Assistant",
    organization: "Community College",
    location: "Oakridge",
    type: "Part-time",
    industry: "Education",
    description: "Support instructors with classroom activities, grade assignments, and provide tutoring to students.",
    requirements: "Associate's degree, strong communication skills, subject matter knowledge"
  },
  {
    id: 5,
    title: "Renewable Energy Technician",
    organization: "Green Power Co-op",
    location: "Sunnydale",
    type: "Apprenticeship",
    industry: "Energy",
    description: "Learn to install and maintain solar panels and wind turbines while earning a salary. Gain certification in renewable energy technologies.",
    requirements: "High school diploma, mechanical aptitude, willing to work at heights"
  },
  {
    id: 6,
    title: "Small Business Development Intern",
    organization: "Community Development Corporation",
    location: "Springfield",
    type: "Internship",
    industry: "Business",
    description: "Support local entrepreneurs with business planning, marketing, and accessing resources. Help organize workshops and networking events.",
    requirements: "Interest in business, community-oriented, good communication skills"
  }
];

const Opportunities = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  
  // Get unique locations, industries, and types for filters
  const locations = Array.from(new Set(opportunityData.map(item => item.location)));
  const industries = Array.from(new Set(opportunityData.map(item => item.industry)));
  const types = Array.from(new Set(opportunityData.map(item => item.type)));
  
  // Filter opportunities based on search and filters
  const filteredOpportunities = opportunityData.filter(opportunity => {
    const matchesSearch = 
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesLocation = locationFilter === 'all' || opportunity.location === locationFilter;
    const matchesIndustry = industryFilter === 'all' || opportunity.industry === industryFilter;
    const matchesType = typeFilter === 'all' || opportunity.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesIndustry && matchesType;
  });

  // Badge color mapping for opportunity types
  const getTypeBadgeColor = (type: string) => {
    switch(type.toLowerCase()) {
      case 'internship': return 'bg-blue-100 text-blue-800';
      case 'part-time': return 'bg-green-100 text-green-800';
      case 'full-time': return 'bg-purple-100 text-purple-800';
      case 'apprenticeship': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('opportunities.title')}</h1>
          <p className="text-gray-600">
            Discover job opportunities, internships, and apprenticeships in your area
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-8 bg-white p-4 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search opportunities"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location Filter */}
              <div className="w-full">
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <SelectValue placeholder={t('opportunities.location')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Industry Filter */}
              <div className="w-full">
                <Select value={industryFilter} onValueChange={setIndustryFilter}>
                  <SelectTrigger>
                    <Building className="h-4 w-4 mr-2 text-gray-500" />
                    <SelectValue placeholder={t('opportunities.industry')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Type Filter */}
              <div className="w-full">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <CalendarClock className="h-4 w-4 mr-2 text-gray-500" />
                    <SelectValue placeholder={t('opportunities.type')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Opportunities List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{opportunity.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {opportunity.organization}
                        </CardDescription>
                      </div>
                      <Badge className={getTypeBadgeColor(opportunity.type)}>
                        {opportunity.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{opportunity.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {opportunity.location}
                      </div>
                      <div className="text-sm bg-gray-100 px-3 py-1 rounded-full flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {opportunity.industry}
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium">Requirements:</span> {opportunity.requirements}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{t('opportunities.view')}</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-gray-500">No opportunities match your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
