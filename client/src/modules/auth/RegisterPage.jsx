import {useForm} from "react-hook-form";

export default function RegisterPage(){
    const {register,handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("Register data:",data);
    };


    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <input
                    {...register("name")}
                    type="text"
                placeholder="full name"
                className="w-full p-2 border rounded"/>

                <input
                    {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"/>

                <button
                    type="submit"
                className="w-full bg-green-600 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
}