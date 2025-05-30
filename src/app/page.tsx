import ClientInit from '@/components/ClientInit'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Methodology from '@/components/Methodology'
import ProductRanking from '@/components/ProductRanking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <ClientInit />
        <Hero />
        <Methodology />
        <ProductRanking />
      </main>
      <Footer />
    </>
  )
} 