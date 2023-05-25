// udah

import Authen from "@/Layouts/Auth/Authen";

export default function Dashboard() {
    return (
        <Authen>
            <div class="w-full overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6">
                    <h1 class="text-3xl text-black pb-6">Dashboard</h1>
                    <div class="flex justify-between">
                        <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                            <h5 class="text-gray-500 text-xl leading-tight font-medium">
                                SALDO
                            </h5>
                            <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                                Rp. 5.000.000,00
                            </h2>
                            <p className="text-gray-500 pb-6">Jumat 26 Desember 2022</p>
                            <button
                                type="button"
                                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Button
                            </button>
                        </div>
                        <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                            <h5 class="text-gray-500 text-xl leading-tight font-medium">
                                PEMASUKAN
                            </h5>
                            <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                                Rp. 5.000.000,00
                            </h2>
                            <p className="text-gray-500 pb-6">Bulan ini</p>
                            <button
                                type="button"
                                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Button
                            </button>
                        </div>
                        <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                            <h5 class="text-gray-500 text-xl leading-tight font-medium">
                                PENGELUARAN
                            </h5>
                            <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                                Rp. 1.000.000,00
                            </h2>
                            <p className="text-gray-500 pb-6">Bulan ini</p>
                            <button
                                type="button"
                                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </main>

                {/* <div class="w-full mt-12 px-6">
                    <p class="text-xl pb-3 flex items-center">
                        <i class="fas fa-list mr-3"></i> Latest Reports
                    </p>
                    <div class="bg-white overflow-auto">
                        <table class="min-w-full bg-white">
                            <thead class="bg-gray-800 text-white">
                                <tr>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                    <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
                <div class="w-full mt-12">
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Data Laporan
                </p>
                <div class="bg-white overflow-auto">
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-800 text-white">
                            <tr>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    No
                                </th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    Tanggal
                                </th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    Rincian
                                </th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    Pemasukan
                                </th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    Pengeluaran
                                </th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                                    Saldo
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr>
                                <td class="text-left py-3 px-4">1</td>
                                <td class="text-left py-3 px-4">
                                    26 Desember 2022
                                </td>
                                <td class="text-left py-3 px-4">Beli Apapun</td>
                                <td class="text-left py-3 px-4">
                                    5.000.000,00
                                </td>
                                <td class="text-left py-3 px-4">
                                    1.000.000,00
                                </td>
                                <td class="text-left py-3 px-4 font-bold">
                                    4.000.000,00
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="text-left py-3 px-4">2</td>
                                <td class="text-left py-3 px-4">
                                    26 Desember 2022
                                </td>
                                <td class="text-left py-3 px-4">Beli Apapun</td>
                                <td class="text-left py-3 px-4">
                                    5.000.000,00
                                </td>
                                <td class="text-left py-3 px-4">
                                    1.000.000,00
                                </td>
                                <td class="text-left py-3 px-4 font-bold">
                                    4.000.000,00
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left py-3 px-4">3</td>
                                <td class="text-left py-3 px-4">
                                    26 Desember 2022
                                </td>
                                <td class="text-left py-3 px-4">Beli Apapun</td>
                                <td class="text-left py-3 px-4">
                                    5.000.000,00
                                </td>
                                <td class="text-left py-3 px-4">
                                    1.000.000,00
                                </td>
                                <td class="text-left py-3 px-4 font-bold">
                                    4.000.000,00
                                </td>
                            </tr>
                            <tr class="bg-gray-200">
                                <td class="text-left py-3 px-4">4</td>
                                <td class="text-left py-3 px-4">
                                    26 Desember 2022
                                </td>
                                <td class="text-left py-3 px-4">Beli Apapun</td>
                                <td class="text-left py-3 px-4">
                                    5.000.000,00
                                </td>
                                <td class="text-left py-3 px-4">
                                    1.000.000,00
                                </td>
                                <td class="text-left py-3 px-4 font-bold">
                                    4.000.000,00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="pt-3 text-gray-600">
                    Source:{" "}
                    <a
                        class="underline"
                        href="https://tailwindcomponents.com/component/striped-table"
                    >
                        https://tailwindcomponents.com/component/striped-table
                    </a>
                </p>
            </div>

            </div>
        </Authen>
    );
}
