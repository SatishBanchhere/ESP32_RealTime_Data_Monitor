import Head from "next/head"
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <Head>
                <title>Real-time ESP32 Data Monitor</title>
                <meta
                    name="description"
                    content="View and analyze data from your ESP32 device using Firebase Realtime Database"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="text-center">
                <h1 className="text-5xl font-extrabold mb-4">Real-time ESP32 Data Monitor</h1>
                <p className="text-xl font-light mb-8">
                    View and analyze data from your ESP32 device using Firebase Realtime Database
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                    <Link
                        href="/table"
                        className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        View Data Table
                    </Link>
                    <Link
                        href="/graph"
                        className="bg-white text-purple-600 hover:bg-purple-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        View Data Graph
                    </Link>
                </div>
            </main>
        </div>
    )
}

