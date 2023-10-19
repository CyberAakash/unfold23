// import './globals.css'
// import { Providers } from "./Providers";

export const metadata = {
  title: 'Store Data in Wallet',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
