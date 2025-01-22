import Link from "next/link"
import { ArrowLeft, BarChart2, Table } from "lucide-react"

export default function Navigation({ currentPage }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
            </Link>
            <Link
                href={currentPage === "table" ? "/graph" : "/table"}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
                {currentPage === "table" ? (
                    <>
                        <BarChart2 className="w-5 h-5" />
                        <span>View Graph</span>
                    </>
                ) : (
                    <>
                        <Table className="w-5 h-5" />
                        <span>View Table</span>
                    </>
                )}
            </Link>
        </div>
    )
}

