<template>
  <div>
    <v-parallax
      height="950"
      v-for="(item, index) in itemList"
      v-bind:key="index"
      :class="'image' + index"
      :src="require(`@/assets/images/${item.img}.png`)"
    >
      <div class="description-container">
        <h4 class="subheading primary--text">
          {{ item.textList[1] }}
        </h4>
        <p class="primary--text about-description">
          {{ item.textList[0] }}
        </p>
        <button>{{ item.textList[2] }}</button>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
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
            '패스트패션의 영향으로\n 매년 약 10억 벌 가량의 옷이 버려집니다.',
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
            '환경오염 뿐만이 아닙니다.\n 비윤리적인 노동 착취 또한 공공연하게 행해집니다.',
          ],
        },
        {
          img: 'leaves',
          textList: [
            '저희 LAND ON LEAVES는 \n 모두가 건강하게 공존하는 세상을 지향합니다.',
            '저희는 윤리적이고 자연친화적인 생산과정을 통해 생산된 상품만을 소개해 드립니다.',
          ],
        },
        {
          img: 'leavesinwater',
          textList: [
            '지속가능한 의류 산업에 저희와 함께 해 주세요.',
            ,
            '참여하기',
          ],
        },
      ],
    }
  },
}
</script>

<style>
.about-description {
  font-size: 2.5rem;
  font-family: 'BMHANNApro';
  font-weight: light;
}

.image0 h4 {
  font-family: 'Space Mono';
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 30px;
}
.image0 .description-container {
  position: absolute;
  top: 10%;
  right: 35%;
}
.image1 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}

.image2 .description-container {
  position: absolute;
  top: 10%;
  right: 28%;
}
.image3 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}
.image3 p {
  color: #d8cfc7 !important;
}
.image1 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}
.image1 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}
.image1 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}
.image1 .description-container {
  position: absolute;
  top: 30%;
  right: 35%;
}
</style>
