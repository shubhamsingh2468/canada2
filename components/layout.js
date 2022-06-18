import Hero from 'component/hero'
export default function RootLayout({ children }) {
    return (
      <html>
        <body>
            <RootLayout>
          <Hero />
          {children}
          <Footer />
          </RootLayout>
        </body>
      </html>
    )
  }