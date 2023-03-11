import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SOBRE</h5>
        <p>Como Airbnb trabalha</p>
        <p>Avaliações</p>
        <p>Investidores</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxo</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMUNIDADE</h5>
        <p>Acessibilidade</p>
        <p>Este nao é o site real</p>
        <p>Somente um clone</p>
        <p>Feito em nextjs, tailwindcss</p>
        <p>HTM1000</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>HTM1000</p>
        <p>Estudando</p>
        <p>Aprendendo</p>
        <p>Codigo e Codigo</p>
        <p>Fã papareact</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPORTE</h5>
        <p>Entre contato</p>
        <p>Email</p>
        <p>Whatsapp</p>
        <p>Tire duvidas</p>
        <p>Conecte-se</p>
      </div>
    </div>
  )
}