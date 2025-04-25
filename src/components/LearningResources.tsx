
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LearningResources = () => {
  const { t } = useTranslation();
  const [activeResource, setActiveResource] = useState('khan');
  
  return (
    <Card className="w-full h-full shadow-md">
      <CardHeader>
        <CardTitle>{t('common.learn')}</CardTitle>
        <CardDescription>
          Explore educational resources to help you prepare for your future career
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="khan" className="w-full" onValueChange={setActiveResource}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="khan">Khan Academy</TabsTrigger>
            <TabsTrigger value="coursera">Coursera</TabsTrigger>
            <TabsTrigger value="youtube">YouTube EDU</TabsTrigger>
          </TabsList>
          
          <TabsContent value="khan" className="w-full h-full">
            <div className="w-full h-[600px] rounded-md overflow-hidden">
              <iframe 
                src="https://www.khanacademy.org/math/algebra"
                title="Khan Academy"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </TabsContent>
          
          <TabsContent value="coursera">
            <div className="w-full h-[600px] rounded-md overflow-hidden">
              <iframe 
                src="https://www.coursera.org/browse/business"
                title="Coursera"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </TabsContent>
          
          <TabsContent value="youtube">
            <div className="w-full h-[600px] rounded-md overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/videoseries?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
                title="YouTube Educational Videos"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LearningResources;
