<template lang="html">
<div class="alert-message">
    <div v-show="showAlert && alertType === 'success'" class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{alertMessage}}
    </div>
    <div v-show="showAlert && alertType === 'info'" class="alert alert-info alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{alertMessage}}
    </div>
    <div v-show="showAlert && alertType === 'warning'" class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{alertMessage}}
    </div>
    <div v-show="showAlert && alertType === 'danger'" class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        {{alertMessage}}
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            alertType: '',
            alertMessage: '',
            showAlert: false
        }
    },
    created(){
        this.$eventHub.$on('alert',(type,message)=>{
            this.showAlert = true;
            this.alertType = type;
            this.alertMessage = message.toString();
            setTimeout(()=>{
                this.showAlert = false;
            },4000)
        })
    },
    beforeDestroy(){
        this.$eventHub.$off('alert');
    }
}
</script>

<style lang="css" scoped>
.alert{
    padding: 10px;
    margin: 10px 0 0 0;
}
.alert-dismissable, .alert-dismissible{
    padding-right: 35px;
}
.alert-message{
    position: absolute;
    z-index: 9999;
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;
}
</style>
