import { useForm } from "react-hook-form";
import { z } from "zod"; 
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10)
})

const Contact = () => {
    const { register, handleSubmit, formState: {errors, isDirty, isValid} } = useForm({
        defaultValues:{
            name: "Ali",
            email: "alizulfiya@gmail.com",
            message: "",
        },
        resolver: zodResolver(schema),
        mode:"onChange",
    });
    const handleFormSubmit = (data, event) => {
        console.log(data);
        event.preventDefault();
        schema.parse(data);
    }
    console.log(errors);
    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="w-[90%] mx-auto flex flex-col gap-4">
                <label htmlFor="name" className="text-md font-semibold ">Name:</label>
                <input type="text" id="name" className="border border-cyan-300" {...register("name")} />
                <p>{ errors?.name?.message}</p>
                <label htmlFor="email" className="text-md font-semibold " >Email Id:</label>
                <input type="email" id="email" className="border border-cyan-300" {...register("email")} />
                <label htmlFor="message" className="text-md font-semibold ">Message:</label>
                <textarea rows={2} cols={30} id="message" className="border border-cyan-300" {...register("message")} ></textarea>
                <button type="submit" className={!isValid && !isDirty ? "bg-red-500" : "bg-green-500"} disabled={isValid}>Submit</button>

                <p>{!isValid && <p>InValid</p>}</p>
                <p>{isValid && <p>Valid</p>}</p>

                <p>{ !isDirty && <p>Not Modified</p>}</p>
                <p>{ isDirty && <p>Modified</p>}</p>
            </form>
        </>
    );
}

export default Contact;