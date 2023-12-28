import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

import { NAV_COMPONENTS } from "./nav-components";
import { ListItem } from "./ListItems";
import { Link } from "react-router-dom";
import { Icons } from "@/components/ui/icons";
import { ModeToggle } from "@/components/mode-toggle";


const BasicNavigation: React.FC = () => {
    return (

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>My Users Link</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            to="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Just showcasing users visibility all the way from identity microservice via api-gateway
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Leveraging on Shadcn/ui to organize menu for demo
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    key="List Users"
                                    title="List Users"
                                    href="/view-users"
                                >
                                    List of users that are available in the users microservice
                                </ListItem>
                                <ListItem
                                    key="Show User"
                                    title="Show User"
                                    href="/user/{replace-this-curly-bracket-with-known-id-of-user-here}"
                                >
                                    Display a user. Replace curly bracket in url with known user id
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Shadcn Getting Started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            to="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components built with Radix UI and
                                                Tailwind CSS.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="https://ui.shadcn.com/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="https://ui.shadcn.com/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="https://ui.shadcn.com/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Some Shadcn Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {NAV_COMPONENTS.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="https://ui.shadcn.com/docs" >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Shadcn Docs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

    );
}
export default BasicNavigation;