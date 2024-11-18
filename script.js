google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['X', 'Value'],
        ['Jan', 10],
        ['Feb', 20],
        ['Mar', 30],
        ['Apr', 40],
        ['May', 50],
    ]);

    const options = {
        title: 'Custom Line Chart with Area Fill',
        colors: ['#000000'],
        areaOpacity: 0.5,
        backgroundColor: '#f3f3f3',
        hAxis: { title: 'Month' },
        vAxis: { title: 'Value' },
        legend: 'none',
    };

    const chart = new google.visualization.AreaChart(
        document.getElementById('chart-container')
    );
    chart.draw(data, options);
}
