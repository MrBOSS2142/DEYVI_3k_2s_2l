function pict() {
  document.getElementById("graph").style.display = "block";
  document.getElementById("tableDiv").style.display = "none";
  Draw();
}

function table_create() {
  document.getElementById("tableDiv").style.display = "block";
  document.getElementById("graph").style.display = "none";
  create_table();
}

function Draw() {
  var ctx = document.getElementById("myChart").getContext("2d");
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "f(x)",
          data: [],
          borderColor: "#2B5CC6",
          borderWidth: 3,
          fill: false,
          showLine: false
        }
      ]
    },
    options: {
      responsive: false, //Вписывать в размер canvas
      scales: {
        xAxes: [{ display: true }],
        yAxes: [
          {
            display: true
          }
        ]
      }
    }
  });
  for (var x = -2 * Math.PI; x <= 2 * Math.PI; x += Math.PI / 5) {
    myChart.data.labels.push(x.toFixed(2));
    myChart.data.datasets[0].data.push(f(x).toFixed(2));
    myChart.update();
  }
  Draw = function() {};
}

function f(x) {
  return Math.log(Math.sqrt(1 + 2 * Math.pow(x, 2)));
}

var array = [];

function create_table() {
  var table = document.querySelector(".table_dark");
  var x = 1;
  for (var i = 0; i < 19; i++) {
    var y = Math.log(Math.sqrt(1 + 2 * Math.pow(x, 2)));
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.innerHTML = x;
    x += 0.5;
    tr.appendChild(td);

    var td = document.createElement("td");
    td.innerHTML = y.toFixed(2);
    tr.appendChild(td);

    table.appendChild(tr);
  }
  create_table = function() {};
}

window.onload = function() {
  document.getElementById("tableDiv").style.display = "none";
  document.getElementById("graph").style.display = "none";
};
