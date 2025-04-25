
import { Search, MapPin, Building, CalendarClock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface OpportunitiesFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  locationFilter: string;
  setLocationFilter: (value: string) => void;
  industryFilter: string;
  setIndustryFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  locations: string[];
  industries: string[];
  types: string[];
}

export const OpportunitiesFilters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  industryFilter,
  setIndustryFilter,
  typeFilter,
  setTypeFilter,
  locations,
  industries,
  types,
}: OpportunitiesFiltersProps) => {
  const { t } = useTranslation();

  return (
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
  );
};
