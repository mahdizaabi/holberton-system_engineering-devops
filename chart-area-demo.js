var listx;
$(document).ready(function(){
var str = '';
var keysName = [];



    // Get value user input "Student_first and last name"

    $("#myBtn").click(function(event){
      let str;
      let id;
      if (typeof window.myLineChart === 'object' && window.myLineChart !== null){window.myLineChart.destroy();
        console.log('jaaaaaa');}
      event.preventDefault();
        str = $("#myInput").val();
        //Fetch API => get the id corresponding to the Name
        $.get("http://55.55.55.5:5000/students/id", function(data, status){
              id = data[str];
              $.get(`http://55.55.55.5:5000/projects/${id}`, function(data, status){
      console.log(id)
      for ( var property in data ) {
             keysName.push(property);}
             console.log(data)
            console.log(keysName);
            let t1 = keysName[0];
            let v1 = data[t1];
            let t2 = keysName[1];
            let v2 = data[t2];
            let t3 = keysName[2];
            let v3 = data[t3];
            let t4 = keysName[3];
            let v4 = data[t4];
            let t5 = keysName[4];
            let v5 = data[t5];

      $("#xxx").replaceWith(`<h6 id ="xxx" class="m-0 font-weight-bold text-primary">Latest Projects</h6>`);
      $("#titre1").replaceWith(`<h4 id="titre1" class="small font-weight-bold">${t1}<span class="float-right">${v1}%</span></h4>`);
      $("e1").replaceWith(`<div id="e1" class="progress-bar bg-danger" role="progressbar" style="width: ${v1}%" aria-valuenow="0" aria-valuemin="100%" aria-valuemax="200%"></div>
                  </div>`);
      $("#titre2").replaceWith(`<h4 id="titre2" class="small font-weight-bold">${t2}<span class="float-right">${v2}%</span></h4>`);
      $("e2").replaceWith(`<div id="e2" class="progress-bar bg-danger" role="progressbar" style="width: ${v2}%" aria-valuenow="0" aria-valuemin="100%" aria-valuemax="200%"></div>
                  </div>`);
      $("#titre3").replaceWith(`<h4 id="titre3" class="small font-weight-bold">${t3}<span class="float-right">${v3}%</span></h4>`);
      $("e3").replaceWith(`<div id="e3" class="progress-bar bg-danger" role="progressbar" style="width: ${v3}%" aria-valuenow="0" aria-valuemin="100%" aria-valuemax="200%"></div>
                  </div>`);
      $("#titre4").replaceWith(`<h4 id="titre4" class="small font-weight-bold">${t4}<span class="float-right">${v4}%</span></h4>`);
      $("e4").replaceWith(`<div id="e4" class="progress-bar bg-danger" role="progressbar" style="width: ${v4}%" aria-valuenow="0" aria-valuemin="100%" aria-valuemax="200%"></div>
                  </div>`);
      $("#titre5").replaceWith(`<h4 id="titre5" class="small font-weight-bold">${t5}<span class="float-right">${v5}%</span></h4>`);
      $("e5").replaceWith(`<div id="e5" class="progress-bar bg-danger" role="progressbar" style="width: ${v5}%" aria-valuenow="0" aria-valuemin="100%" aria-valuemax="200%"></div>
                  </div>`);
             
              //Fetch API => get all the informations about student using the ID !
                $.get(`http://55.55.55.5:5000/students/${id}`, function(data, status){
                  //console.log(data[2]['Low_level'])
                  const picture = data[1]['General_Informations']['picture'];
                  for (const [ key, value ] of Object.entries(data[4]['Low_level'])) { listx.push(value)}
                  $("#score").html(`<b style="color: #FF0077; font-size: 16px;">${str}</b>`);
                   $("#okok").html(`<b>ID: ${id}</b>`);
                   $("#x").html(`<a href="https://imgbb.com/"><img src=${picture} " border="0"></a>`);
                   
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#77096';                    
var ctx = document.getElementById("myAreaChart");

 window.myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Earnings",
      lineTension: 0.0,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: listx,
    }],
  },
  options: {
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true,
          drawBorder: true
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          padding: 10,
          beginAtZero: true,
          min: 0,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '%' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(236,238,240)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: true,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': %' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

    });

                  
                })
        })
        // debugging
        $("#heading2").text(str);

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

  
  listx = [];

    });

});
