import { Navbar } from "flowbite-react";
import { Link, useLinkClickHandler, useLocation } from "react-router-dom";

export interface NavbarLinkProps {
    to: string;
    text: string;
    className?: string;
}

export function NavbarLink(props: NavbarLinkProps) {
    const location = useLocation();
    const clickHandler = useLinkClickHandler(props.to);

    return <span onClick={clickHandler}>
        <Navbar.Link href={props.to} active={location.pathname === props.to} className={props.className}>
            {props.text}
        </Navbar.Link>
    </span>;
}

export function BasicNavbarLink(props: NavbarLinkProps) {
    const location = useLocation();
    const inactiveCssClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    const activeCssClass = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
    if (location.pathname === props.to){
        return <Link to={props.to} className={activeCssClass} aria-current="page" >{props.text}</Link>
    }else{
        return <Link to={props.to} className={inactiveCssClass} >{props.text}</Link>
    }
}