// --------------------------------
// download-report
// --------------------------------

var download_report_options = {
  series: [{
  name: 'Monthly Sales',
  data: [35, 60, 30, 40]
}],
  chart: {
  height: 26,
  width: "163px",
  type: 'area',
  // offsetY: 30,
  toolbar: {
    show: false,
  },
  sparkline: {
    enabled: true,
  }
},
colors: ['#1a9bfc'],
fill: {
  colors: '#ffffff',
  opacity: 1,
  type: 'solid',
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  labels: {
    show: false,
  },
  axisTicks: {
    show: false,
  },
  axisBorder: {
    show: false,
  },
},
yaxis: {
  labels: {
    show: false,
  },
  axisTicks: {
    show: false,
  },
  axisBorder: {
    show: false,
  },
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},

grid: {
  show: false,
},
};

var download_report_chart = new ApexCharts(document.querySelector("#download-report"), download_report_options);
download_report_chart.render();

// --------------------------------
// Product Perfomance
// --------------------------------

var product_perfomance_options = {
  series: [{
  name: 'Ample',
  data: [280, 200, 180, 300, 200, 280, 260]
}, {
  name: 'Pixel Admin',
  data: [100, 200, 80, 80, 140, 120, 50]
}],
  chart: {
  type: 'bar',
  width: 413,
  height: 250,
  offsetY: 0,
  stacked: true,
  toolbar: {
      show: false,
  },
},
legend: {
  show: false,
},
colors: ['#1e4db7', '#fec90f'],
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '42%',
    // endingShape: 'rounded',
    // startingShape: 'rounded',
    borderRadius: 9,
    rangeBarGroupRows: true,
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 6,
  colors: ['white']
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','aug'],
  axisTicks: {
    show: false,
  },
  axisBorder: {
    show: false,
  },
},
yaxis: {
  min: 100,
  max: 400,
  tickAmount: 3,
},
fill: {
  opacity: 1
},
tooltip: {
  theme: 'dark',
},
grid: {
  show: false,
  padding: {
      top: 0,
      right: 0,
      bottom: 0,
  },
},
}; 

var product_perfomance_chart = new ApexCharts(document.querySelector("#product-perfomance"), product_perfomance_options);
product_perfomance_chart.render();

// --------------------------------
// Yearly Sales
// --------------------------------

var yearly_sales_options = {
  series: [25, 25, 25, 25],
  labels: ["2021", "2020", "2019", "2018"],
  chart: {
  height: 150,
  width:150,
  offsetX:10,
  type: 'donut',
  fontFamily: "Poppins, sans-serif",
  foreColor: "#98aab4",
},
colors: ['#1a9bfc', '#1e4db7', '#fec90f', '#ecf0f2'],
dataLabels: {
  enabled: false
},
legend: {
  show: false,
  position: 'left',
  offsetY: 0,
  fontSize: '12px',
},
grid: {
  show: false,
  borderColor: 'transparent',
  padding: {
      top: 0,
      right: 0,
  },
},
stroke: {
  colors: ['transparent'],
},
plotOptions: {
  pie: {
      donut: {
          size: '78%',
          background: 'transparent',
          labels: {
              show: false,
              name: {
                  show: true,
                  fontSize: '18px',
                  color: undefined,
                  offsetY: -10,
              },
              value: {
                  show: false,
                  color: "#98aab4",
              },
              total: {
                  show: false,
                  label: 'Our Visitors',
                  color: '#98aab4',
              }
          }
      }
  }
}
};


var yearly_sales_chart = new ApexCharts(document.querySelector("#yearly-sales"), yearly_sales_options);
yearly_sales_chart.render();
