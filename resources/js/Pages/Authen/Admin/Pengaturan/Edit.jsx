import Authen from "@/Layouts/Auth/Authen";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ auth, user }) {
    const { data, setData, processing, errors, put } = useForm({
        ...user,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        Inertia.post(route("admin.dashboard.pengaturan.update", user.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authen auth={auth}>
            <div className="flex flex-wrap">
                <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                    <p class="text-xl pb-6 flex items-center">
                        <i class="fas fa-list mr-3"></i> Edit User : {user.name}
                    </p>
                    <button
                        className="px-4 py-1 mb-6 text-white font-light tracking-wider bg-indigo-400 hover:bg-indigo-600 rounded"
                        onClick={() => {
                            confirm("Reset Password ?")
                                ? put(
                                      route(
                                          "admin.dashboard.pengaturan.reset",
                                          user.id
                                      )
                                  )
                                : alert("batal");
                        }}
                    >
                        RESET PASSWORD
                    </button>
                    <div class="leading-loose">
                        <form
                            class="p-10 bg-white rounded shadow-xl"
                            onSubmit={submit}
                        >
                            <div class="">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="name"
                                >
                                    Nama
                                </label>
                                <input
                                    class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                                    id="name"
                                    name="name"
                                    type="text"
                                    required=""
                                    placeholder="Nama"
                                    value={data.name}
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                    id="email"
                                    name="email"
                                    type="email"
                                    required=""
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div class="mt-2">
                                <label
                                    class="block text-sm text-gray-600"
                                    for="password"
                                >
                                    Password
                                </label>
                                <input
                                    class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                    id="password"
                                    name="password"
                                    type="text"
                                    required=""
                                    placeholder="Password"
                                    value="********"
                                    disabled
                                    onChange={onHandleChange}
                                />
                                <InputError
                                    message={errors.password}
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
