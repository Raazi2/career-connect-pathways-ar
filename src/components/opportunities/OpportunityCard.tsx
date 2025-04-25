
import { MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';
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

interface OpportunityCardProps {
  opportunity: {
    id: number;
    title: string;
    organization: string;
    location: string;
    type: string;
    industry: string;
    description: string;
    requirements: string;
  };
  index: number;
  getTypeBadgeColor: (type: string) => string;
}

export const OpportunityCard = ({ opportunity, index, getTypeBadgeColor }: OpportunityCardProps) => {
  return (
    <motion.div
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
          <Button className="w-full">View Details</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
