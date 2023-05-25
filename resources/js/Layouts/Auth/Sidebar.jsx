import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function Sidebar() {
    const logout = () => {
        Swal.fire({
            title: 'Mau keluar?',
            text: "Pastikan semua sudah benar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, keluar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Inertia.post(route('logout'))
            }
          })
    }
    return (
        <aside className="relative bg-sidebar h-screen w-72 hidden sm:block shadow-xl">
            <div className="p-6">
                <Link
                    href={route("dashboard.index")}
                    className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                >
                    Dashboard
                </Link>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <a href="https://www.github.com/dazmy" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" className="mr-3" /> My Github</a>
                </button>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <div className="pb-2 text-center">
                    <p className="bg-indigo-700">Info</p>
                    <Link
                        href={route("dashboard.index")}
                        className={
                            route().current("dashboard.index")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Dashboard
                    </Link>
                </div>

                <div className="pb-2 text-center">
                    <p className="bg-indigo-700">Input Data</p>
                    <Link
                        href={route("admin.dashboard.pemasukan")}
                        className={
                            route().current("admin.dashboard.pemasukan")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-sticky-note mr-3"></i>
                        Pemasukan
                    </Link>
                    <Link
                        href={route("admin.dashboard.pengeluaran")}
                        className={
                            route().current("admin.dashboard.pengeluaran")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-table mr-3"></i>
                        Pengeluaran
                    </Link>
                </div>

                <div className="pb-2 text-center">
                    <p className="bg-indigo-700">Data</p>
                    <Link
                        href={route("dashboard.pemasukan", "lastreport")}
                        className={
                            route().current("dashboard.pemasukan")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-align-left mr-3"></i>
                        Pemasukan
                    </Link>
                    <Link
                        href={route("dashboard.pengeluaran", "lastreport")}
                        className={
                            route().current("dashboard.pengeluaran")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-tablet-alt mr-3"></i>
                        Pengeluaran
                    </Link>
                    <Link
                        href={route("dashboard.laporan")}
                        className={
                            route().current("dashboard.laporan")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-calendar mr-3"></i>
                        Laporan
                    </Link>
                </div>

                <div className="pb-2 text-center">
                    <p className="bg-indigo-700">Pengaturan</p>
                    <Link
                        href={route("admin.dashboard.pengaturan.index")}
                        className={
                            route().current("admin.dashboard.pengaturan.index")
                                ? "flex items-center text-white active-nav-link py-4 pl-6 nav-item"
                                : "flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
                        }
                    >
                        <i className="fas fa-calendar mr-3"></i>
                        User
                    </Link>
                </div>
            </nav>
            <Link
                // href={route("logout")}
                // method="post"
                onClick={() => logout()}
                className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-2"
            >
                <i className="fas fa-arrow-circle-up mr-3"></i>
                Logout
            </Link>
        </aside>
    );
}
