<template lang="html">
    <div class="container-fluid child-center">
        <form class="form-horizontal center-block" action="/login_valid" method="post">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                    <input name="username" class="form-control" id="inputEmail3" placeholder="Username">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                    <input name="password" type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
.container-fluid{
    height: 100vh;
    background-image: url('../../images/background2.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .center-block {
        width: 40%;
        height: 200px;
    }
}
</style>

<style lang="less" src="../../styles/main.less"></style>