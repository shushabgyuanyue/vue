<template>
  <div id="login" class="container">
    <div id="icon-logo-box">
      <svg id="icon-logo" class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-test"></use>
      </svg>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item prop="account">
        <el-input
          placeholder="请输入手机号"
          v-model.number="ruleForm.account"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item id="form-info">
        未注册的手机号验证后自动创建账户
      </el-form-item>
      <el-form-item>
        <el-button round id="submit-btn" @click="submitForm('ruleForm')"
          >登 录</el-button
        >
      </el-form-item>
      <el-form-item id="form-warning">
        忘记密码
      </el-form-item>
    </el-form>
    <div id="icon-wx-box">
      <svg id="icon-wx" class="icon" aria-hidden="true">
        <use xlink:href="#icon-weixin"></use>
      </svg>
    </div>
    <div id="bottom-text-box">
      <span>登录代表你已经同意用户协议 隐私政策</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入邮箱或手机号"));
        } else {
          if (false) {
            callback(new Error("输入错误，请重新输入"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        account: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        account: [{ validator: checkAccount, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#icon-logo-box {
  padding: 0.2rem;
  flex-shrink:2;
}
#icon-logo {
  width: 2.5rem;
  height: 2.5rem;
}
#submit-btn {
  background-color: var(--yellow-color);
  color: var(--black-color);
  font-weight: 700;
  font-size: .4rem;
  width: 100%;
}
#form-info {
  color: var(--black-color);
  margin-top: -.15rem;
  font-size: 0.3rem !important;
}
#form-warning {
  color: var(--yellow-color);
  text-align: right;
}
#icon-wx-box {
  display:flex;
  align-items:center;
  margin: 0 auto;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: .9rem;
  height: .9rem;
  padding: 0.1rem;
  flex-shrink:2;

}
#icon-wx-box:hover {
  background-color: rgb(233, 233, 233);
}
#icon-wx {
   text-align: center;
  width: .8rem;
  height: .8rem;
}
#bottom-text-box {
  font-size: 0.2rem;
  color: var(--black-color);
  width: 100%;
}
</style>
<style>
 #login .el-form {
  width: 100%;
}
#login .el-input {
  font-size: .2rem;
}
#login .el-form-item__content
{
  font-size: .25rem ;
}
#login .el-input__inner {
  line-height: .5rem;
  font-size: .3rem;
  height: 1rem;
} 
</style>

