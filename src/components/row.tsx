import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { letterReducer } from "../reducers/letters-reducer";

type FormValues = {
  letters: string[];
};

const initialState = { letters: ["", "", "", "", ""] };

export const Row = () => {
  const [state, dispatch] = useReducer(letterReducer, initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: initialState });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {state.letters.map((_, i) => (
          <input key={i} className="border" {...register(`letters.${i}`)} />
        ))}
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
