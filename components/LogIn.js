import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import contactPic from "../public/image1/image00006.jpeg";

const LogIn = () => {
  return (
    <div className="min-h-full flex mt-24 bg-gray-100">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-bobred">
              Sign in to your account
            </h2>
            {/* <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p> */}
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-bobblue">Sign in with</p>

                <div className="mt-1 grid grid-cols-2 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-2xl font-medium text-gray-500 hover:text-bobblue hover:opacity-90"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <FaFacebook />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-2xl font-medium text-gray-500 hover:text-bobblue hover:opacity-90"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <FaGoogle />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-boblue"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bobred focus:border-bobred sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bobred hover:bg-bobblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1 h-contactpic">
        <Image layout="fill" objectFit="cover" src={contactPic} alt="" />
      </div>
    </div>
  );
};

export default LogIn;
