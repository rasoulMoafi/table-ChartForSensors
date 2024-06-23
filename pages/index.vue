<template>
    <div class="relative flex flex-row items-center justify-center">

        <div>
            <img src="../assets/images/sensorsImage1.jpg" class="object-fill w-full">
        </div>
        
        <!-- table of sensor content -->
        <div class="absolute bottom-[-75px] w-[60%] bg-stone-200">
            <Table />
        </div>
        <!-- end of table of sensor content -->

    </div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.container {
    background-color: rgba(241, 246, 241, 0.92);
    top: -4%;
    width: 95vw;
    margin: 0px auto;
    box-shadow: 1px 1px 14px 0px;
}
</style>