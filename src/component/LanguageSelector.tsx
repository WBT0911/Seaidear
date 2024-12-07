import React, {useState, useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import classNames from "classnames";
import { GoChevronDown } from "react-icons/go";
import dropdown from '../data/dropdown.json';
import Dropdown from './common/Dropdown';



interface LanguageSelectorType {
    translate : (key : string) => string;
}

interface CountryFlagResponse {
  flags: {
    svg: string;
  }
}

interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
}


const LanguageSelector: React.FC<LanguageSelectorType> = ({translate}) => {
  const { i18n } = useTranslation();
  const [flags, setFlags] = useState<string[]>([]);
  const data: DropdownItem[] = dropdown as DropdownItem[];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languageType = ['ar','zh', 'de', 'en', 'fr', 'it'];

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const countryCodes: string[] = ['SAU', 'CHN', 'DEU', 'USA', 'FRA', 'ITA']; // Codes for the USA, France, Spain, Germany, Italy
        const requests = countryCodes.map(code =>
          axios.get<CountryFlagResponse[]>(`https://restcountries.com/v3.1/alpha/${code}`)
        );

        const responses = await Promise.all(requests);
        
        const fetchedFlags = responses.map(response => response.data[0].flags.svg);

        setFlags(fetchedFlags);
      } catch (error) {
        console.error('Error fetching flags:', error);
      }
    };

    fetchFlags();
  }, []);

  const handleSelect = (id: string) => {
    console.log(`Selected item with id ${id}`);
  };

  return (
    <div className="language-selector">
      <div>
        {/* <form action="">
            <select name="" id="" style={{display : 'block', width : '150px', height : '100px'}} onChange={(e) => changeLanguage(e.target.value)}>
                {flags.map((flag, index) => (
                    <option key={index} style={{display : 'block', width : '150px', height : '100px'}} value={languageType[index]}>
                        <div><img src={flag} style={{width : '20px', height : '5px'}} alt="flag" /></div>
                    </option>
                ))}
            </select>
        </form> */}
        <div>
          <div className='flex-row'>
            <img src={flags[2]} alt='English' style={{width : '50px', height : 'auto'}} />
          </div>
          <Dropdown
            id='person'
            title='Select Person'
            data={data}
            hasImage
            style='bg-purple-800'
            selectedId='3'
            onSelect={handleSelect}
          />
        </div>
      </div>
      
    </div>


  );
};

export default LanguageSelector;