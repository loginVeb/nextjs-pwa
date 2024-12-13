export default function Home() {
  return (
    <>
      <div>
        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
            bySMA NextJs PWA App
          </h2>
          <p className="mb-12 text-lg text-gray-500">
            This is a sample PWA App bySMA
          </p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Next.JS PWA App Development
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A PWA App is a light weight app, that will run in browser
                      as well as in standalone mode
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Standard look and feel
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      A PWA app provides a native ui look and feel, and user can
                      use outside of the web browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Caching
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      PWA App support caching
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Offlin Mode
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Offline mode can be supported in PWA Apps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <a href="https://sma.im" target="_blank">
                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                          Learn more
                        </h3>
                      </a>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Please visit{" "}
                      <a href="https://sma.im" target="_blank">
                        SMA.im
                      </a>{" "}
                      for more usefull information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
