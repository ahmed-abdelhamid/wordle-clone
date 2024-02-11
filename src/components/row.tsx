import { useForm } from "react-hook-form";

type FormValues = {
  letters: string[];
};

interface RowProps {
  state: FormValues;
}

export const Row = ({ state }: RowProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { letters: state.letters } });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <form className="flex space-x-4" onSubmit={handleSubmit(onSubmit)}>
        {state.letters.map((_, i) => (
          <input
            key={i}
            type="text"
            className="w-10 h-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
            maxLength={1}
            {...register(`letters.${i}`, {
              required: true,
              maxLength: 1,
              pattern: /^[a-zA-Z]+$/i,
            })}
          />
        ))}
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
