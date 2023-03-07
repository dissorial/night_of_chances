import Image from 'next/image'
import erste from '@/images/sponsors/erste.png'
import eset from '@/images/sponsors/eset.png'
import ibl from '@/images/sponsors/ibl.png'
import telekom from '@/images/sponsors/telekom.png'
import exxeta from '@/images/sponsors/exxeta.png'
import orange_logo from '@/images/sponsors/orange_logo.png'
import synpulse from '@/images/sponsors/synpulse.png'
import tatra_banka from '@/images/sponsors/tatra_banka.png'
import pretlak from '@/images/sponsors/pretlak.png'

const people = [
  {
    name: 'Generálny partner',
    imageUrl: erste,
  },
  {
    name: 'Generálny partner',
    imageUrl: eset,
  },
  {
    name: 'Generálny partner',
    imageUrl: ibl,
  },
  {
    name: 'Generálny partner',
    imageUrl: telekom,
  },
  {
    name: 'Hlavný partner',
    imageUrl: orange_logo,
  },
  {
    name: 'Hlavný partner',
    imageUrl: exxeta,
  },
  {
    name: 'Hlavný partner',
    imageUrl: synpulse,
  },
  {
    name: 'Hlavný partner',
    imageUrl: tatra_banka,
  },
  {
    name: 'Komunitný partner',
    imageUrl: pretlak,
  },
]

export function Sponsors() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Partneri
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tvojimi lektormi budú profesionáli z najlepších firiem.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-20 object-scale-down"
                src={person.imageUrl}
                alt=""
                width={224}
                height={224}
              />
              <h3 className="mt-4 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
