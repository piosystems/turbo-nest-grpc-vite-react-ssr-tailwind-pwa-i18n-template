import BasicOutlet from "./BasicOutlet";
import BasicNavigation from "./navigation/BasicNavigation";

const Layout: React.FC = () => {
    return (
        <>
            <BasicNavigation />
            <BasicOutlet />
        </>
    );
}

export default Layout;