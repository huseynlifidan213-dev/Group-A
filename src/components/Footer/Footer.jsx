import React from 'react'

// Şəkillərin adlarına uyğun bu importları aç:
 import QR from '../../assets/Qr Code.png'
import GooglePlay from '../../assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
 import AppStore from '../../assets/download-appstore.png'

const Footer = () => {
  // Import etdikdən sonra '' yerinə dəyişənləri yaz:
  const qrImage = QR
  const googlePlayImage = GooglePlay
  const appStoreImage = AppStore

  const accountLinks = [
    { title: 'My Account', href: '/account' },
    { title: 'Login / Register', href: '/login' },
    { title: 'Cart', href: '/cart' },
    { title: 'Wishlist', href: '/wishlist' },
    { title: 'Shop', href: '/shop' },
  ]

  const quickLinks = [
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms Of Use', href: '/terms' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <div className="w-full bg-black text-white">
      <div className="px-[6%] pb-14 pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_0.85fr_0.8fr_1fr] lg:gap-8">
          <div>
            <h2 className="text-2xl font-bold">
              Exclusive
            </h2>

            <h3 className="mt-5 text-xl font-medium">
              Subscribe
            </h3>

            <p className="mt-6 text-sm">
              Get 10% off your first order
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-4 flex w-full max-w-[220px] items-center rounded border border-white"
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0 cursor-pointer p-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="m21 3-7 18-4-7-7-4L21 3Z" />
                  <path d="m10 14 11-11" />
                </svg>
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Support
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4 text-sm leading-6">
              <p>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>

              <a
                href="mailto:exclusive@gmail.com"
                className="break-all hover:underline"
              >
                exclusive@gmail.com
              </a>

              <a
                href="tel:+88015888889999"
                className="hover:underline"
              >
                +88015-88888-9999
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Account
            </h3>

            <nav
              aria-label="Account links"
              className="mt-6 flex flex-col items-start gap-4 text-sm"
            >
              {accountLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="transition hover:text-gray-300"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Quick Link
            </h3>

            <nav
              aria-label="Quick links"
              className="mt-6 flex flex-col items-start gap-4 text-sm"
            >
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="transition hover:text-gray-300"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Download App
            </h3>

            <p className="mt-6 text-xs text-gray-400">
              Save $3 with App New User Only
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-white p-1">
                {qrImage ? (
                  <img
                    src={qrImage}
                    alt="Download app QR code"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-black">
                    QR şəkli
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-9 w-[110px] items-center justify-center overflow-hidden rounded border border-gray-500">
                  {googlePlayImage ? (
                    <img
                      src={googlePlayImage}
                      alt="Get it on Google Play"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs">
                      Google Play
                    </span>
                  )}
                </div>

                <div className="flex h-9 w-[110px] items-center justify-center overflow-hidden rounded border border-gray-500">
                  {appStoreImage ? (
                    <img
                      src={appStoreImage}
                      alt="Download on the App Store"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs">
                      App Store
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <span role="img" aria-label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M14 21v-9h3l.5-4H14V6c0-1 .3-2 2-2h2V1h-3c-3 0-5 2-5 5v2H7v4h3v9" />
                </svg>
              </span>

              <span role="img" aria-label="Twitter">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M22 5.9a8.3 8.3 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 2.8 4.7a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5 4.2 4.2 0 0 0 3.4 4.2 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 2 18.6a12 12 0 0 0 18.4-10.1A8.6 8.6 0 0 0 22 5.9Z" />
                </svg>
              </span>

              <span role="img" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>

              <span role="img" aria-label="LinkedIn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M5 9v12M10 21V9h4v2c1-3 6-3 6 2v8" />
                  <circle
                    cx="5"
                    cy="4"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/25">
        © Copyright Rimel 2022. All right reserved
      </div>
    </div>
  )
}

export default Footer