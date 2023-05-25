import Authen from "@/Layouts/Auth/Authen";
import { useForm } from "@inertiajs/inertia-react";

export default function Laporan({ auth }) {
    const { data, setData, get, processing } = useForm({
        from: "",
        to: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        get(route("dashboard.laporan.pdf", [data.from, data.to]));
    };

    return (
        <Authen auth={auth}>
            <div className="flex flex-wrap">
                <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                    <p class="text-xl pb-6 flex items-center">
                        <i class="fas fa-list mr-3"></i> Laporan berdasarkan
                        tanggal
                    </p>
                    <div class="leading-loose">
                        <form
                            class="p-10 bg-white rounded shadow-xl"
                            onSubmit={submit}
                        >
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="from"
                                >
                                    Tanggal Awal
                                </label>
                                <input
                                    class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                    id="from"
                                    name="from"
                                    type="date"
                                    required=""
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="to"
                                >
                                    Tanggal Akhir
                                </label>
                                <input
                                    class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                    id="to"
                                    name="to"
                                    type="date"
                                    required=""
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div class="mt-6">
                                <button
                                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authen>
    );
}
