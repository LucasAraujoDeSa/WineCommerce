import Head from 'next/head'
import { NavBar, Banner, Products } from '../components'
import { wineData } from '../data/wineData'

export default function Home() {

  const data = wineData

  return (
    <section>
      <Head>
        <title>Wine Commerce</title>
      </Head>
      <NavBar/>
      <Banner/>
      <Products data={data}/>
    </section>
  )
}
