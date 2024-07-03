import english from './english.json'



export const languages = {  
  en: 'en',
};
export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === languages.en) return {...english};
	return english;
};