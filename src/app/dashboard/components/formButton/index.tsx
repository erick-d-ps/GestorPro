"use client";

import { useFormStatus } from "react-dom";
import { FiLoader } from "react-icons/fi"; // Certifique-se de que esta biblioteca está instalada

export function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 my-4 px-2 h-11 text-white font-bold rounded disabled:bg-slate-400 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
          Carregando...
          <FiLoader size={18} className="animate-spin" />
        </span>
      ) : (
        "Cadastrar"
      )}
    </button>
  );
}