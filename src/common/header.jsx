import React from 'react'
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Switcher() {

  const locales = {
    en: { title: 'English' },
    es: { title: 'Español' },
  };
  
  const { t, i18n } = useTranslation();
  return (
      <ToggleButtonGroup
      exclusive
      onChange={(event) => {
        i18n.changeLanguage(event.target.value)
      }}
      aria-label="Platform"
    >
      {Object.keys(locales).map((locale) => (
   
          <ToggleButton value={locale}> {locales[locale].title}</ToggleButton>
        ))}
    
    </ToggleButtonGroup>

    
  );
}


const Header = () => {

  const { t } = useTranslation();

    return  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        {t('main.header')}
      </Typography>
      <Switcher />
    </Toolbar>
    </AppBar>
}

export default Header;