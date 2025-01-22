"use client"

import React, { useEffect, useState } from "react"
import { ref, onValue, remove } from "firebase/database"
import database from "@/firebase/firebaseConfig"
import DataTable from "@/components/DataTable"
import Navigation from "@/components/Navigation"
import { Trash } from "lucide-react"

const TablePage = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const dbRef = ref(database, "UsersData/YourID/readings")
        let unsubscribe

        if (!isPaused) {
            unsubscribe = onValue(dbRef, (snapshot) => {
                const fetchedData = snapshot.val()
                if (fetchedData) {
                    const formattedData = Object.entries(fetchedData).map(([key, value]) => ({
                        key: key,
                        timestamp: new Date(Number.parseInt(key)).toLocaleString(),
                        touchvalue: value.touchvalue,
                    }))
                    setData(formattedData)
                } else {
                    setData([])
                }
                setIsLoading(false)
            })
        }

        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [isPaused])

    const deleteEntry = (key) => {
        const entryRef = ref(database, `UsersData/YourID/readings/${key}`)
        remove(entryRef).then(() => {
            setData((prevData) => prevData.filter((item) => item.key !== key))
        })
    }

    const deleteAll = () => {
        const dbRef = ref(database, "UsersData/YourID/readings")
        remove(dbRef).then(() => {
            setData([])
        })
    }

    const togglePause = () => {
        setIsPaused((prev) => !prev)
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <Navigation currentPage="table" />

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Table View</h1>
                        <button
                            onClick={togglePause}
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-2"
                        >
                            <span>{isPaused ? "Resume" : "Pause"}</span>
                        </button>
                        {data.length > 0 && (
                            <button
                                onClick={deleteAll}
                                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                <Trash className="w-5 h-5" />
                                <span>Delete All</span>
                            </button>
                        )}
                    </div>

                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading data...</p>
                        </div>
                    ) : data.length > 0 ? (
                        <DataTable data={data} onDeleteEntry={deleteEntry} />
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                            <p className="text-gray-600">No data available</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Data will appear here once your ESP32 starts sending readings
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TablePage

