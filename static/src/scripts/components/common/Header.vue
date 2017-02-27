<template lang="html">
    <div class="header">
        <ul class="nav nav-tabs">
            <router-link role="presentation" v-for="nv in navigation" :to="nv.link" tag="li"><a>{{nv.name}}</a></router-link>
            <li class="profile dropdown">
                <img src="http://7xs8pt.com1.z0.glb.clouddn.com/slaven.jpeg" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></img>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                    <router-link to="/me/avator" tag="li"><a>Avator</a></router-link>
                    <li role="separator" class="divider"></li>
                    <router-link to="/me/password" tag="li"><a>Password</a></router-link>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                navigation: [
                    {
                        name: "Home",
                        link: '/home'
                    },
                    {
                        name: "Categories",
                        link: '/categories'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
.header {
    .nav > li:first-child{
        margin-left: 30%;
    }
    .nav > li:last-child{
        float: right;
        margin-top: 10px;
        margin-right: 40px;

        img{
            width: 20px;
            cursor: pointer;
        }

        .dropdown-menu{
            left: auto;
            right: 0;
            min-width: 120px;
        }
    }
}

</style>