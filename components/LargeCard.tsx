import Image, { ImageProps } from "next/image";
import React from "react";

interface LargeCardProps {
  title: string,
  description: string,
  buttonText: string,
  img: string,
}

export default function LargeCard({ img, title, description, buttonText }: LargeCardProps) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="imagem do local para viagens"
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-32">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>

    </section>
  )
}