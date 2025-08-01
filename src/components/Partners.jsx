import React from 'react'
import codeAcademy from "../assets/logos/code-academy.svg"
import adove from "../assets/logos/adove.svg"
import cocaCola from "../assets/logos/cocacola.svg"
import mattered from "../assets/logos/mattered.svg"
import subway from "../assets/logos/subway.svg"
import nationalBank from "../assets/logos/national-bank.svg"

const Partners = () => {
    const partners = [
        {name: "Code Academy", image: codeAcademy},
        {name: "Adove", image: adove},
        {name: "Coca Cola", image: cocaCola},
        {name: "Mattered", image: mattered},
        {name: "National Bank", image: nationalBank},
        {name: "Subway", image: subway},
    ]
    const duplicatedPartners = [...partners, ...partners]
  return (
    <div className='mt-20 relative overflow-hidden bg-white py-12'>
        <div className='flex animate-marquee whitespace-nowrap overflow-x-hidden'>
            {
                duplicatedPartners.map((partner, index) => (
                    <img key={index} src={partner.image} alt={partner.name} className='h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100'/>
                ))
            }
            {
                duplicatedPartners.map((partner, index) => (
                    <img key={`duplicate-${index}`} src={partner.image} alt={partner.name} className='h-8 mx-6 object-contain min-w-[120px] hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-100'/>
                ))
            }
        </div>
    </div>
  )
}

export default Partners