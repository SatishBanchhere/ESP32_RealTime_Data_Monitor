import React from "react"
import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const DataGraph = ({ data, onDeleteEntry }) => {
    const chartData = {
        labels: data.map((item) => item.timestamp),
        datasets: [
            {
                label: "Touch Value",
                data: data.map((item) => item.touchvalue),
                borderColor: "rgb(147, 51, 234)",
                backgroundColor: "rgba(147, 51, 234, 0.2)",
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            tooltip: {
                enabled: true,
                mode: "index",
                intersect: false,
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || ""
                        if (label) {
                            label += ": "
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y
                        }
                        return label
                    },
                    afterBody: () => "Click to delete",
                },
                padding: 12,
                titleFont: {
                    size: 14,
                    weight: "bold",
                },
                bodyFont: {
                    size: 13,
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                bodyColor: "#fff",
                titleColor: "#fff",
                displayColors: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        onHover: (event, chartElement) => {
            event.native.target.style.cursor = chartElement[0] ? "pointer" : "default"
        },
        onClick: (event, elements, chart) => {
            if (elements.length > 0) {
                const index = elements[0].index
                onDeleteEntry(data[index].key)
            }
        },
    }

    return (
        <div className="w-full h-[600px] bg-white p-4 rounded-lg">
            <Line data={chartData} options={options} />
        </div>
    )
}

export default DataGraph

