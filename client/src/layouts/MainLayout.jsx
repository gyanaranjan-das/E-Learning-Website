import {Outlet} from "react-router-dom";

export default function MainLayout(){
    return(
        <div className="min-h-screen bg-gray-100 flex">
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}