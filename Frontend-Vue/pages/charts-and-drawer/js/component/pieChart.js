const { onMounted, ref } = Vue
const { echarts, axios } = window;

export default {
    name: 'BarChart',
    setup() {

        // An array to store the data of the building occupancy
        const testData = ref([]);

        // A function to get all the data of the building current occupancy
        const getBuildingCurrentOccupancy = () => {
            axios.get('http://localhost:3000/api/buildings')
                .then((response) => {
                    console.log('@@@Current Occupancy: ', response.data);
                    testData.value = response.data;

                    // Map testData to a new array for the pie chart data
                    const pieChartData = testData.value.map(item => ({
                        name: item.Building_Name,
                        value: item.Current_Occupancy
                    }));

                    // Initialize the echarts
                    var chartDom = document.getElementById('main');
                    var myChart = echarts.init(chartDom);
                    var option;

                    option = {
                        title: {
                            text: 'Otago University Buildings',
                            subtext: 'Current Occupancy Data',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left'
                        },
                        series: [
                            {
                                name: 'Access From',
                                type: 'pie',
                                radius: '50%',
                                data: pieChartData,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };

                    option && myChart.setOption(option);
                })
                .catch((error) => {
                    console.error('@@@Error occurred:', error);
                });
        }

        onMounted(() => {

            // Call the function to get the data of the building current occupancy and display it in the pie chart
            getBuildingCurrentOccupancy();
        });

        return {
            // Variable


            // Function
        };
    },

    template:
        ` 
        <div id="main" style="width: 1100px;height:650px;"></div>
        `
};