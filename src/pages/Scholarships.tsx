
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScholarshipFilters } from '@/components/scholarships/ScholarshipFilters';
import { scholarshipData } from '@/data/scholarships';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from 'lucide-react';

const Scholarships = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const filteredScholarships = scholarshipData.filter(scholarship => {
    const matchesSearch = 
      scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter === 'all' || scholarship.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

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

        <ScholarshipFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

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
