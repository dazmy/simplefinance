import moment from "moment/moment";
import { Head } from "@inertiajs/inertia-react";

export default function LaporanPDF({ data }) {
    return (
        <>
            <Head title="Laporan PDF" />
            <div class="w-full mt-6 px-6">
                <button
                    onClick={window.print}
                    className="bg-indigo-300 py-2 px-3 rounded"
                >
                    Download PDF
                </button>
                <p class="text-xl pb-3 flex items-center">
                    <i class="fas fa-list mr-3"></i> {`${data.title} ${moment(data.from).format('L')} sampai ${moment(data.to).format('L')}`}
                </p>
                <div class="bg-white overflow-auto">
                    <table class="min-w-full bg-white">
                        <thead class="bg-indigo-500 text-black border">
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
                            {data.content.map((transaction, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 == 0
                                            ? "border"
                                            : "bg-gray-200 border"
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
        </>
    );
}
