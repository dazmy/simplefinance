import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "@/Components/Footer";

export default function Authen({ auth, children }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
                <Header auth={auth.user.name} />
                <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                    <main class="w-full flex-grow p-6">{children}</main>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
