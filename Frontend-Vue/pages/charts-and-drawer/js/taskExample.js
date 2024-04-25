// This is the taskExample controller
const { createApp, ref, onMounted } = Vue

const app = createApp({
    setup() {
        // Declare a reactive variable
        const message = ref('Hello vue!')
        // Declare a function to modify the reactive variable
        const addLetter = () => {
            message.value += 'ABC'
        }

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
            message,
            table,

            // Function
            openTable,
            addLetter,
        }
    }
})

import BarChart from './component/barChartUnipol.js';   
// Register the component
app.component('bar-chart', BarChart);

app.use(ElementPlus);
app.mount('#app');

