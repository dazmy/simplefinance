import Authen from "@/Layouts/Auth/Authen";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage }) {
    const { data, setData, post, processing, errors } = useForm({
        jumlah_pemasukan: "",
        tanggal_pemasukan: "",
        keterangan_pemasukan: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.pemasukan.store"));
    };

    return (
        <Authen auth={auth}>
            <div className="flex flex-wrap">
                <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                    <p class="text-xl pb-6 flex items-center">
                        <i class="fas fa-list mr-3"></i> Tambah Pemasukan
                    </p>
                    <div class="leading-loose">
                        <form
                            class="p-10 bg-white rounded shadow-xl"
                            onSubmit={submit}
                        >
                            <div>
                                {flashMessage?.message && (
                                    <div className="flex bg-green-100 rounded p-4 mb-4 text-sm text-green-700">
                                        <span>{flashMessage.message}</span>
                                    </div>
                                )}
                            </div>
                            <div class="">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="jumlah_pemasukan"
                                >
                                    Jumlah
                                </label>
                                <input
                                    class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                                    id="jumlah_pemasukan"
                                    name="jumlah_pemasukan"
                                    type="number"
                                    required=""
                                    placeholder="Jumlah"
                                    value={data.jumlah_pemasukan}
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.jumlah_pemasukan}
                                    className="mt-2"
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="tanggal_pemasukan"
                                >
                                    Tanggal
                                </label>
                                <input
                                    class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                    id="tanggal_pemasukan"
                                    name="tanggal_pemasukan"
                                    type="date"
                                    // cari tipe selain datetime-local
                                    required=""
                                    // placeholder=""
                                    value={data.tanggal_pemasukan}
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.jumlah_pemasukan}
                                    className="mt-2"
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class=" block text-sm text-gray-600"
                                    for="keterangan_pemasukan"
                                >
                                    Rincian
                                </label>
                                <textarea
                                    class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                                    id="keterangan_pemasukan"
                                    name="keterangan_pemasukan"
                                    rows="3"
                                    required=""
                                    placeholder="Masukkan Rincian Pemasukan..."
                                    value={data.keterangan_pemasukan}
                                    onChange={onHandleChange}
                                ></textarea>
                                <InputError
                                    message={errors.keterangan_pemasukan}
                                    className="mt-2"
                                />
                            </div>
                            <div class="mt-6">
                                <button
                                    class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authen>
    );
}
