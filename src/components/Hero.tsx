import bannerImg from '../assets/banner-stack.png';

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[530px] max-w-7xl items-center px-6 py-16">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">

          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />

            <span className="whitespace-nowrap bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Explore modern frontend, backend, database and development
            technologies. Choose the tools that fit your project and
            create your perfect development stack.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-medium text-white shadow-lg transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center">
          <img src={bannerImg} alt="Development Stack Banner" />
        </div>

      </div>
    </section>
  );
}

export default Hero;