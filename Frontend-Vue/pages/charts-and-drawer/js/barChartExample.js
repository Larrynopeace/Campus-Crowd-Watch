const { onMounted, ref } = Vue
const { echarts, axios } = window;

export default {
    name: 'BarChart',
    setup() {

        // Test: An array to store the data of the building occupancy
        const testData = ref([])

        // Test: function to get the building occupancy of 'Unipol Recreational Services'
        const getUnipolOccupancy = () => {
            axios.get('http://localhost:3000/api/occupancy/Unipol Recreational Services')
                .then((response) => {
                    console.log('@@@Occupancy: ', response.data);
                    testData.value = response.data;
                })
                .catch((error) => {
                    console.log('@@@Error: ', error);
                });
        };


        onMounted(() => {

            // Call the function to get the data of 'Unipol Recreational Services'
            getUnipolOccupancy();

            var myChart = echarts.init(document.getElementById('main'));

            const option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['Sales']
                },
                xAxis: {
                    data: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F']
                },
                yAxis: {},
                series: [
                    {
                        name: 'Sales',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            };

            myChart.setOption(option);
        });

        return {
            // Variable
            testData,

            // Function
        };
    },

    template:
        ` 
    <div id="main" style="width: 600px;height:400px;"></div>

    <h3>Test Data: Temporarily display</h3>
    {{ testData }}
    `
};
