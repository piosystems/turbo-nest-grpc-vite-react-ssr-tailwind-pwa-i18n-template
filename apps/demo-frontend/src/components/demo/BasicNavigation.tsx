//import { Link } from "react-router-dom"
import { Suspense, useContext, useState } from "react";
import { BasicNavbarLink } from "../../global/frontend.tools";
import { useTranslation } from 'react-i18next';
import { AppContext } from "../../AppWithNavDemo";


const BasicNavigation: React.FC = () => {

    const appContext = useContext(AppContext);
    const baseUrl = appContext?.baseUrl;
    //leverage on https://flowbite.com/docs/components/navbar/
    /*return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Demo</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            {<BasicNavbarLink to={`${baseUrl}`} text="Home" />}
                        </li>
                        <li>
                            {<BasicNavbarLink to={`${baseUrl}/about`} text="About" />}
                        </li>
                        <li>
                            {<BasicNavbarLink to={`${baseUrl}/dashboard`} text="Dashboard" />}
                        </li>
                        <li>
                            {<BasicNavbarLink to={`${baseUrl}/nothing-here`} text="Nothing Here" />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )*/
    //Below uses internationalization for menu, unlike above
    const { t, i18n } = useTranslation();
    //Or You can narrow down useTranslation() to one or more namespaces as shown below
    //const { t, i18n } = useTranslation('adm'); //narrow down to a namespace or array of namespaces if necessary
    //const { t, i18n } = useTranslation(['public','adm']);

    //prepare language util

    //@ts-ignore //language could be passed down to everywhere. Not in use now. hence //@ts-ignore
    const [language, setLanguage] = useState(i18n.language);

    //Below is an example of a callback function called from a select event to change language. Not in use here, hence the //@ts-ignore
    //@ts-ignore
    const changeLanguage = async (e: { target: { value: string | undefined; }; }) => {
        //Notice that in the default lng in i18n.js is en. Of course, you should make this more state managed with a language selection UI
        await i18n.changeLanguage(e.target.value); //set the language
        setLanguage(i18n.language);//update state to provoke rerender
    }


    return (
        <Suspense> {/* Using Suspense so as to give room for language translations to be loaded especially with ssr */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Demo</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                {<BasicNavbarLink to={`${baseUrl}`} text={t('home')} />}
                            </li>
                            <li>
                                {<BasicNavbarLink to={`${baseUrl}/about`} text={t('about')} />}
                            </li>
                            <li>
                                {<BasicNavbarLink to={`${baseUrl}/dashboard`} text={t('dashboard')} />}
                            </li>
                            <li>
                                {<BasicNavbarLink to={`${baseUrl}/nothing-here`} text={t('nothing here')} />}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Suspense>
    )
}
export default BasicNavigation;