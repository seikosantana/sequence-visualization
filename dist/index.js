// import { Chart } from "./chart.js";
import "./chart.js";
let canvas = document.querySelector("#forChart");
// let context = canvas.getContext("2d");
let chart = new Chart(canvas, {
    type: "line",
    data: {
        labels: [
            "L", "Z"
        ],
        datasets: [
            {
                data: [
                    { x: 0, y: 3 },
                    { x: 1, y: 5 },
                    { x: 2, y: 6 },
                    { x: 3, y: 4 },
                ],
                borderColor: "#ffccce",
                label: "Input"
            },
            {
                data: [
                    { x: 0, y: 1 },
                    { x: 3, y: 4 },
                ],
                borderColor: "#ccccff",
                label: "Trend Result"
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            text: "Sequence Visualization"
        },
        scales: {
            xAxes: [{
                    type: 'linear',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Your label' // optional 
                    },
                }],
            yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Count'
                    }
                }],
        }
    }
});
