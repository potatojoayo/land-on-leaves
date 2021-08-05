<template>
  <div>
    <v-card
      color="primary"
      width="300px"
      height="240px"
    >
      <div class="triangle"></div>
      <v-card-title
        class="secondary--text"
      >
        로그인이 필요한 메뉴입니다.
      </v-card-title>
		<v-form>
        <v-col
          ><v-text-field
            v-model="email"
            label="이메일"
            required
            dense
            class="login-text-field"
            color="secondary"
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            required
            dense
            class="login-text-field"
            color="secondary"
          />
          <v-row
            justify="space-between"
          >
            <v-btn
              v-ripple="false"
              color="secondary"
              class="primary--text"
              >가입하기</v-btn
            >
            <v-btn
              v-ripple="false"
              color="secondary"
              class="primary--text"
              @click="
                $api.login(
                  email,
                  password

                )
              "
              >로그인</v-btn
            >
          </v-row>
          <span
            class="secondary--text ask"
            ><a>이메일 </a>혹은<a>
              비밀번호</a
            >를 잊으셨습니까?</span
          >
        </v-col>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    }
  },
})
</script>
<style lang='scss'>
.login-card {
  .v-card {
    border-radius: 0 3px 5px 5px !important;
  }
  .v-card__title {
    font-family: 'BMHANNAPro';
    padding: 10px 0 0 10px;
  }
  .row {
    padding: 10px !important;
  }
  span {
    font-family: 'BMHANNAPro';
    display: block;
    text-align: center;
    a {
      text-decoration: none;
      color: #0096c7;
    }
  }

  button {
    span {
      font-size: 1rem;
    }
  }

  .ask {
    margin-top: 20px;
  }
  .triangle {
    width: 0px;
    height: 0px;
    position: absolute;
    top: -14px;

    right: 0px;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 15px solid #363636;
  }

  .theme--dark .triangle {
    border-bottom-color: #d8cfc7;
  }

  .login-text-field.theme--dark {
    label {
      color: #808080 !important;
      font-family: 'BMHANNAPro';
    }
    input {
      color: #363636 !important;
      font-family: 'BMHANNAPro';
    }
    input[type='password'] {
      color: #363636 !important;
      font-family: 'Roboto';
    }
  }

  .login-text-field {
    .v-btn {
      padding: 0px 10px !important;
      margin: 5px !important;
      font-family: 'BMHANNAPro';
      border-radius: 0 !important;
      display: flex;
      justify-content: center;
      align-content: center;
    }
    label {
      color: #b0b0b0 !important;
      font-family: 'BMHANNAPro';
      font-size: 1rem;
    }
    input {
      color: #d8cfc7 !important;
      font-family: 'BMHANNAPro';
    }

    .v-input__slot:active {
      border-color: #b0b0b0 !important;
    }
    .v-input__slot::before {
      border-color: #b0b0b0 !important;
    }
    .v-input__slot:hover {
      border-color: #b0b0b0 !important;
    }
  }

  input[type='password'] {
    color: #d8cfc7 !important;
    font-family: 'Roboto';
  }
}
</style>
