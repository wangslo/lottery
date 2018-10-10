<!--四位验证码输入框组件-->
<template>
  <div class="security-code-wrap">
    <label for="code">
      <ul class="security-code-container">
        <li class="field-wrap" v-for="(item, index) in number" :key="index">
          <i class="char-field">{{value[index] || placeholder}}</i>
        </li>
      </ul>
    </label>
    <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
           id="code" name="code" type="tel" :maxlength="number"
           autocorrect="off" autocomplete="off" autocapitalize="off">
  </div>
</template>
<script>
  export default {
    name: 'Code',
    props: {
      number: {
        type: Number,
        default: 6
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    // variables
    data() {
      return {
        value: ''
      }
    },
    methods: {
      hideKeyboard() {
        // 输入完成隐藏键盘
        document.activeElement.blur() // ios隐藏键盘
        this.$refs.input.blur() // android隐藏键盘
      },
      handleSubmit() {
        this.$parent.checkCode(this.value)
      },
      handleInput(e) {
        this.$refs.input.value = this.value
        if (this.value.length >= this.number) {
          this.hideKeyboard()
        }
        this.handleSubmit()
      }
    }
  }
</script>
<style scoped lang="scss">
  .security-code-wrap {
    overflow: hidden;
  }
  .security-code-container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    .field-wrap {
      list-style: none;
      display: block;
      width: 80px;
      height: 80px;
      line-height: 80px;
      font-size: 32px;
      background-color: #fff;
      margin: 20px;
      color: #000;
      border: 1px solid;
      .char-field {
        font-style: normal;
      }
    }
  }
  .input-code {
    position: absolute;
    left: -9999px;
    top: -99999px;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: visible;
    z-index: -1;
  }
</style>
