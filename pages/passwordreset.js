export default function PasswordReset() {
  return (
    <div
      className="h-screen bg-cover bg-top sm:bg-top flex items-center"
      style={{
        backgroundImage: 'url("image2/image00005.jpeg")',
      }}
    >
      <div className="max-w-fit bg-white rounded-md mx-auto px-12 py-16 text-center">
        {/* <p className="text-sm font-semibold text-black uppercase tracking-wide">
          404 error
        </p> */}
        <h1 className="mt-2 text-3xl font-extrabold text-bobred tracking-tight sm:text-5xl">
          Forgot your password?
        </h1>
        <p className="mt-2 text-xl font-large text-black">
          Add your email to reset.
        </p>
        <div className="mt-6">
          <form action="#" method="POST" className="grid gap-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bobred focus:border-bobred border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-bobred hover:bg-bobblue focus:outline-none"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
