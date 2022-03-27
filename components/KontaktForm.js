const KontaktForm = () => {
  return (
    <div className="bg-white rounded-md -translate-y-24 lg:shadow-xl hover:lg:shadow-2xl py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form action="#" method="POST" className="grid gap-y-6">
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bobred focus:border-bobred border-gray-300 rounded-md"
              placeholder="Full name"
            />
          </div>
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
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bobred focus:border-bobred border-gray-300 rounded-md"
              placeholder="Phone +36701234567"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-bobred focus:border-bobred border border-gray-300 rounded-md"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-bobred hover:bg-bobblue focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KontaktForm;
