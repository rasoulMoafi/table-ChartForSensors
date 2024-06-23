<template>
    <div class="flex flex-col align-center justify-center">
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <thead class="bg-slate-500 h-[80px]">
                    <tr>
                        <th></th>
                        <th class="text-xl text-white font-bold text-center">sensor name</th>
                        <th class="text-xl text-white font-bold text-center">voltage</th>
                        <th class="text-xl text-white font-bold text-center">temprature</th>
                        <th class="text-xl text-white font-bold text-center">moisture</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- get the last data from sensor -->
                    <tr v-for="(item, index) in sensors.sensor" :key="index" @click="choisenSensor = item">
                        <th>{{ index }}</th>
                        <td class="text-center">{{ item.name }}</td>
                        <td class="text-center">{{ item.vol[item.vol.length - 1] }}</td>
                        <td class="text-center">{{ item.temp[item.temp.length - 1] }}</td>
                        <td class="text-center">{{ item.mois[item.mois.length - 1] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <Chart v-if="choisenSensor" :sensor="choisenSensor" />
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted, ref } from "vue";

import { useSensors } from "~/store/sensors";
const sensors = useSensors()

const choisenSensor = ref(null)

onMounted(() => {
    fetchSensorsData();
    setInterval(fetchSensorsData, 1000); 
});

const fetchSensorsData = () => {
    sensors.getSensors();
};



</script>


<style scope>
.chart {
    height: 400px;
}
</style>