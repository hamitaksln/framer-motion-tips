import { cn } from '../../lib/utils'
import { AnimatedTexts } from './animated-texts'

const Divider = ({ className }: { className?: string }) => {
  return <hr className={cn('mx-[-100%]', className)} role="separator" />
}

const PreviewButton = () => {
  return (
    <button className="bg-white text-[#5C5C5C] px-3 py-2 rounded-md drop-shadow-sm ring-1 ring-slate-200 text-sm flex gap-3 items-center font-[500]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1.2 1.8"
        width={10}
        height={14.997}
      >
        <path
          d="M0.3 1.8a0.3 0.3 0 0 0 0.3 -0.3v-0.3H0.3a0.3 0.3 0 0 0 0 0.6z"
          style={{
            fill: '#0acf83',
          }}
        />
        <path
          d="M0 0.9a0.3 0.3 0 0 1 0.3 -0.3h0.3v0.6H0.3a0.3 0.3 0 0 1 -0.3 -0.3z"
          style={{
            fill: '#a259ff',
          }}
        />
        <path
          d="M0 0.3A0.3 0.3 0 0 1 0.3 0h0.3v0.6H0.3A0.3 0.3 0 0 1 0 0.3z"
          style={{
            fill: '#f24e1e',
          }}
        />
        <path
          d="M0.6 0h0.3a0.3 0.3 0 0 1 0 0.6h-0.3V0z"
          style={{
            fill: '#ff7262',
          }}
        />
        <path
          d="M1.2 0.9a0.3 0.3 0 1 1 -0.6 0 0.3 0.3 0 0 1 0.6 0z"
          style={{
            fill: '#1abcfe',
          }}
        />
      </svg>
      Preview
    </button>
  )
}

const BuyButton = () => {
  return (
    <button className="bg-[#f65428] text-neutral-50 px-3 py-2 rounded-md drop-shadow-sm ring-1 ring-slate-200 text-sm flex gap-3 items-center font-[500]">
      Buy now
      <span>{'>'}</span>
    </button>
  )
}

const Header = () => {
  const navs = [
    'Components',
    'FAQs',
    'Pricing',
    'About',
    'Updates',
    'Blog',
    'Contact',
  ]
  return (
    <div className="flex w-full items-center justify-between px-8 ">
      <div className="flex gap-6 items-center">
        <div className="w-8 h-8 rounded-full ring-1 ring-[#EBEBEB] shadow-md flex items-center justify-center font-semibold">
          F
        </div>
        <div className="flex gap-7 text-[#5c5c5c] text-sm">
          {navs.map(nav => (
            <div key={nav}>{nav}</div>
          ))}
        </div>
      </div>
      <PreviewButton />
    </div>
  )
}

const Hero = () => {
  return (
    <div className="px-8 py-6 flex justify-between items-end">
      <div className="space-y-4 shrink-0">
        <div className="bg-neutral-50 border inline-block py-1 px-2 rounded-lg">
          <span className="text-sm font-[500] text-neutral-500">
            Framer Motion ・ Tips
          </span>
        </div>
        <AnimatedTexts />
      </div>
      <div className="max-w-72 space-y-6">
        <p className="text-neutral-500">
          Explore 5900+ components, unique widgets, dashboards, and others with
          a lightning-fast experience on Figma.
        </p>
        <div className="flex gap-3">
          <PreviewButton />
          <BuyButton />
        </div>
      </div>
    </div>
  )
}

export const StaggeredTextAnimation = () => {
  return (
    <main className="w-full min-h-screen overflow-hidden py-6 bg-[#FAF8F3] text-[#272727] flex justify-center">
      <div className="w-full max-w-5xl relative space-y-6">
        <Header />
        <Divider />
        <Hero />
        <Divider />
      </div>
    </main>
  )
}
