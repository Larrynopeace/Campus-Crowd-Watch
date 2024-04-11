<!-- This is a Layout component example -->

<script setup>

import { onMounted, ref, computed } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const route = useRoute()
// Please note that the default-active prop expects a string that matches one of the index props of the el-menu-item or el-sub-menu
// A computed property that returns the index of the current route, so that the menu can highlight the current route after refreshing the page
const activeIndex = computed(() => {
    switch (route.path) {
        case '/home':
            return '1-1'
        case '/user':
            return '1-2'
        case '/chart':
            return '1-3'
        case '/gauge':
            return '1-4-1'
        case '/test':
            return '1-4-2'
        case '/login':
            return '2'
        default:
            return ''
    }
})

const router = useRouter()
// A method pushes to route /home
const pushToHome = () => {
    router.push('/home')
}
// A method pushes to route /user
const pushToUser = () => {
    router.push('/user')
}
// A method pushes to route /login
const pushToLogin = () => {
    router.push('/login')
}
// A method pushes to route /chart
const pushToChart = () => {
    router.push('/chart')
}
// A method pushes to /gauge
const pushToGauge = () => {
    router.push('/gauge')
}

// A method pushes to /test
const pushToTestData = () => {
    router.push('/test')
}

const handleOpen = (key, keyPath) => {
    /* console.log(key, keyPath) */
}
const handleClose = (key, keyPath) => {
    /* console.log(key, keyPath) */
}

const isCollapse = ref(false)

onMounted(() => {
    /* console.log('@@@currentURL', currentURL) */
})

</script>

<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <!-- Aside area -->
        <el-aside :width="isCollapse ? '80px' : '200px'">
            <!-- Collapse button -->
            <el-button @click="isCollapse = !isCollapse" style="background-color: #545c64; color: antiquewhite;">
                Expand
            </el-button>
            <!-- Menu area -->
            <el-menu :default-active="activeIndex" active-text-color="#ffd04b" background-color="#545c64"
                class="el-menu-vertical-demo" text-color="#fff" @open="handleOpen" @close="handleClose"
                :default-openeds="['1']" :collapse="isCollapse">
                <!-- First navigator -->
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-4-1" @click="pushToGauge">Gauge</el-menu-item>
                        <el-menu-item index="1-1" @click="pushToHome">Home</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-2" @click="pushToUser">User</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>Echarts</template>
                        <el-menu-item index="1-4-2" @click="pushToTestData">Test data</el-menu-item>
                        <el-menu-item index="1-3" @click="pushToChart">Apache Echarts</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <!-- Second navigator -->
                <el-menu-item index="2" @click="pushToLogin">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>Login</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <!-- Header area -->
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>

            <!-- Main area -->
            <el-main>
                <!-- <el-scrollbar style="padding: 50px;"> -->
                <!-- content area of route  -->
                <!-- <RouterView /> -->
                <!-- </el-scrollbar> -->
                <div style="padding: 40px;">
                    <!-- content area of route  -->
                    <RouterView />
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.layout-container-demo .el-header {
    position: relative;
    background-color: #2d3436;
    color: #ffffff;
}

.layout-container-demo .el-aside {
    background-color: #545c64;
    /* background-color: aqua; */
    color: #ffffff;
}

.layout-container-demo .el-menu {
    background-color: #545c64;
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>