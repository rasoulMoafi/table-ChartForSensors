import { defineNuxtPlugin } from '#app'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"

// Import ECharts components
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    LineChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent
} from 'echarts/components'

use([
    CanvasRenderer,
    LineChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent
])

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('v-chart', ECharts)
})
