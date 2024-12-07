import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './component/LanguageSelector';
import './assets/styles/app.scss';
import Toppart from './component/Toppart';
import Navigation from './component/Navigation';

const App: React.FC = () => {
  const { t } = useTranslation();

  

  return (
    <div className="App">
      <div className="app-overlay"></div>
      <div className="navbar">
        <div className="container">
          <div className="row">
            <div className="header">
              <h1>{t('logo')}</h1>
            </div>
            <div className="body">
              <LanguageSelector translate={t} />
              <div className='shop'>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toppart translate={t} />
      <Navigation translate={t} />
    
      
    </div>
  );
}

export default App;
