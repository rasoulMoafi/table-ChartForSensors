<template>
    <!-- when the user choice a different sensor the modal immediatly appeared -->
    <dialog id="chartDialog" class="modal" >
        <div class="modal-box max-w-[1000px]">
            <h3 class="text-lg font-bold">charts for display sensors information</h3>
            <!-- chart for sensors data -->
            <div>
                <v-chart class="chart bg-stone-100" :option="option" />
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn" @click="closeChartModal()">Close</button>
                </form>
            </div>
        </div>
    </dialog>

</template>

<script setup>
import { reactive, computed, watch, onMounted, ref } from "vue";

const props = defineProps({
    sensor: {
        type: Object,
        required: true,
    },
});

// for choising first sensor
onMounted(() => {
    const modal = document.getElementById("chartDialog");
    modal.showModal();
})

// when the user choice another sensor, the vlaues for chart be changed
watch(() => props.sensor, (newSensor) => {
    if (newSensor) {
        const modal = document.getElementById("chartDialog");
        modal.showModal();
        option.value.title.text = newSensor.name
        option.value.series[0].data = newSensor.vol
        option.value.series[1].data = newSensor.temp
        option.value.series[2].data = newSensor.mois
    }
}, { deep: true });


function closeChartModal() {
    const modal = document.getElementById("chartDialog");
    modal.close();
    props.sensor = null;
}

const option = ref({
    title: {
        text: props.sensor.name
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Voltage', 'Temperature', 'Moisture']
        // data: props.sensor.name
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Voltage',
            type: 'line',
            data: props.sensor.vol
        },
        {
            name: 'Temperature',
            type: 'line',
            data: props.sensor.temp
        },
        {
            name: 'Moisture',
            type: 'line',
            data: props.sensor.mois
        }
    ]
})

</script>

<style lang="scss" scoped></style>