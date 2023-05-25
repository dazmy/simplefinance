import Authen from "@/Layouts/Auth/Authen";
import moment from "moment/moment";
import Swal from "sweetalert2";
import { Link } from "@inertiajs/inertia-react";

export default function Index({
    incomes,
    spendings,
    total,
    transactions,
    auth,
    flashMessage,
}) {
    if (flashMessage.message) {
        Swal.fire({
            title: "Success!",
            text: flashMessage.message,
            icon: flashMessage.type,
            confirmButtonText: "Close",
            timer: 5000,
        });
    }
    return (
        <Authen auth={auth}>
            <h1 class="text-3xl text-black pb-6">Dashboard</h1>
            <div class="flex justify-between">
                <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                    <h5 class="text-gray-500 text-xl leading-tight font-medium">
                        SALDO
                    </h5>
                    <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                        {total.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </h2>
                    <p className="text-gray-500 pb-6">
                        {moment().format("LLLL")}
                    </p>
                    <Link href={route("dashboard.index")}>
                        <button
                            type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Refresh
                        </button>
                    </Link>
                </div>
                <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                    <h5 class="text-gray-500 text-xl leading-tight font-medium">
                        PEMASUKAN
                    </h5>
                    <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                        {incomes.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </h2>
                    <p className="text-gray-500 pb-6">Bulan ini</p>
                    <Link href={route("dashboard.pemasukan", "lastreport")}>
                        <button
                            type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Lihat Data
                        </button>
                    </Link>
                </div>
                <div class="border-l-4 border-indigo-500 block p-6 rounded-lg shadow-lg bg-white max-w-sm w-1/3">
                    <h5 class="text-gray-500 text-xl leading-tight font-medium">
                        PENGELUARAN
                    </h5>
                    <h2 class="text-gray-700 font-bold mb-4 text-3xl">
                        {spendings.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                    </h2>
                    <p className="text-gray-500 pb-6">Bulan ini</p>
                    <Link href={route("dashboard.pengeluaran", "lastreport")}>
                        <button
                            type="button"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Lihat Data
                        </button>
                    </Link>
                </div>
            </div>

            {/* table */}
            <div class="w-full mt-12">
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> Data Laporan Terakhir
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
                            {transactions.map((transaction, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 == 0 ? "" : "bg-gray-200"
                                    }`}
                                >
                                    <td class="text-left py-3 px-4">
                                        {index + 1}
                                    </td>
                                    <td class="text-left py-3 px-4">
                                        {moment(transaction.tanggal).format(
                                            "LL"
                                        )}
                                    </td>
                                    <td class="text-left py-3 px-4">
                                        {transaction.keterangan}
                                    </td>
                                    <td class="text-left py-3 px-4">
                                        {transaction.pemasukan.toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                    <td class="text-left py-3 px-4">
                                        {transaction.pengeluaran.toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                    <td class="text-left py-3 px-4 font-bold">
                                        {transaction.saldo.toLocaleString(
                                            "id-ID"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* end table */}
        </Authen>
    );
}
