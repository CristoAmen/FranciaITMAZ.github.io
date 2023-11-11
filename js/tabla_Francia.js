
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"],
        datasets: [{
          label: "Población de Francia",
          data: [62537373, 63121110, 63704847, 64285840, 64872321, 65456058, 66039795, 66623532, 67207269, 67791006],
          backgroundColor: ["#000", "#00ff00", "#ffff00", "#ff0000", "#9900ff", "#0099ff", "#9999ff", "#ff9900", "#ff0099", "#00ffff"],
        }]
      },
      options: {
        title: {
          text: "Gráfico de población de Francia",
          fontSize: 20,
        },
        xAxis: {
          title: {
            text: "Año",
            fontSize: 14,
          },
          labels: {
            fontSize: 12,
          },
        },
        yAxis: {
          title: {
            text: "Población (millones)",
            fontSize: 14,
          },
          labels: {
            fontSize: 12,
          },
        },
      },
    });
