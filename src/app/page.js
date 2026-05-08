import Navbar from '@/components/Navbar'

const Page = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ color: 'var(--fg)', background: 'var(--bg)' }}>
      <Navbar />
      <div className="flex items-center justify-center flex-grow w-full">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:text-left lg:gap-20 lg:items-center lg:px-[15%]">

            <div className="flex-1 fade-up fade-up-1">
              <h1 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
                Hello<span style={{ color: 'var(--accent)' }}>.</span>
                <br />
                I am
                <br />
                Jefin
              </h1>
            </div>

            <div className="flex-1 fade-up fade-up-2">
              <div className="text-xl font-semibold space-y-1" style={{ color: 'var(--accent)' }}>
                <p>Full Stack Developer</p>
                <p>ML Enthusiast</p>
                <p>Future SDE</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
