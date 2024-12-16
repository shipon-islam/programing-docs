import Image from "next/image";

function Home() {
  return (
    <main>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              LWS is a programing learing platform.
              <br className="hidden lg:inline-block" />
              everything clearify here
            </h1>
            <p className="mb-8 leading-relaxed">
              In this modern world, technology is sofisticated day by day.so we
              need to know programing. javascript and python world most popular
              because of easy and human friendly.everything you can do with
              these. this platform teach you python and javascript.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Join
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/hero2.jpg"
              width={780}
              height={460}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
