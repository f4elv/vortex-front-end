"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full h-screen px-6 py-3 bg-[#050505] text-white flex flex-col items-center overflow-hidden">

      {/* Glow roxo cinematográfico */}
      <div className="
        absolute top-1/3 left-1/2 -translate-x-1/2 
        w-[900px] h-[900px]
        bg-purple-600/20 blur-[180px] rounded-full
        pointer-events-none
      " />

      {/* Conteúdo */}
      <div
        className={`
          max-w-3xl text-center transition-all duration-1000
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Inicie algo imersivo
        </h1>

        <p className="text-white/70 leading-relaxed text-lg">
          Conte para nós sobre seu projeto, prazo e o que “imersivo” significa para sua marca.
          Vamos retornar com os próximos passos.
        </p>
      </div>

      {/* Formulário */}
      <form
        className={`
          w-full max-w-4xl mt-4 bg-white/5 border border-white/10 
          rounded-3xl p-10 backdrop-blur-xl shadow-lg
          transition-all duration-1000 delay-150
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <input
              type="email"
              placeholder="E-mail de Trabalho"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div className="col-span-2">
            <input
              type="text"
              placeholder="Empresa / Projeto"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div className="col-span-2">
            <textarea
              placeholder="Objetivos do Projeto"
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            ></textarea>
          </div>

          <div>
            <input
              type="text"
              placeholder="Orçamento Estimado"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Prazo"
              className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-500 outline-none transition"
            />
          </div>
        </div>

        {/* Rodapé do formulário */}
        <div className="flex items-center justify-between mt-8">
          <span className="text-white/40 text-sm">
            Respondemos em até 48 horas. <br />
            vortex@email.com
          </span>

          <button
            type="submit"
            className="
              flex items-center gap-2 px-6 py-3 rounded-xl 
              bg-purple-600 hover:bg-purple-700 transition 
              font-semibold text-white shadow-lg shadow-purple-600/30
            "
          >
            🚀 Enviar Solicitação
          </button>
        </div>
      </form>
    </section>
  );
}
