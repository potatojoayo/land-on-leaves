<template>
  <div>
    <AboutItem
      v-for="(item, index) in itemList"
      :key="index"
      :img="item.img"
      :text-list="item.textList"
      :index="index"
    ></AboutItem>
  </div>
</template>

<script>
import Vue from 'vue'
import AboutItem from '../components/about/AboutItem.vue'
export default Vue.extend({
  components: {
    AboutItem,
  },
  layout: 'about',
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
})
</script>

<style></style>
