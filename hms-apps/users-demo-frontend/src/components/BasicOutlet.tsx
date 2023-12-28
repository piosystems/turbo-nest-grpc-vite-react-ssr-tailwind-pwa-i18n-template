import { Outlet } from "react-router-dom"

const BasicOutlet = () => {
    
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                
                {<Outlet />}
                
            </div>
        </section>
    )
};

export default BasicOutlet;