document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['White', 'Asian', 'International', 'Latinx', 'Multiracial', 'Black', 'Not specified', 'American Indian', 'Hawaiian/Pacific Islander'],
            datasets: [{
                data: [39.3, 19.2, 14, 13.7, 6.5, 5.2, 2.1, .1, .01],
                backgroundColor: [
                    'rgb(255, 153, 153)',
                    'rgb(255, 204, 153)',
                    'rgb(255, 255, 153)',
                    'rgb(204, 255, 153)',
                    'rgb(153, 255, 153)',
                    'rgb(153, 255, 204)',
                    'rgb(153, 255, 255)',
                    'rgb(153, 204, 255)',
                    'rgb(153, 153, 255)',
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'UChicago Undergraduate Diversity (Fall 2018 Census)'
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021','2022'],
            datasets: [{
                label: 'UChicago Cost of Attendance for On Campus Students',
                data: [61390, 63860, 66444, 66444, 71559, 74526	, 78555, 81531, 81531, 82848, 86856],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }, {
                label: 'Average American Household Income',
                data: [63350, 65740, 64900, 68410, 70840, 72090, 73030, 78250, 76660, 76330, 74580],
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'UChicago Prices vs Average American Income'
                }
            }
        }
    });
});