export const metadata = {
  title: 'Sabri Medical Store - A Tribute',
  description: 'Celebrating the dedication and service of Sabri Medical Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
