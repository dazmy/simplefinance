import Authen from "@/Layouts/Auth/Authen";

export default function DataPengeluaran() {
    return (
        <Authen>
            <div class="w-full mt-12 px-6">
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Data Pengeluaran
                </p>
                <div class="bg-white overflow-auto">
                    <table class="text-left w-full border-collapse">
                        <thead>
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    No
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Tanggal
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Rincian
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Jumlah
                                </th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-6 border-b border-grey-light">
                                    1
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    26 Desember 2022
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    Beli Apapun
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    50.000.000,00
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-6 border-b border-grey-light">
                                    2
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    26 Desember 2022
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    Beli Apapun
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    50.000.000,00
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-6 border-b border-grey-light">
                                    3
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    26 Desember 2022
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    Beli Apapun
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    50.000.000,00
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-6 border-b border-grey-light">
                                    4
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    26 Desember 2022
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    Beli Apapun
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    50.000.000,00
                                </td>
                                <td class="py-4 px-6 border-b border-grey-light">
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-2"
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="pt-3 text-gray-600">
                    Source:{" "}
                    <a
                        class="underline"
                        href="https://tailwindcomponents.com/component/table"
                    >
                        https://tailwindcomponents.com/component/table
                    </a>
                </p>
            </div>
        </Authen>
    );
}
