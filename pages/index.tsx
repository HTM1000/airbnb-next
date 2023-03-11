import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

const Home: NextPage<any> = ({ exploreData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>HTM Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nas proximidades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({ img, distance, location }: any) => (
            <SmallCard 
              img={img}
              distance={distance}
              location={location}
              key={location}
            />
          ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">
            Viva em qualquer lugar
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({img, title}: any) => (
              <MediumCard 
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="O Maior ao Ar Livre"
          description="Listas de desejos com curadoria do Airbnb"
          buttonText="Inspire-se"
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData: String = await fetch(`https://www.jsonkeeper.com/b/4G1G`).
    then(
      (res) => res.json()
    )

  const cardsData: String = await fetch(`https://www.jsonkeeper.com/b/VHHT`).
    then(
      (res) => res.json()
    )  

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}

export default Home
