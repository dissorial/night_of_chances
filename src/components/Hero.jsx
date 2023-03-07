import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/noc.png'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-teal-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-teal-600 sm:text-7xl">
            <span className="sr-only">NoC - </span>Poď na IT podujatie roka.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-teal-900">
            <p>
              Night of Chances (skrátene NoC) je celovečerný
              kariérno-networkovací event plný eticky korektných firiem, v
              ktorých proste chceš pracovať!
            </p>
            <p>
              Posuň svoju kariéru rýchlym tempom a získaj nové zručnosti na
              workshopoch, prednáškach a pri neformálnych rozhovoroch s
              odborníkmi.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Top IT firiem', '22'],
              ['Workshopov', '26'],
              ['Panelové diskusie', '2'],
              ['Speed dating-ov', '8'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="text-md font-mono text-teal-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-teal-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
