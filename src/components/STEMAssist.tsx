
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const STEMAssist = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="w-full h-full shadow-md">
      <CardHeader>
        <CardTitle>{t('common.stem')}</CardTitle>
        <CardDescription>
          Interactive STEM visualization and learning tools
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-[600px]">
        <div className="w-full h-full rounded-md overflow-hidden">
          <iframe 
            src="https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html"
            title="STEM Assistant Tool"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default STEMAssist;
