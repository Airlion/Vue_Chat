<template>
  <div ref="Mycontainer" class="container" id="container">
    <!-- 注册 -->
    <div class="form-container sign-up-container">
      <form action="">
        <h1>注册账号</h1>
        <div class="soccial-container">
          <!-- <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a> -->
        </div>
        <div class="form-control">
          <input v-model="sinInfo.username" type="text" required="true">
          <label>
            <span style="transition-delay:0ms">N</span><span style="transition-delay:50ms">a</span><span
              style="transition-delay:100ms">m</span><span style="transition-delay:150ms">e</span>
          </label>
        </div>
        <div class="form-control">
          <input v-model="sinInfo.email" type="text" required="true">
          <label>
            <span style="transition-delay:0ms">E</span><span style="transition-delay:50ms">m</span><span
              style="transition-delay:100ms">a</span><span style="transition-delay:150ms">i</span><span
              style="transition-delay:200ms">l</span>
          </label>
        </div>
        <div class="form-control">
          <input v-model="sinInfo.password" type="password" required="true">
          <label>
            <span style="transition-delay:0ms">P</span><span style="transition-delay:50ms">a</span><span
              style="transition-delay:100ms">s</span><span style="transition-delay:150ms">s</span><span
              style="transition-delay:200ms">w</span><span style="transition-delay:250ms">o</span><span
              style="transition-delay:300ms">r</span><span style="transition-delay:350ms">d</span>
          </label>
        </div>
        <button @click='$event => sigIn()' class="reg-btn"> 开启旅程</button>

      </form>

    </div>
    <!-- 登录 -->
    <div class=" form-container sign-in-container">
      <form action="">
        <h1>登录账号</h1>
        <div class="soccial-container">
          <!-- <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a> -->
        </div>
        <div class="form-control">
          <input type="text" required="true">
          <label>
            <span style="transition-delay:0ms">E</span><span style="transition-delay:50ms">m</span><span
              style="transition-delay:100ms">a</span><span style="transition-delay:150ms">i</span><span
              style="transition-delay:200ms">l</span>
          </label>
        </div>
        <div class="form-control">
          <input type="password" required="true">
          <label>
            <span style="transition-delay:0ms">P</span><span style="transition-delay:50ms">a</span><span
              style="transition-delay:100ms">s</span><span style="transition-delay:150ms">s</span><span
              style="transition-delay:200ms">w</span><span style="transition-delay:250ms">o</span><span
              style="transition-delay:300ms">r</span><span style="transition-delay:350ms">d</span>
          </label>
        </div>
        <a href="#" style="color:#5494; margin-top: 30px;">忘记密码？</a>
        <button class="log-btn" style="padding:12px 60px; margin-top:30px"> 登录</button>

      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p style="color:#4bcfb9">
            以保持与我们的联系
          </p>
          <button class="ghost" @click="$event => removeClass()" id="signIn">前往登录</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello,Friend!</h1>
          <p style="color:#4bcfb9">让我们一起开始旅程</p>
          <button ref="Mycontainer" class="ghost" @click="$event => addClass()" id="signIn">前往注册</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { sigin } from '../../api/index'
import type { IsigInfo } from '../../Interface/index'
const Mycontainer = ref(null) as any

let sinInfo = ref<IsigInfo>({
  username: '',
  email: '',
  password: '',
})

const sigIn = () => {
  console.log('注册事件');

  // sigin({

  // })
}
const addClass = () => {
  if (Mycontainer.value != null) {
    Mycontainer.value.classList.add("right-panel-active") //Mycontainer.value' is possibly 'null
  }
}
const removeClass = () => {
  Mycontainer.value.classList.remove("right-panel-active") //Property 'classList' does not exist on type 'never'
}

</script>

<style scoped  lang="scss">
.b {
  color: #14e7c4;
}

/* input框 */
.form-control {
  position: relative;
  // margin: ;
  width: 190px;

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #8d8d8d solid;
    display: block;
    width: 100%;
    padding: 30px 0 15px;
    font-size: 0.53rem;
    color: rgb(79, 117, 117);

    &:focus,
    &:valid {
      outline: 0;
      border-bottom-color: lightblue;
    }
  }

  label {

    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;

    span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      color: #919191;
      transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  input:focus+label span,
  input:valid+label span {
    color: rgb(81, 224, 201);
    transform: translateY(-30px);
  }
}

.reg-btn,
.log-btn {
  margin-top: 30px;
  border: 1px solid #ff4742;
  color: #fc7b73;
  background-color: #fff;
}

form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

.soccial-container {
  padding-bottom: 20px;
}

.container {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 1000px;
  max-width: 100%;
  min-height: 600px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

h1 {
  font-weight: bold;
  margin: 0;
  font-size: 1rem;
  padding-bottom: 15px;
  background: linear-gradient(to right top, #38438b, #944b94, #d75a88, #ff7e71, #ffb25f, #ffeb68);
  background-clip: text;

  -webkit-background-clip: text;
  // text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.9);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.overlay {
  background: #ff4b2b;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}


.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>