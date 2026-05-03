import React, { useState } from 'react';
import Title from '../components/Title';

import EsignatureApp from '../01-e-signature-app/EsignatureApp';
import RandomizeColor from '../02-randomize-colors/RandomizeColor';
import LikeMyPhotoApp from '../03-like-my-photo/LikeMyPhotoApp';
import TestimonialsApp from '../04-testimonials/TestimonialsApp';
import AlertApp from '../05-alerts-app/AlertApp';
import TemperatureControllerApp from '../06-temperature-controller-app/TemperatureControllerApp';
import LightAndDarkModeApp from '../07-light-and-dark-mode-app/LightAndDarkModeApp';
import SlideToUnlockApp from '../08-slide-to-unlock-app/SlideToUnlockApp';
import SlideToGrowApp from '../09-sliderToGrow/SliderToGrowApp';

// Store components with display names
const apps = [
  { name: 'E-Signature App', component: EsignatureApp },
  { name: 'Randomize Color', component: RandomizeColor },
  { name: 'Like My Photo', component: LikeMyPhotoApp },
  { name: 'Testimonials', component: TestimonialsApp },
  { name: 'Alerts', component: AlertApp },
  { name: 'Temperature Controller', component: TemperatureControllerApp },
  { name: 'Light & Dark Mode', component: LightAndDarkModeApp },
  { name: 'Slide to Unlock', component: SlideToUnlockApp },
  { name: 'Slide to Grow', component: SlideToGrowApp }
];

export default function Homepage() {
  const [SelectedApp, setSelectedApp] = useState(null);

  const loadApp = (appComponent) => {
    setSelectedApp(() => appComponent);
  };

  const goBack = () => {
    setSelectedApp(null);
  };

  return (
    <div className='container'>
      {!SelectedApp ? (
        <>
          <Title classes={'text-center'} text={"Choose an app"} />
          <div className="apps-list">
            {apps.map((app, index) => (
              <div key={index} className='apps-container'>
                <button
                  type="button"
                  onClick={() => loadApp(app.component)}
                  className='btn btn-lg btn-primary m-2'
                >
                  {app.name}
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button className="btn btn-secondary mb-3" onClick={goBack}>
            ← Back to app list
          </button>
          <SelectedApp />
        </div>
      )}
    </div>
  );
}