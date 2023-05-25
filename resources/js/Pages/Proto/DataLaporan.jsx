import Authen from "@/Layouts/Auth/Authen";

export default function DataLaporan() {
    return (
        <Authen>
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                {/* <div className=""> */}
                    <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                        <p class="text-xl pb-6 flex items-center">
                            <i class="fas fa-list mr-3"></i> Cari berdasarkan tanggal
                        </p>
                        <div class="leading-loose">
                            <form class="p-10 bg-white rounded shadow-xl">
                                <div class="mt-2">
                                    <label
                                        class="block text-sm text-gray-600"
                                        for="email"
                                    >
                                        Tanggal Awal
                                    </label>
                                    <input
                                        class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                        id="email"
                                        name="email"
                                        type="date"
                                        required=""
                                        placeholder="Your Email"
                                        aria-label="Email"
                                    />
                                </div>
                                <div class="mt-2">
                                    <label
                                        class="block text-sm text-gray-600"
                                        for="email"
                                    >
                                        Tanggal Akhir
                                    </label>
                                    <input
                                        class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                        id="email"
                                        name="email"
                                        type="date"
                                        required=""
                                        placeholder="Your Email"
                                        aria-label="Email"
                                    />
                                </div>
                                <div class="mt-6">
                                    <button
                                        class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                {/* </div> */}

                <div class="w-full mt-12 px-6">
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
                                    <td class="text-left py-3 px-4">
                                        Beli Apapun
                                    </td>
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
                                    <td class="text-left py-3 px-4">
                                        Beli Apapun
                                    </td>
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
                                    <td class="text-left py-3 px-4">
                                        Beli Apapun
                                    </td>
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
                                    <td class="text-left py-3 px-4">
                                        Beli Apapun
                                    </td>
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
