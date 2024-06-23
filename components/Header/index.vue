<template>
    <div class="flex flex-row items-center justify-center">
        <div class="w-[75%]">
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">Samayesh</a>
                </div>
                <div class="flex-none gap-2">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabindex="0"
                            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
</script>

<style scoped>
.header-menu-container {
    position: absolute;
    left: 50%;
    transform: translateX(-45%);
    color: rgba(241, 246, 241, 0.92);
}

.header-menu {
    width: 1260px;
    /* background-color: transparent; */
}

:deep(.v-toolbar__content) {
    height: 55px !important;
}

.list-item {
    color: gray;
    font-size: 14px;
}

.text-white {
    color: white;
}
</style>