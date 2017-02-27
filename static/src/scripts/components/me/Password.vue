<template lang="html">
    <div class="password-page">
        <div class="child-center">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="originPassword" class="col-sm-5 control-label">Origin Password:</label>
                    <div class="col-sm-7">
                        <input v-model="originPassword" type="password" class="form-control" id="originPassword" placeholder="Origin Password">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-5 control-label">Password:</label>
                    <div class="col-sm-7">
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-5 col-sm-7">
                        <button class="btn btn-default" @click="submitForm">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {postRequest} from 'api'; 

    export default {
        data(){
            return {
                originPassword: '',
                password: ''

            }
        },
        methods: {
            submitForm(){
                if(this.originPassword.trim() === '' || this.password.trim() === ''){
                    this.$eventHub.$emit('alert','danger',"invalid input");
                }else{
                    postRequest('/password',{
                        originPassword: this.originPassword,
                        password: this.password
                    }).then((resp)=>{
                        this.$eventHub.$emit('alert','success',resp.status)
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .password-page{
        .child-center{
            height: inherit;

        }
        form {
            width: 30%;
            height: 200px;
        }
    }
    
</style>