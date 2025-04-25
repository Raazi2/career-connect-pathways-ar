
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VRExperience = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // We import A-Frame dynamically to avoid SSR issues
    const script = document.createElement('script');
    script.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>{t('common.vr')}</CardTitle>
        <CardDescription>
          Immerse yourself in virtual career environments
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* A-Frame VR Scene */}
        <div className="w-full h-[500px] relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <a-scene embedded vr-mode-ui="enabled: true">
              <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
              <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
              <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
              <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
              
              {/* Add a 360 environment */}
              <a-sky color="#ECECEC"></a-sky>
              
              {/* Add text labels */}
              <a-text value="Engineering Lab" position="-1 1.5 -3" color="#000" scale="0.5 0.5 0.5"></a-text>
              <a-text value="Healthcare" position="0 2.5 -5" color="#000" scale="0.5 0.5 0.5"></a-text>
              <a-text value="Construction" position="1 2 -3" color="#000" scale="0.5 0.5 0.5"></a-text>
            </a-scene>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="mb-4">
            Put on a VR headset to fully immerse yourself in different career environments.
            Explore workplaces and interact with tools used in various professions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">How to use</h3>
              <ol className="text-sm text-left list-decimal pl-4 mt-2">
                <li>Click the VR button in the bottom right of the scene</li>
                <li>Put on your VR headset</li>
                <li>Use controllers to navigate the environment</li>
                <li>Explore different career settings</li>
              </ol>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">Available Experiences</h3>
              <ul className="text-sm text-left list-disc pl-4 mt-2">
                <li>Hospital Operating Room</li>
                <li>Construction Site</li>
                <li>Engineering Laboratory</li>
                <li>Classroom Environment</li>
                <li>Tech Startup Office</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VRExperience;
