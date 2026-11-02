
const Contact = () => {
   return (


      <>

         <section className="px-4 md:px-8 mt-16 mb-24">
            <div className="max-w-5xl mx-auto">

               {/* Breadcrumb */}
               <h2 className="text-10 mb-8">
                  <span className="text-gray-400 font-[Arial]">Home / </span>
                  Contact
               </h2>

               {/* Main Content */}
               <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-12">

                  {/* Left Side */}
                  <div className="shadow-md rounded-md px-5 py-8">

                     {/* Call To Us */}
                     <div className="flex gap-4 items-center mb-6">
                        <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
                           </svg>
                        </div>

                        <h3 className="text-lg font-semibold font-[Arial]">Call To Us</h3>
                     </div>

                     <p className="text-sm mb-3 font-[Arial]">
                     We are available 24/7, 7 days a week.
                     </p>

                     <p className="text-sm mb-6 font-[Arial]">
                        Phone: +8801611112222
                     </p>

                     <hr className="border-gray-300 my-7" />

                     {/* Write To Us */}
                     <div className="flex gap-4 items-center mb-5">
                        <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <rect x="2" y="4" width="20" height="16" rx="2" />
                              <path d="m22 7-10 6L2 7" />
                           </svg>
                        </div>

                        <h3 className="text-lg font-semibold font-[Arial]">Write To Us</h3>
                     </div>

                     <p className="text-sm mb-4 font-[Arial]">
                        Fill out our form and we will contact you within 24 hours.
                     </p>

                     <p className="text-sm mb-3 font-[Arial]">
                        Emails: customer@exclusive.com
                     </p>

                     <p className="text-sm font-[Arial]">
                        Emails: support@exclusive.com
                     </p>

                  </div>

                  {/* Right Side - Form */}
                  <div className="shadow-md rounded-md p-6 md:p-8 font-[Arial]">

                     <form className="grid grid-cols-1 md:grid-cols-3 gap-4 font-[Arial]">

                        <input
                           type="text"
                           placeholder="Your Name *"
                           className="bg-gray-100 px-4 py-3 rounded outline-none w-full font-[Arial]"
                        />

                        <input
                           type="email"
                           placeholder="Your Email *"
                           className="bg-gray-100 px-4 py-3 rounded outline-none w-full font-[Arial]"
                        />

                        <input
                           type="tel"
                           placeholder="Your Phone *"
                           className="bg-gray-100 px-4 py-3 rounded outline-none w-full font-[Arial]"
                        />

                     </form>

                     <textarea
                        placeholder="Your Message"
                        rows="8"
                        className="bg-gray-100 w-full mt-5 p-4 rounded outline-none resize-none font-[Arial]"
                     />

                     <div className="flex justify-end mt-5 font-[Arial]">
                        <button
                           type="submit"
                           className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded font-medium font-[Arial]"
                        >
                           Send Massage
                        </button>
                     </div>

                  </div>

               </div>
            </div>
         </section>


      </>
   )
}

export default Contact