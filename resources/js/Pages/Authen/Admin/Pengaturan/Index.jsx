import Authen from "@/Layouts/Auth/Authen";
import moment from "moment/moment";
import Swal from "sweetalert2";
import { useForm } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index({ auth, users, flashMessage }) {
    const { delete: destroy } = useForm();
    // if (flashMessage.message) {
    //     Swal.fire({
    //         title: "Success!",
    //         text: flashMessage.message,
    //         icon: flashMessage.type,
    //         confirmButtonText: "Close",
    //         timer: 5000,
    //     });
    // }
    return (
        <Authen auth={auth}>
            <div class="w-full mt-6">
                {flashMessage?.message && (
                    <div className="flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700">
                        <span>{flashMessage.message}</span>
                    </div>
                )}
                <a href={route("admin.dashboard.pengaturan.create")}>
                    <span class="bg-white mb-6 p-3 rounded inline-block hover:bg-slate-200 cursor-pointer">
                        <FontAwesomeIcon
                            icon="fa-solid fa-user-plus"
                            className="mr-3"
                        />
                        Tambah User
                    </span>
                </a>
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Table User
                </p>
                <div class="bg-white overflow-auto">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Role
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {user.name}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {user.email}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap uppercase font-bold">
                                            {user.roles[0].name}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            {moment(user.created_at).fromNow()}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="inline-block">
                                            <a
                                                href={route(
                                                    "admin.dashboard.pengaturan.edit",
                                                    user.id
                                                )}
                                            >
                                                <button className="mr-3">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                            </a>
                                        </div>

                                        <div
                                            className="inline-block"
                                            onClick={() => {
                                                confirm("mau dihapus ?")
                                                    ? destroy(
                                                          route(
                                                              "admin.dashboard.pengaturan.destroy",
                                                              user.id
                                                          )
                                                      )
                                                    : false;
                                            }}
                                        >
                                            <button className="mr-3">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </div>
                                        {/* <div
                                            className="inline-block"
                                            onClick={() => {
                                                confirm(
                                                    "mau direset password ?"
                                                )
                                                    ? 
                                                    put(
                                                          route(
                                                              "admin.dashboard.pengaturan.reset",
                                                              user.id
                                                          )
                                                      )
                                                    : false;
                                            }}
                                        >
                                            <button>
                                                <i class="fas fa-key"></i>
                                            </button>
                                        </div> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authen>
    );
}
