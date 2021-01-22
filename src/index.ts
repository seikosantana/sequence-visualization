import Chart from "./chart.js";
import "./chart.js";

let canvas: HTMLCanvasElement = document.querySelector("#forChart") as HTMLCanvasElement;
// let context = canvas.getContext("2d");

let chart: Chart = new Chart(canvas, {
    type: "line",
    data: {
        labels: [
            "L", "Z"
        ],
        datasets: [
            {
                data: [
                    {x: 0, y: 3},
                    {x: 1, y: 5},
                    {x: 2, y: 6},
                    {x: 3, y: 4},
                ],
                borderColor: "#ffccce",
                label: "Input"
            },
            {
                data: [
                    {x: 0, y: 1},
                    {x: 3, y: 4},
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
                  type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT) 
                  display: true, // mandatory
                  scaleLabel: {
                       display: true, // mandatory
                       labelString: 'Your label' // optional 
                  },
             }], 
            yAxes: [{ // and your y axis customization as you see fit...
               display: true,
               scaleLabel: {
                    display: true,
                    labelString: 'Count'
               }
           }],
       }
    }
})