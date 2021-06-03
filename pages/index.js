import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black"
      style={{
        'background-image': 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/netfilx-bg.jpg)'
      }}
    >
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
        <h1 className="text-5xl font-bold text-white max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl text-white my-4 mb-8">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-white text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex mt-4">
          <input type="text" placeholder="Email address" className="bg-white p-5 min-w-[500px]" />
          <button className="flex items-center bg-[#e50914] 00 text-white text-3xl px-8 py-5 gap-2">
            Get Started
            <svg classNames="w-5" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
