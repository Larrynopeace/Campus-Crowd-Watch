const { onMounted, ref } = Vue
const { echarts, axios } = window;

export default {
    name: 'BarChart',
    setup() {

        // Test: An array to store the data of the building occupancy
        const testData = ref([])
        // Extract the data from the testData
        let times = []
        //let buildings = []
        let occupancies = []

        // Test: function to get the building occupancy of 'Unipol Recreational Services'
        const getUnipolOccupancy = () => {
            axios.get('http://localhost:3000/api/occupancy/name/Robertson Library')
                .then((response) => {
                    console.log('@@@Occupancy: ', response.data);
                    testData.value = response.data;

                    // Extract the data from the testData
                    times = testData.value.map(item => {
                        const date = new Date(item.time);
                        const hours = date.getHours().toString().padStart(2, '0');
                        const minutes = date.getMinutes().toString().padStart(2, '0');
                        return `${hours}:${minutes}`;
                    });
                    //buildings = testData.value.map(item => item.building);
                    occupancies = testData.value.map(item => item.occupancy);

                    var myChart = echarts.init(document.getElementById('main'));

                    const option = {
                        title: {
                            text: 'Robertson Library'
                        },
                        tooltip: {},
                        legend: {
                            //sdata: ['Sales']
                            data: ['Occupancy']
                        },
                        xAxis: {
                            //data: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F']
                            data: times
                        },
                        yAxis: {},
                        series: [
                            {
                                //name: 'Sales'
                                name: 'Occupancy',
                                type: 'bar',
                                data: occupancies
                            }
                        ]
                    };

                    myChart.setOption(option);

                    //console.log('@@@Times', times);

                })
                .catch((error) => {
                    console.log('@@@Error: ', error);
                });
        };

        onMounted(() => {

            // Call the function to get the data of 'Unipol Recreational Services' and display it in the bar chart
            getUnipolOccupancy();

        });

        return {
            // Variable

            // Function
        };
    },

    template:
        ` 
        <div id="main" style="width: 1500px;height:650px;"></div>
    `
};
