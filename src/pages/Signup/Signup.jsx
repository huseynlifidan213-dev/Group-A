import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import img from "./img.png";


const Signup = () => {
  const [page, setPage] = useState("signup");

  return (
    <section className="bg-white min-h-screen border-b-8 border-red-600">
      <div className="grid md:grid-cols-2 items-center w-full min-h-screen">

        {/* SOL TƏRƏF - ŞƏKİL */}
        <div className="h-full flex items-center justify-center  p-4">
          <img
            src={img}
            alt="Shopping"
            className="lg:max-w-300 w-full h-full aspect-square object-contain block mx-auto -ml-8"
          />
        </div>

        {/* SAĞ TƏRƏF */}
        <div className="flex items-center justify-center px-4 py-12 w-full ">
          <div className="max-w-md mx-auto w-full">

            {page === "signup" ? (
              <>
                <div className="mb-10">
                  <h1 className="text-slate-900 text-5xl font-[Arial]">
                    Create an account
                  </h1>

                  <p className="text-slate-900 text-sm mt-4 font-[Arial]">
                    Enter your details below
                  </p>
                </div>

                <form className="space-y-6 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="py-2.5 text-slate-900 bg-white w-full border-b outline-offset-1 font-[Arial]"
                  />

                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    required
                    className="py-2.5 text-slate-900 bg-white w-full border-b outline-offset-1 font-[Arial]"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="py-2.5 text-slate-900 bg-white w-full border-b outline-offset-1 font-[Arial]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide bg-red-600 text-white hover:bg-red-700"
                  >
                    Create Account
                  </button>

                  <button
                    type="button"
                    className="flex gap-3 items-center justify-center w-full py-3 px-3.5 text-sm rounded-md font-semibold border"
                  >
                    <FcGoogle size={24} />
                    Sign up with Google
                  </button>
                </form>

                <div className="mt-6 text-slate-900 text-sm text-center">
                  Already have an account?
                  <span
                    onClick={() => setPage("login")}
                    className="text-blue-700 hover:underline ml-1 font-medium cursor-pointer font-[Arial]"
                  >
                    Log in
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="mb-10">
                  <h1 className="text-slate-900 text-4xl font-semibold font-[Arial]">
                    Log in to Exclusive
                  </h1>

                  <p className="text-slate-900 text-sm mt-5 font-[Arial]">
                    Enter your details below
                  </p>
                </div>

                <form className="space-y-7 w-full">
                  <input
                    type="text"
                    placeholder="Email or Phone Number"
                    required
                    className="py-2.5 text-slate-900 bg-white w-full border-b outline-offset-1 font-[Arial]"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="py-2.5 text-slate-900 bg-white w-full border-b outline-offset-1 font-[Arial]"
                  />

                  <div className="flex items-center justify-between gap-4 font-[Arial]">
                    <button
                      type="submit"
                      className="bg-red-600 text-white py-3 px-8 rounded-md hover:bg-red-700"
                    >
                      Log In
                    </button>
                    <span>
                    <button
                      onClick={() => setPage("signup")}
                      type="button"
                      className="text-red-500 hover:underline"
                    >
                      Forget Password?
                    </button>
                  </span>
                </div>
              </form>

            <div className="mt-8 text-slate-900 text-sm text-center">

              <span
                className="text-blue-700 hover:underline ml-1 font-medium cursor-pointer"
              >
              </span>
            </div>
          </>
            )}

        </div>
      </div>
    </div>
    </section >
  );
};

export default Signup;