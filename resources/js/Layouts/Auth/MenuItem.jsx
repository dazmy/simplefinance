import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ link, name, icon, isActive, method = 'get' }) {
    return (
        <Link
            href={link}
            method={method}
            className={`${
                isActive
                    ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                    : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
            }`}
        >
            <FontAwesomeIcon icon={icon} />
            {name}
        </Link>
    );
}
