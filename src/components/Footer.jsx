import { Container } from '@/components/Container'
import Image from 'next/image'
import nocLogo from '@/images/nocLogo.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image
          src={nocLogo}
          alt="NOC logo"
          width={200}
          height={200}
          className="h-12 w-auto text-slate-900"
        />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Nexteria. All rights
          reserved.
        </p>
      </Container>
    </footer>
  )
}
