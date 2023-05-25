import Authen from "@/Layouts/Auth/Authen";
import { useForm } from "@inertiajs/inertia-react";

export default function Pemasukan({ auth, user, incomes }) {
    const pathname = window.location.pathname;

    const { delete: destroy } = useForm();
    return (
        <Authen auth={auth}>
            <div class="w-full mt-6">
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Data Pemasukan
                </p>
                <div class="bg-white overflow-auto">
                    <table class="text-left w-full border-collapse">
                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    No
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Tanggal, Waktu
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Rincian
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Jumlah
                                </th>
                                <th
                                    class={`${
                                        user === "admin"
                                            ? "py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                                            : "hidden"
                                    }`}
                                >
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomes &&
                                incomes.map((income, index) => (
                                    <tr
                                        class="hover:bg-grey-lighter"
                                        key={index}
                                    >
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {index + 1}
                                        </td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {income.tanggal_pemasukan}
                                        </td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {income.keterangan_pemasukan}
                                        </td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {income.jumlah_pemasukan.toLocaleString(
                                                "id-ID"
                                            )}
                                        </td>
                                        <td
                                            class={`${
                                                user === "admin"
                                                    ? "py-4 px-6 border-b border-grey-light"
                                                    : "hidden"
                                            }`}
                                        >
                                            <a
                                                href={route(
                                                    "admin.dashboard.pemasukan.edit",
                                                    income.slug
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                                >
                                                    EDIT
                                                </button>
                                            </a>
                                            <div
                                                className="inline-block"
                                                onClick={() => {
                                                    confirm("mau dihapus?")
                                                        ? destroy(
                                                              route(
                                                                  "admin.dashboard.pemasukan.destroy",
                                                                  income.id
                                                              )
                                                          )
                                                        : false;
                                                }}
                                            >
                                                <button
                                                    type="button"
                                                    class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
                {pathname == "/dashboard/data/pemasukan/lastreport" && (
                    <div className="my-4">
                        <a
                            href={route(route().current(), "all")}
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-700 "
                        >
                            See All
                        </a>
                    </div>
                )}
            </div>
        </Authen>
    );
}
