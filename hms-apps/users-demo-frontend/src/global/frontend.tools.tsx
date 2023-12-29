import { Link } from "react-router-dom";

export interface NavbarLinkProps {
    to: string;
    text: string;
    className?: string;
}

//ToDo. Revise below to match shadcn/ui in relation to {<NavigationMenuLink><Link to={`${baseUrl}`}>Home</Link></NavigationMenuLink>}
export function BasicNavbarLink(props: NavbarLinkProps) {
    const inactiveCssClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    const activeCssClass = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
    if (location.pathname === props.to){
        return <Link to={props.to} className={activeCssClass} aria-current="page" >{props.text}</Link>
    }else{
        return <Link to={props.to} className={inactiveCssClass} >{props.text}</Link>
    }
}