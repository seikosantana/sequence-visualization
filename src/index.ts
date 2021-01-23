import {Chart} from "./chart";
import "./chart.js";

let canvas: HTMLCanvasElement = document.querySelector("#forChart") as HTMLCanvasElement;
// let context = canvas.getContext("2d");

let mainChart: Chart = new Chart(canvas, {
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
        maintainAspectRatio: false,
        title: {
            text: "Sequence Visualization"
        },
        scales: {
            xAxes: [{
                  type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT) 
                  display: true, // mandatory
                  scaleLabel: {
                       display: true, // mandatory
                       labelString: '' // optional 
                  },
                  ticks: {
                      min: 0
                  }
             }], 
            yAxes: [{ // and your y axis customization as you see fit...
               display: true,
               scaleLabel: {
                    display: true,
                    labelString: 'Values'
               },
               ticks: {
                   suggestedMin: 0
               }
           }],
       }
    }
})

let valuesField: HTMLInputElement = document.querySelector("#values") as HTMLInputElement;
valuesField.addEventListener("input", () => {
    setChartData(valuesField.value);
})

function setChartData(valueString: string) {
    let valuesTrimmed = valueString.trim();
    let values: Array<Chart.ChartPoint> = valuesTrimmed.split(" ").map((value, index) => {
        return {
            x: index,
            y: parseFloat(value)
        }
    });
    let trend: Array<Chart.ChartPoint> = [values[0], values[values.length - 1]];
    mainChart.data.datasets![0].data = values;
    mainChart.data.datasets![1].data = trend;
    mainChart.update({
        duration: 500,
        easing: "easeInOutSine"
    })
}

document.addEventListener("DOMContentLoaded", function() {
    valuesField.focus();
})