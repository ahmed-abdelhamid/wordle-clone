import { useForm } from "react-hook-form";

import { Action, State } from "../reducers/letters-reducer";

type FormValues = {
  letters: string[];
};

interface RowProps {
  state: State;
  disabled: boolean;
  dispatch: React.Dispatch<Action>;
}

export const Row = ({ state, disabled, dispatch }: RowProps) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: { letters: state.letters },
  });

  const onSubmit = (data: FormValues) => {
    dispatch({ type: "SET_LETTERS", payload: data });
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
            disabled={disabled}
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
