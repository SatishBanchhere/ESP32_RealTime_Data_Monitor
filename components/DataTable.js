import { Trash2 } from "lucide-react"

const DataTable = ({ data, onDeleteEntry }) => {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <table className="w-full bg-white">
                <thead>
                <tr>
                    <th className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-900">Timestamp</th>
                    <th className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-900">Touch Value</th>
                    <th className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                    <tr key={item.key} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900">{item.timestamp}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.touchvalue}</td>
                        <td className="px-6 py-4 text-sm">
                            <button
                                onClick={() => onDeleteEntry(item.key)}
                                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable

