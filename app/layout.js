import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("@/app/wrapper/page"));

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ashwarin Plus Powder",
  description: "Ashwarin Plus Powder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href={
          "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/14186d5e-3fb4-4916-8804-faaa616ac000/public"
        }
      />

      <input type="hidden" value="arayurveda.shop" id="sellerDomain" />

      <script
        src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
        defer
      ></script>

      <link
        rel="stylesheet"
        href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
      ></link>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-S921CSTRWX`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S921CSTRWX');
                `}
      </Script>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-N94DSYJV7B`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N94DSYJV7B');
                `}
      </Script>

      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-745078872/usbqCIqZ6vwZENiApOMC',
                'transaction_id': '',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>

      <Script strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T3BJKHSW');`}
      </Script>

      <body className={inter.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T3BJKHSW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>

        <GlobalContextProvider>
          <Wrapper>{children}</Wrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
