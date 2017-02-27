<template lang="html">
<div class="main-page">
    <alert-message></alert-message>
    <blog-header></blog-header>
    <router-view></router-view>
</div>
</template>

<script>
import AlertMessage from '../components/common/AlertMessage';
import Header from '../components/common/Header';


export default {
    components: {
        blogHeader: Header,
        alertMessage: AlertMessage
    },
    data(){
        return {
           
        }
    }
}
</script>

<style lang="css">
</style>

<style lang="less" src="../../styles/main.less"></style>