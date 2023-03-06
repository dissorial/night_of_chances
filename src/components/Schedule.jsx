import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'April 4',
    dateTime: '2022-04-04',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'ESET',
        description: 'Kontainery v cloude',
        start: '18:10',
        end: '',
      },
      {
        name: 'IBL Soft',
        description: 'Web appka za hodinu?',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Slovak Telekom',
        description: 'Machine learning pomocou PySpark',
        start: '11:00AM',
        end: '12:00PM',
      },

      {
        name: 'ERSTE Digital',
        description: 'Testing React app, a pyramid to climb',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Tatra Banka',
        description: 'Venture sprint: Hustle and launch',
        start: '2:00PM',
        end: '3:00PM',
      },
    ],
  },
  {
    date: 'April 5',
    dateTime: '2022-04-05',
    summary:
      'Next we spend the day talking about deceiving people with technology.',
    timeSlots: [
      {
        name: 'EXXETA',
        description: 'Základná zručnosť vývojára',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'ACCENTURE',
        description: 'Budúcnosť vo virtuálnej realite',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'RPC',
        description: 'Automatizované testovanie',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'IBL Soft',
        description: 'Vyrob si meteostanicu za hodinu',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'ERSTE Digital',
        description: 'Postavte si CI/CD toolchain za babku',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
  {
    date: 'April 6',
    dateTime: '2022-04-06',
    summary:
      'We close out the event previewing new techniques that are still in development.',
    timeSlots: [
      {
        name: 'Orange',
        description: 'Aplikácií nie je nikdy dosť',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Slovak Telekom',
        description: 'Navrhni bezpečnú sieť pre modernú firmu',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'UNICORN',
        description: 'Ako sa hackujú banky?',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'FPT',
        description: 'Inteligentná domácnosť za 60 minút?',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'ERNI',
        description: 'Moderné .NET frontendové technológie',
        start: '3:00PM',
        end: '4:00PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-teal-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-teal-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-teal-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-6 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-teal-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-teal-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
          <button
            type="button"
            className="mt-4  rounded bg-teal-600 py-1 px-2 text-xs font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Viac info
          </button>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-teal-600 sm:text-5xl">
            Our three day schedule is jam-packed with brilliant, creative, evil
            geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-teal-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
