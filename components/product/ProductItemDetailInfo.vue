<template>
  <div class="product-information-container">
    <v-card color="secondary">
      <div class="top-bar">
        <v-btn
          elevation="0"
          class="primary--text rounded-0 back"
          color="secondary"
          @click="goBack"
        >
          <v-icon
            style="font-size: 2rem"
            color="primary"
            class="primary--text"
            >mdi-chevron-left</v-icon
          >
          뒤로가기</v-btn
        >
        <v-btn
          elevation="0"
          class="secondary--text rounded-0 pia"
          color="primary"
          >상품정보제공공시</v-btn
        >
      </div>
      <div class="product-name-container">
        <v-card-title class="name"
          >Indre Pants</v-card-title
        >
        <v-btn
          elevation="0"
          class="primary--text rounded-0 btn"
          color="secondary"
          ><v-icon>mdi-heart-outline</v-icon></v-btn
        >
      </div>
      <p class="brand">TACH</p>
      <p class="price">₩450,000</p>
      <pre class="description">
플로럴 패턴의 터키석 크롭 니트 탑, 고정된 어깨끈,일자 
목선 및 리브드 트림. 우루과이에서 책임감 있고 지역적 
으로 조작된 것입니다.
      </pre>
      <p class="color-text">Color</p>
      <div class="color-btn">
        <div v-for="(color, index) in colors" :key="index">
          <v-btn
            v-if="selectedColor"
            elevation="0"
            color="color"
            @click="selectColor(index)"
          >
            <v-icon
              >mdi-checkbox-blank-circle</v-icon
            ></v-btn
          >
          <v-btn
            v-else
            elevation="0"
            color="color"
            @click="selectColor(index)"
          >
            <v-icon
              >mdi-checkbox-blank-circle</v-icon
            ></v-btn
          >
        </div>
      </div>

      <div class="size-content-container">
        <p class="size-text">Size</p>
        <div class="size-btn">
          <div v-for="(size, index) in sizes" :key="index">
            <v-btn
              v-if="selectedSize"
              elevation="0"
              class="size-btn secondary--text rounded-0"
              color="primary"
              @click="selectSize"
              >{{ size }}</v-btn
            >
            <v-btn
              v-else
              elevation="0"
              class="size-btn primary--text rounded-0"
              color="secondary"
              @click="selectSize"
              >{{ size }}</v-btn
            >
          </div>
          <v-btn
            v-ripple="false"
            color="secondary"
            elevation="0"
            class="primary--text question-mark"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            ><v-icon>mdi-help-circle</v-icon></v-btn
          >
          <v-card
            v-if="hover"
            color="primary"
            class="size-information secondary--text"
          >
            asdfasdfasdf
          </v-card>
        </div>
      </div>
      <p class="cart-btn">
        <v-btn
          elevation="0"
          class="rounded-0 secondary--text"
          color="primary"
          >장바구니에 담기</v-btn
        >
      </p>
      <div class="review-and-qna-btn-container">
        <v-btn
          v-if="selectedBtn"
          elevation="0"
          class="secondary--text rounded-0"
          color="primary"
          @click="changeContentReview"
          >REVIEW</v-btn
        ><v-btn
          v-else
          elevation="0"
          class="primary--text rounded-0"
          color="secondary"
          @click="changeContentReview"
          >REVIEW</v-btn
        >
        <v-btn
          v-if="selectedBtn"
          elevation="0"
          class="primary--text rounded-0"
          color="secondary"
          @click="changeContentQna"
          >QnA</v-btn
        >
        <v-btn
          v-else
          elevation="0"
          class="secondary--text rounded-0"
          color="primary"
          @click="changeContentQna"
          >QnA</v-btn
        >
      </div>
      <v-container
        v-if="selectedBtn"
        class="review-and-qna-content-container"
      >
        <p class="email">
          REVIEW****@naver.com <span>어제</span>
        </p>

        <p class="repl">
          너무 예뻐요! 잘 입고 있습니다ㅎㅎ
        </p>

        <p class="email">
          dkfmae****@naver.com <span>3일 전</span>
        </p>

        <p class="repl">너무 ! 잘 입고 있습니다ㅎㅎ</p>
        <v-btn
          elevation="0"
          color="secondary"
          class="rounded-0 primary--text more-btn"
          >more</v-btn
        >
      </v-container>
      <v-container
        v-else
        class="review-and-qna-content-container"
      >
        <p class="email">
          QNA****@naver.com <span>어제</span>
        </p>

        <p class="repl">i go whyrano!!!</p>

        <p class="email">
          dkfmae****@naver.com <span>3일 전</span>
        </p>

        <p class="repl">ㅎㅎ...</p>
        <v-btn
          elevation="0"
          color="secondary"
          class="rounded-0 primary--text more-btn"
          >more</v-btn
        >
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      selectedColor: false,
      selectedSize: false,
      selectedBtn: true,

      colors: ['red', 'pink', 'blue', 'purple'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
    selectColor(index) {
      if (index) {
        this.selectedColor = !this.selectedColor
      }
    },
    selectSize(index) {
      if (index) {
        this.selectedSize = !this.selectedSize
      }
    },
    changeContentReview() {
      if (!this.selectedBtn) {
        this.selectedBtn = !this.selectedBtn
      }
    },
    changeContentQna() {
      if (this.selectedBtn) {
        this.selectedBtn = !this.selectedBtn
      }
    },
  },
}
</script>

<style scoped>
.product-information-container {
  margin: 10px 30px;
}

.product-information-container * {
  padding: 5px 0;
}
.product-information-container .v-card {
  box-shadow: 0 0 0 #000;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.back {
  font-size: 1.4rem;
  font-weight: bold;
}
.pia {
  height: 28px !important;
  padding: 0 10px !important;
  font-weight: bold;
}

.product-name-container {
  display: flex;
  justify-content: start;
  align-items: center;
}
.product-name-container .v-btn {
  min-width: 40px;
}
.name {
  font-size: 2rem;
  padding: 0;
}
.brand {
  margin: 0;
}
.price {
  font-size: 1.5rem;
  font-family: 'Space Mono';
  font-weight: bold;
}
.description {
  font-family: 'BMHANNApro';
}
.color-text {
  font-family: 'BMHANNApro';
  font-size: 1.5rem;
  margin: 0;
}
.color-btn {
  display: flex;
  justify-content: start;
  align-items: center;
}
.color-btn * {
  padding: 0 3px;
}
.color-btn .v-btn {
  min-width: 30px !important;
}

.size-content-container {
  margin: 0 0 10px 0;
}
.size-text {
  font-family: 'BMHANNApro';
  font-size: 1.5rem;
  margin-bottom: 0;
}
.size-btn {
  display: flex;
  justify-content: start;
  align-items: center;
}
.size-btn .v-btn {
  padding: 0 5px !important;
  min-width: 20px !important;
  font-size: 1.2rem;
  font-family: 'Space Mono';
}
.question-mark:hover {
  cursor: default;
}
.size-information {
  background-color: red;
  width: 300px;
  height: 300px;
  padding: 10px;
  position: absolute;
  top: 155px;
  left: 20px;
}
.cart-btn .v-btn {
  text-align: center;
  padding: 0 25% !important;
  font-size: 1.5rem;
  font-family: 'BMHANNApro';
  font-weight: bold;
}
.review-and-qna-btn-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.review-and-qna-btn-container .v-btn {
  min-width: 100px !important;
  border-top: 1px solid #363636;
  font-family: 'BMHANNApro';
  font-weight: bold;
}
.review-and-qna-content-container {
  background-color: #363636;
  color: #d8cfc7;
  padding: 10px;
  margin-top: -10px;
}
.theme--dark .review-and-qna-content-container {
  background-color: #d8cfc7;
  color: #363636;
}
.review-and-qna-content-container .v-btn {
  font-family: 'BMHANNApro';
  min-width: 100px !important;
  height: 2rem;
}
</style>
