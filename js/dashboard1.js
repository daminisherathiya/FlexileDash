// --------------------------------
// Sales Overview
// --------------------------------

var sales_overview_options = {
    series: [{
    name: 'Ample',
    data: [355, 390, 300, 350, 390, 180]
  }, {
    name: 'Pixel Admin',
    data: [280, 250, 325, 215, 250, 310]
  }],
    chart: {
    type: 'bar',
    height: 300,
    offsetY: 30,
    toolbar: {
        show: false,
    },
  },
  legend: {
    show: false,
  },
  colors: ['#1e4db7', '#a7e3f4'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '42%',
      endingShape: 'rounded',
      borderRadius: 6,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 5,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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
        bottom: 7,
    },
  },
  }; 

  var sales_overview_chart = new ApexCharts(document.querySelector("#sales-overview"), sales_overview_options);
  sales_overview_chart.render();

// --------------------------------
// Monthly sales
// --------------------------------

  var monthly_sales_options = {
    series: [{
    name: 'Monthly Sales',
    data: [35, 60, 30, 55, 40]
  }],
    chart: {
    height: 95,
    width: '100%',
    type: 'area',
    offsetY: 10,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    }
  },
  colors: ['#1a9bfc'],
  fill: {
    colors: '#f3faff',
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
    padding: {
      // top: 0,
      right: 0,
      left:0,
      // bottom: 30,

    },
  },
};

  var monthly_sales_chart = new ApexCharts(document.querySelector("#monthly_sales"), monthly_sales_options);
  monthly_sales_chart.render();



// --------------------------------
// Total Sales
// --------------------------------

  var total_sales_options = {
    series: [25, 25, 25, 25],
    labels: ["2021", "2020", "2019", "2018"],
    chart: {
    height: 345,
    type: 'donut',
    fontFamily: "Poppins, sans-serif",
    foreColor: "#98aab4",
  },
  colors: ['#1a9bfc', '#1e4db7', '#fec90f', '#ecf0f2'],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'bottom',
    offsetY: 10,
    fontSize: '16px',
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


  var total_sales_chart = new ApexCharts(document.querySelector("#total_sales"), total_sales_options);
  total_sales_chart.render();

// --------------------------------
// Weekly Stats
// --------------------------------

var weekly_stats_options = {
  series: [{
  name: 'Monthly Sales',
  data: [40, 60, 50, 65]
}],
  chart: {
  height: 155,
  width: '100%',
  type: 'area',
  offsetY: 0,
  toolbar: {
    show: false,
  },
  sparkline: {
    enabled: true,
  }
},
colors: ['#1a9bfc'],
fill: {
  colors: '#f3faff',
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
  padding: {
    // top: 0,
    right: 0,
    left:0,
    // bottom: 30,

  },
},
};

var weekly_stats_chart = new ApexCharts(document.querySelector("#weekly_stats"), weekly_stats_options);
weekly_stats_chart.render();


