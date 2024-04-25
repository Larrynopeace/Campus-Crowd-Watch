// This is the testOfLocations controller
const { createApp, ref, onMounted } = Vue

const app = createApp({
    setup() {

        // This is the controller of the drawer of graph
        const table = ref(false)
        // This is the method to open the drawer
        const openTable = () => {
            // Modify the reactive variable to open the drawer
            table.value = true
        }

        // This function will be called when the component is mounted
        onMounted(() => {
            console.log('Component is mounted')
        })

        // Return the reactive variable and the function so that they can be accessed in the template
        return {
            // Variable
            table,
            //clickedBuildingName,

            // Function
            openTable,
        }
    }
})

// 1. Import the component
import BarChart from './component/barChartUnipol.js';
import CentralLibrary from './component/barChartCentralLibrary.js'; 
import ScienceLibrary from './component/barChartScienceLibrary.js'; 
import LawLibrary from './component/barChartLawLibrary.js';
import RobertsonLibrary from './component/barChartRobertsonLibrary.js';
import BusinessSchool from './component/barChartBusinessSchool.js';

import pieChart from './component/pieChart.js'; // Summary of the current occupancy of all buildings
// 2. Register the component
app.component('bar-chart', BarChart);
app.component('central-library', CentralLibrary);
app.component('science-library', ScienceLibrary);
app.component('law-library', LawLibrary);
app.component('robertson-library', RobertsonLibrary);
app.component('business-school', BusinessSchool);
app.component('pie-chart', pieChart);

app.use(ElementPlus);
app.mount('#app');

