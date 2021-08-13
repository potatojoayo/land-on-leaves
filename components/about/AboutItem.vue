<template>
  <div>
    <v-parallax
      height="950"
      :src="require(`@/assets/images/${img}.png`)"
      :class="'image' + index"
      @scroll="handleScroll"
    >
      <div
        class="
          invisible
          description-container
          primary--text
        "
      >
        <h4 class="subheading">{{ textList[1] }}</h4>
        <pre class="about-description">{{
          textList[0]
        }}</pre>
        <button>{{ textList[2] }}</button>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String, required: true },
    textList: { type: Array, required: true },

    index: { type: Number, required: true },
  },

  mounted() {
    for (let i = 0; i < 3; i++) {
      document.querySelector(
        `.image${i + 3}`
      ).childNodes[1].childNodes[0].className =
        'invisible description-container secondary--text'
    }
    window.scrollTo(0, 0)
    document
      .querySelector(`.image0`)
      .querySelector('.description-container')
      .classList.remove('invisible')

    document
      .querySelector(`.image0`)
      .querySelector('.description-container')
      .classList.add('visible')
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop =
        document.querySelector(`.image0`).scrollHeight
      const pageNumber = Math.round(
        window.scrollY / scrollTop
      )
      const image = document.querySelector(
        `.image${pageNumber}`
      ).childNodes[1].childNodes[0].classList

      if (
        scrollTop / 100 < window.scrollY % scrollTop &&
        pageNumber > 0
      ) {
        image.remove('invisible')
        image.add('visible')
      }
    },
  },
}
</script>

<style>
.invisible {
  opacity: 0;
  transform: translateY(100px);
}
.visible {
  transition-property: opacity top;
  transition-duration: 1s;
  transition-timing-function: ease;
  opacity: 1;
  transform: translateY(0);
}
.about-description {
  font-size: 2.5rem;
  font-family: 'BMHANNApro';
  font-weight: light;
}
.description-container {
  position: absolute;
}

.image0 h4 {
  font-family: 'Space Mono';
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 30px;
}
.image0 .description-container {
  top: 10%;
  right: 35%;
}
.image1 .description-container {
  top: 30%;
  right: 35%;
}

.image2 .description-container {
  top: 10%;
  right: 28%;
}
.image3 .description-container {
  top: 35%;
  right: 35%;
  text-align: center;
}

.image4 .description-container {
  bottom: 9%;
  right: 20%;
}
.image5 .description-container {
  top: 20%;
  right: 30%;
}

.image6 .description-container {
  top: 30%;
  right: 40%;
}
.image7 .description-container {
  bottom: 12%;
  right: 20%;
}
.image7 button {
  position: absolute;
  top: 130%;
  right: 40%;
  color: #d8cfc7;
  background-color: #363636;
  font-size: 1.5rem;
  font-family: 'BMHANNApro';
  font-weight: 600;
  padding: 0 30px;
}
</style>
