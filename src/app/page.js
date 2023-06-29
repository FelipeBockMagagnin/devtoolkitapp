import React from "react"
import Title from "@/components/Title"
import Script from 'next/script'

export default function Home() {
  return (
    <div>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SFFSZM7F21" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Title><div className="text-center">Dev Toolkit</div></Title>

      <div className="mb-2 text-center text-gray-500 dark:text-gray-400">
        Every tool you need in one place
      </div>

      <div className="mb-2 text-center text-gray-500 dark:text-gray-400">
        Stay tunned
      </div>
    </div>
  )
}
