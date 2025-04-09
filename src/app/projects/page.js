import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden text-white bg-black">
      <Navbar />
      <div className="flex items-center justify-center flex-grow w-full">
        <div className="container px-6 mx-auto">
         

          <div className="grid grid-cols-1 gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 pb-4 max-h-[70vh]">
            {/* LifeLink */}
            <div className="p-4 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-xl font-bold text-amber-500">LifeLink</h2>
              <p className="mb-3 text-sm">
                Hospital management system with session-based authentication using cookies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">React JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Node JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Express JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">MongoDB</span>
              </div>
            </div>

            {/* CelebFindr */}
            <div className="p-4 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-xl font-bold text-amber-500">CelebFindr</h2>
              <p className="mb-3 text-sm">
                Celebrity detection website powered by TensorFlow and Flask.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">React JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Flask</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">TensorFlow</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">OpenCV</span>
              </div>
            </div>

            {/* PlayTube */}
            <div className="p-4 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-xl font-bold text-amber-500">PlayTube</h2>
              <p className="mb-3 text-sm">
                A YouTube clone leveraging the YouTube API, allowing users to search and watch videos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">React JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">JavaScript</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Tailwind CSS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">API</span>
              </div>
            </div>

            {/* Konvo */}
            <div className="p-4 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-xl font-bold text-amber-500">Konvo</h2>
              <p className="mb-3 text-sm">
                Real-time messaging app with an AI chatbot, built with React Native and Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">React Native</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Node JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Express JS</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">MongoDB</span>
              </div>
            </div>

            {/* Zylo */}
            <div className="p-4 transition-all border border-gray-800 rounded-lg hover:border-amber-500">
              <h2 className="mb-2 text-xl font-bold text-amber-500">Zylo</h2>
              <p className="mb-3 text-sm">
                Public tweeting app using React Native and Supabase, allowing users to post and like tweets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">React Native</span>
                <span className="px-2 py-1 text-xs bg-gray-800 rounded-md">Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page