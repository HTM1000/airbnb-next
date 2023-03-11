import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns"
import InfoCard from "../components/InfoCard";

export default function Search({ searchResults }: any) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query

  const formattedStartDate = format(new Date(startDate),  "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate),  "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuest} hóspedes`} />
      
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300 estadias - {range} - para {numberOfGuest} hóspedes</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Estadias em {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelamento Flexivel</p>
            <p className="button">Tipo de lugar</p>
            <p className="button">Preço</p>
            <p className="button">Quartos e Camas</p>
            <p className="button">Mais filtros</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: any) => (
              <InfoCard 
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json())

  return {
    props: {
      searchResults,
    }
  }
}