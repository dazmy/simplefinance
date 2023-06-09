import Authen from "@/Layouts/Auth/Authen";

export default function Pengeluaran() {
    return (
        <Authen>
            <div className="flex flex-wrap">
                <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2 px-6">
                    <p class="text-xl pb-6 flex items-center">
                        <i class="fas fa-list mr-3"></i> Tambah Pengeluaran
                    </p>
                    <div class="leading-loose">
                        <form class="p-10 bg-white rounded shadow-xl">
                            <div class="">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="name"
                                >
                                    Jumlah
                                </label>
                                <input
                                    class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                                    id="name"
                                    name="name"
                                    type="text"
                                    required=""
                                    placeholder="Jumlah"
                                    aria-label="Name"
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="email"
                                >
                                    Tanggal
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
                                    class=" block text-sm text-gray-600"
                                    for="message"
                                >
                                    Rincian
                                </label>
                                <textarea
                                    class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                                    id="message"
                                    name="message"
                                    rows="6"
                                    required=""
                                    placeholder="Your inquiry.."
                                    aria-label="Email"
                                ></textarea>
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
            </div>
        </Authen>
    );
}
