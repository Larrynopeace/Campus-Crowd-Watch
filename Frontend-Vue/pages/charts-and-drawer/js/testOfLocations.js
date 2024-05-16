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

        // A method to log out (remove the session storage) and redirect to the index page
        const logout = () => {
            sessionStorage.removeItem("user");
            window.location.href = '../../index.html'
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
            logout
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
// Summary of the current occupancy of all buildings
import pieChart from './component/pieChart.js'; 
// 2. Register the components
app.component('bar-chart', BarChart);
app.component('central-library', CentralLibrary);
app.component('science-library', ScienceLibrary);
app.component('law-library', LawLibrary);
app.component('robertson-library', RobertsonLibrary);
app.component('business-school', BusinessSchool);
app.component('pie-chart', pieChart);

app.use(ElementPlus);
app.mount('#app');

