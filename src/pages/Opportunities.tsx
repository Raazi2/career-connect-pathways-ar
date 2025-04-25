
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { OpportunitiesFilters } from '@/components/opportunities/OpportunitiesFilters';
import { OpportunityCard } from '@/components/opportunities/OpportunityCard';
import { opportunityData } from '@/data/opportunities';

const Opportunities = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  
  const locations = Array.from(new Set(opportunityData.map(item => item.location)));
  const industries = Array.from(new Set(opportunityData.map(item => item.industry)));
  const types = Array.from(new Set(opportunityData.map(item => item.type)));
  
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

        <OpportunitiesFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          locations={locations}
          industries={industries}
          types={types}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                index={index}
                getTypeBadgeColor={getTypeBadgeColor}
              />
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
