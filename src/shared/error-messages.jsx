import React from 'react'
import { useTranslation } from 'react-i18next';

const ErrorMessages = ({ message }) => {
    const { t } =  useTranslation();
    return  <>{t(`main.${message}`)}</>
}
  
export default ErrorMessages