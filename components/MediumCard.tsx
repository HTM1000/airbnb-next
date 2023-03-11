import Image from "next/image";
import React from "react";

interface MediumCardProps {
  img: string,
  title: string,
}

export default function MediumCard({ img, title }: MediumCardProps ) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="imagem dos locais de viagem" fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}