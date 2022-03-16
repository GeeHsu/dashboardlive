// 動態圖表
(() => {
  const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  var randomScalingFactor = function () {
    return Math.round(Math.random() * 2000000);
  };

  const pieCtx = document.getElementById('pie-chart').getContext('2d');
  const barCtx = document.getElementById('bar-chart').getContext('2d');

  const config = {
    type: 'pie',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
        ],
        label: 'Dataset 1'
      }],
      labels: [
        '餅乾類',
        '飲料類',
        '熟食類',
        '生鮮類',
        '糖果類',
      ]
    },
    options: {
      responsive: true
    }
  };
  const barConfig = {
    type: 'bar',
    data: {
      datasets: [{
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          chartColors.red,
          chartColors.orange,
          chartColors.yellow,
          chartColors.green,
          chartColors.blue,
          chartColors.purple,
        ],
        label: '單月營業額'
      }],
      labels: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
      ]
    },
    options: {
      responsive: true
    }
  };
  const pieChart = new Chart(pieCtx, config);
  const barChart = new Chart(barCtx, barConfig);
})();