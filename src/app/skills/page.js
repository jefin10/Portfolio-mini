import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden text-white bg-black">
      <Navbar />
      <div className="flex items-center justify-center flex-grow w-full">
        <div className="container px-6 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Programming Languages */}
            <div className="p-3 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-lg font-bold text-amber-500">Programming Languages</h2>
              <ul className="space-y-1 text-sm">
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
                <li>C</li>
                <li>Java</li>
                <li>PHP</li>
              </ul>
            </div>

            {/* Web Development */}
            <div className="p-3 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-lg font-bold text-amber-500">Web Development</h2>
              <ul className="space-y-1 text-sm">
                <li>React JS</li>
                <li>Next.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind</li>
                <li>Node JS</li>
                <li>Express JS</li>
              </ul>
            </div>

            {/* Machine Learning */}
            <div className="p-3 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-lg font-bold text-amber-500">Machine Learning</h2>
              <ul className="space-y-1 text-sm">
                <li>Scikit-Learn</li>
                <li>NumPy</li>
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>Pandas</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="p-3 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-lg font-bold text-amber-500">Tools & Technologies</h2>
              <ul className="space-y-1 text-sm">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Linux</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="p-3 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-lg font-bold text-amber-500">Databases</h2>
              <ul className="space-y-1 text-sm">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page