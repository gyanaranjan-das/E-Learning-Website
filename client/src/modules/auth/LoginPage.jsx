import {useForm} from "react-hook-form";

export default function LoginPage(){
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("Login data:",data);
    };

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input
                    {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                />

                <input
                    {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"/>

                <button type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded">Login
                </button>

            </form>
        </div>
    );
}