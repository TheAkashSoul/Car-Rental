import QuickEasy from '@/components/QuickEasy'
import Hero from '@/components/hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#F8F8F8]'>
      <Hero /> 
      <QuickEasy />
    </main>
  )
}
