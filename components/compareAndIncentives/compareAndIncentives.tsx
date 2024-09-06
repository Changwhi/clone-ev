import Image from 'next/image'
import Link from 'next/link'

export default function CompareAndIncentives() {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4">
      <div className="bg-sky-50 rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Compare EVS</h2>
          <h3 className="text-3xl font-bold mb-4">Compare the latest makes and models quickly and easy</h3>
          <p className="mb-6">We&apos;ll help you make the best decision.</p>
          <Link 
            href="/get-started" 
            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Get started
          </Link>
        </div>
        <div className="mt-8 relative h-40">
          <Image
            src="/placeholder.svg?height=160&width=320"
            alt="Electric vehicles comparison"
            layout="fill"
            objectFit="contain"
            className="object-left"
          />
        </div>
      </div>
      <div className="bg-blue-600 rounded-lg p-6 flex flex-col justify-between text-white">
        <div>
          <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Incentives
          </span>
          <h3 className="text-3xl font-bold mb-4">Save up to $7,500 or more with qualifying incentives</h3>
          <p className="mb-6">We&apos;ll help you navigate federal incentives to maximize your savings.</p>
          <Link 
            href="/search-evs" 
            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Search EVs
          </Link>
        </div>
        <div className="mt-8 flex justify-end">
          <div className="bg-teal-400 rounded-full p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-bold">$</span>
          </div>
        </div>
      </div>
    </div>
  )
}