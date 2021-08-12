<template>
  <div>
    <v-parallax
      v-for="(item, index) in itemList"
      :key="index"
      height="950"
      :class="'image' + index"
      :src="require(`@/assets/images/${item.img}.png`)"
      @scroll="handleScroll"
    >
      <div
        class="
          invisible
          description-container
          primary--text
        "
      >
        <h4 class="subheading">
          {{ item.textList[1] }}
        </h4>
        <pre class="about-description">
          {{ item.textList[0] }}
        </pre>
        <button>{{ item.textList[2] }}</button>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      const scrollTop =
        document.querySelector(`.image0`).scrollHeight //950
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
  data() {
    return {
      itemList: [
        {
          img: 'leap',
          textList: [
            '자연은 우리의 소유물이 아닙니다.',
            'LANDONLEAVES',
          ],
        },
        {
          img: 'smoke',
          textList: ['환경은 끊임없이 파괴되고 있습니다.'],
        },
        {
          img: 'onsilgas',
          textList: [
            '전 세계 온실가스 배출량의 10%가 패션 산업에서 나옵니다.',
          ],
        },
        {
          img: 'trash_clothes',
          textList: [
            `패스트패션의 영향으로
	매년 약 10억 벌 가량의 옷이 버려집니다.`,
          ],
        },
        {
          img: 'trash_plastics',
          textList: [
            '버려진 옷으로부터 쏟아져 나온 플라스틱 폐기물들은 바다를 더럽힙니다.',
          ],
        },
        {
          img: 'unethical_work',
          textList: [
            `			환경오염 뿐만이 아닙니다.
비윤리적인 노동 착취 또한 공공연하게 행해집니다.`,
          ],
        },
        {
          img: 'leaves',
          textList: [
            `      저희 LAND ON LEAVES는
			  모두가 건강하게 공존하는 세상을 지향합니다.

              저희는 윤리적이고 자연친화적인
			  생산과정을 통해 생산된 상품만을 소개해 드립니다.`,
          ],
        },
        {
          img: 'leavesinwater',
          textList: [
            '지속가능한 의류 산업에 저희와 함께 해 주세요.',
            '',
            '참여하기',
          ],
        },
      ],
    }
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
    console.log(document.querySelector('.image0'))
    window.addEventListener('scroll', this.handleScroll)
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
  bottom: 0;
  right: 40%;
  color: #d8cfc7;
  background-color: #363636;
  font-size: 1.5rem;
  font-family: 'BMHANNApro';
  font-weight: 600;
  padding: 0 30px;
}
</style>
