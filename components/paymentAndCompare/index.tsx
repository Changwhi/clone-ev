import React from 'react'
import Image from 'next/image'

interface BodyType {
  name: string
  icon: string
}

interface CarMake {
  name: string
  logo: string
}

const bodyTypes: BodyType[] = [
  { name: 'Sedan', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
  { name: 'SUVs', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
  { name: 'Hatchbacks', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
  { name: 'Mini van', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
  { name: 'Wagon', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
  { name: 'Trucks', icon: 'M3,18 L1,18 L1,15 C1,13.8954305 1.8954305,13 3,13 L5,13 L5,15 L3,15 L3,18 Z M21,18 L19,18 L19,15 L17,15 L17,13 L19,13 C20.1045695,13 21,13.8954305 21,15 L21,18 Z M5,18 L17,18 L17,15 L5,15 L5,18 Z M3,12 L19,12 C20.1045695,12 21,11.1045695 21,10 L21,7 C21,5.8954305 20.1045695,5 19,5 L3,5 C1.8954305,5 1,5.8954305 1,7 L1,10 C1,11.1045695 1.8954305,12 3,12 Z' },
]

const carMakes: CarMake[] = [
  { name: 'Tesla', logo: '/tesla-logo.svg' },
  { name: 'Chevrolet', logo: '/chevrolet-logo.svg' },
  { name: 'Kia', logo: '/kia-logo.svg' },
  { name: 'Ford', logo: '/ford-logo.svg' },
  { name: 'Hyundai', logo: '/hyundai-logo.svg' },
  { name: 'Rivian', logo: '/rivian-logo.svg' },
]

export default function ShopCategories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 px-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by body type</h2>
        <div className="flex flex-row justify-center gap-14">
          {bodyTypes.map((type) => (
            <div key={type.name} className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-gray-600"
                >
                  <path d={type.icon} />
                </svg>
              </div>
              <span className="text-sm text-center">{type.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Popular makes</h2>
        <div className="flex flex-row justify-center gap-14">
          {carMakes.map((make) => (
            <div key={make.name} className="flex flex-col items-center">
              <div className="w-16 h-16 mb-2 flex items-center justify-center bg-white rounded-full shadow">
                <Image
                  src={make.logo}
                  alt={`${make.name} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">{make.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View all makes
          </button>
        </div>
      </section>
    </div>
  )
}