
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ARVisualization = () => {
  const { t } = useTranslation();
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We import A-Frame dynamically to avoid SSR issues
    const script = document.createElement('script');
    script.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
    script.async = true;
    document.body.appendChild(script);

    const arScript = document.createElement('script');
    arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
    arScript.async = true;
    document.body.appendChild(arScript);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(arScript)) {
        document.body.removeChild(arScript);
      }
    };
  }, []);

  return (
    <Card className="w-full shadow-md bg-card text-card-foreground">
      <CardHeader className="bg-card border-b border-border/40">
        <CardTitle>{t('common.ar')}</CardTitle>
        <CardDescription>
          Explore careers in 3D with augmented reality
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center p-0">
        {/* A-Frame Scene */}
        <div className="w-full h-[500px] relative bg-muted/30 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center" ref={sceneRef}>
            <a-scene embedded>
              <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
              <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
              <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
              <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
              <a-sky color="#222"></a-sky>
            </a-scene>
          </div>
        </div>
        
        <div className="mt-6 text-center px-4 pb-4">
          <p className="mb-4">
            In the full AR experience, you would point your camera at a marker to see 3D career visualizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-muted/20 p-4 rounded-lg text-center">
              <h3 className="font-medium">Medical Professional</h3>
              <p className="text-sm text-muted-foreground">Explore medical tools and environments</p>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg text-center">
              <h3 className="font-medium">Engineering</h3>
              <p className="text-sm text-muted-foreground">Interact with 3D mechanical objects</p>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg text-center">
              <h3 className="font-medium">Architecture</h3>
              <p className="text-sm text-muted-foreground">Visualize building designs in space</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ARVisualization;
