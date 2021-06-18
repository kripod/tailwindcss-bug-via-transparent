import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-6 flex space-x-4">
      <div className="w-24 h-24 bg-gradient-to-t from-blue-400 via-transparent" />
      <div className="w-24 h-24 bg-gradient-to-t from-blue-400 via-transparent-fixed" />
    </div>
  )
}
