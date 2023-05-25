import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Header({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div class="relative w-1/2 flex justify-end">
                <p className="text-black p-3">Hi, {auth}</p>
                <button
                    onClick={() => setIsOpen((current) => !current)}
                    class="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
                >
                    <img src="/assets/img/adam.jpg" />
                </button>
                <button
                    onClick={() => setIsOpen((current) => !current)}
                    class={`${
                        !isOpen ? "hidden" : ""
                    } h-full w-full fixed inset-0 cursor-default`}
                ></button>
                <div
                    class={`${
                        !isOpen ? "hidden" : ""
                    } absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16`}
                >
                    <a
                        href="#"
                        class="block px-4 py-2 account-link hover:text-white"
                    >
                        Account
                    </a>
                    <a
                        href="#"
                        class="block px-4 py-2 account-link hover:text-white"
                    >
                        Support
                    </a>
                    <Link
                        href={route('logout')}
                        method="post"
                        class="block px-4 py-2 account-link hover:text-white"
                    >
                        Sign Out
                    </Link>
                </div>
            </div>
        </header>
    );
}
