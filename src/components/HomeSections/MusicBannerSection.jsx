import React, { useState, useEffect } from 'react'
import jblImg from '../../assets/jbl-boombox.png'

const MusicBannerSection = () => {
  const [timeLeft, setTimeLeft] = useState(
    5 * 86400 + 23 * 3600 + 59 * 60 + 35
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const days = Math.floor(timeLeft / 86400)
  const hours = Math.floor((timeLeft % 86400) / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatNumber = (num) => String(num).padStart(2, '0')

  const timerItems = [
    { value: formatNumber(hours), label: 'Hours' },
    { value: formatNumber(days), label: 'Days' },
    { value: formatNumber(minutes), label: 'Minutes' },
    { value: formatNumber(seconds), label: 'Seconds' },
  ]

  return (
    <section className="w-full flex justify-center py-10 md:py-16">
      <div className="w-[82%] bg-black text-white p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden rounded-[2px]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[500px] h-[300px] sm:h-[450px] lg:h-[500px] bg-white/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col z-10 w-full md:w-[50%] items-start">
          <span className="text-[#00FF66] font-semibold text-sm sm:text-base">
            Categories
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white mt-4 sm:mt-7 leading-tight max-w-[440px]">
            Enhance Your Music Experience
          </h2>

          <div className="flex items-center gap-3 sm:gap-6 mt-6 sm:mt-9 mb-8 sm:mb-10 flex-wrap">
            {timerItems.map((item, index) => (
              <div
                key={index}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex flex-col items-center justify-center text-black select-none shadow"
              >
                <span className="font-bold text-sm sm:text-base leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="bg-[#00FF66] hover:bg-[#00e65c] text-white font-medium text-sm sm:text-base px-10 sm:px-12 py-3.5 sm:py-4 rounded-[4px] transition cursor-pointer shadow-md"
          >
            Buy Now!
          </button>
        </div>

        <div className="w-full md:w-[50%] flex items-center justify-center relative z-10 mt-8 md:mt-0">
          <img
            src={jblImg}
            alt="JBL Boombox"
            className="w-full max-w-[560px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>
    </section>
  )
}

export default MusicBannerSection