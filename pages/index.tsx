import { link } from 'fs'
import Image from 'next/image'
import data from '../data.json'

function LinkCard({
  href, title, image
}: { href: string, title: string, image?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center p-2 rounded-sm shadow-lg hover:shadow-xl hover:bg-cyan-800 transition-shadow duration-300 my-4 sm:w-4/5 md:w-4/6 lg:w-3/6 bg-slate-800">
      <div className='flex items-center justify-evenly'>
        <Image
          className='my-0 mr-8 border-r-2 border-orange-600'
          width="56"
          height="56"
          alt={data.name}
          src={data.avatar}
          />
        <h2 className='font-bold text-lg text-slate-200 uppercase'>{title} - <span className='text-base font-light'>work</span></h2>
      </div>
    </a>
  )
}

function SocialCard({
  href, title, image
}: { href: string, title: string, image?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center p-2 rounded-sm shadow-lg hover:shadow-xl hover:bg-orange-600 transition-shadow duration-300 my-4 sm:w-4/5 md:w-4/6 lg:w-3/6 bg-slate-200">
      <div className='flex items-center justify-evenly'>
        <Image
          className='my-0 mr-8 border-r-2 border-orange-600'
          width="56"
          height="56"
          alt={data.name}
          src={data.avatar}
          />
        <h2 className='font-bold text-lg text-slate-800 uppercase'>{title} - <span className='text-base font-light'>social</span></h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (  
      <div className='flex items-center justify-center flex-col mx-auto my-16 w-screen'>
      <Image
        className='rounded-full my-8'
        width="96"
        height="96"
        alt={data.name}
        src={data.avatar}
      />
      <h1 className='font-semibold text-4xl text-slate-200 hover:text-sky-400'>{data.name}</h1>

      <div className='flex items-center flex-col my-8 mx-auto w-full'>
     {/*    <h2 className='font-bold text-xl'>See my work</h2> */}
        {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
       ))}
     {/*    <h2 className='font-bold text-xl'>See my work</h2> */}
        {data.socials.map((soc) => (
        <SocialCard key={soc.href} {...soc} />
       ))}
      </div>

     
      </div>
    
  )
}


