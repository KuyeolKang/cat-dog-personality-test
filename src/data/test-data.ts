// 고양이상 vs 강아지상 테스트 데이터

export interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    type: 'C' | 'D';
  }>;
}

export interface Product {
  name: string;
  reason: string;
  link: string;
}

export interface Result {
  emoji: string;
  name: string;
  description: string;
  characteristics: string[];
  products: Product[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "친구들과 모임이 있는 날, 당신의 마음은?",
    options: [
      { text: "즐겁지만 집에 가면 혼자만의 시간이 필요해", type: "C" },
      { text: "신나! 오늘 늦게까지 놀아야지", type: "D" }
    ]
  },
  {
    id: 2,
    question: "마음에 드는 사람이 생겼을 때 당신은?",
    options: [
      { text: "티 안 내고 은근히 관심을 보낸다", type: "C" },
      { text: "적극적으로 다가가고 먼저 연락한다", type: "D" }
    ]
  },
  {
    id: 3,
    question: "주말에 가장 하고 싶은 것은?",
    options: [
      { text: "집에서 넷플릭스 보며 혼자만의 시간 보내기", type: "C" },
      { text: "친구들 만나서 맛집 탐방하기", type: "D" }
    ]
  },
  {
    id: 4,
    question: "새로운 사람을 만났을 때 당신은?",
    options: [
      { text: "경계하며 천천히 알아가는 편", type: "C" },
      { text: "금방 친해지고 말을 잘 건다", type: "D" }
    ]
  },
  {
    id: 5,
    question: "연인에게 애정 표현을 할 때?",
    options: [
      { text: "말보다는 행동으로, 은근하게 표현한다", type: "C" },
      { text: "좋아한다고 자주 말하고 스킨십도 많이 한다", type: "D" }
    ]
  },
  {
    id: 6,
    question: "화가 났을 때 당신의 반응은?",
    options: [
      { text: "혼자 있으면서 감정을 정리한다", type: "C" },
      { text: "바로 표현하거나 누군가에게 털어놓는다", type: "D" }
    ]
  },
  {
    id: 7,
    question: "여행 스타일은?",
    options: [
      { text: "여유롭게 카페에서 책 읽으며 힐링", type: "C" },
      { text: "이곳저곳 돌아다니며 액티비티 즐기기", type: "D" }
    ]
  },
  {
    id: 8,
    question: "친구의 고민을 들을 때?",
    options: [
      { text: "조용히 들어주고 필요할 때만 조언한다", type: "C" },
      { text: "적극적으로 공감하며 같이 해결책을 찾는다", type: "D" }
    ]
  },
  {
    id: 9,
    question: "SNS 사용 스타일은?",
    options: [
      { text: "눈팅 위주, 가끔 올리는 편", type: "C" },
      { text: "일상을 자주 공유하고 댓글도 활발히", type: "D" }
    ]
  },
  {
    id: 10,
    question: "칭찬을 받았을 때 당신은?",
    options: [
      { text: "쑥스러워서 대충 넘긴다", type: "C" },
      { text: "기분 좋게 받아들이고 고맙다고 표현한다", type: "D" }
    ]
  }
];

export const results: Record<'C' | 'D', Result> = {
  C: {
    emoji: "🐱",
    name: "고양이상",
    description: "당신은 도도하고 독립적인 고양이상입니다! 혼자만의 시간을 소중히 여기고, 쉽게 마음을 열지 않지만 한번 마음을 연 사람에게는 깊은 애정을 보여주는 타입이에요. 미스터리한 매력으로 사람들의 관심을 끄는 당신!",
    characteristics: [
      "혼자만의 시간이 꼭 필요한 타입",
      "소수의 깊은 관계를 선호",
      "감정 표현이 절제되어 있지만 속은 따뜻함",
      "독립적이고 자기 주관이 뚜렷함",
      "예측 불가능한 매력의 소유자"
    ],
    products: [
      {
        name: "아로마 디퓨저",
        reason: "혼자만의 힐링 시간을 위한 필수템",
        link: "https://link.coupang.com/a/dE2ZHi"
      },
      {
        name: "프리미엄 담요/블랭킷",
        reason: "집에서 넷플릭스 볼 때 포근하게",
        link: "https://link.coupang.com/a/dE22s5"
      },
      {
        name: "무선 이어폰",
        reason: "나만의 세계에 빠질 때 필수",
        link: "https://link.coupang.com/a/dE222I"
      }
    ]
  },
  D: {
    emoji: "🐶",
    name: "강아지상",
    description: "당신은 활발하고 사교적인 강아지상입니다! 사람들과 함께하는 것을 좋아하고, 감정 표현이 솔직해서 주변 사람들에게 사랑받는 타입이에요. 밝은 에너지로 분위기 메이커 역할을 하는 당신!",
    characteristics: [
      "사람들과 어울리는 것을 좋아함",
      "감정 표현이 솔직하고 적극적",
      "먼저 다가가고 친해지는 데 시간이 안 걸림",
      "충성심이 강하고 의리 있음",
      "밝고 긍정적인 에너지의 소유자"
    ],
    products: [
      {
        name: "보조배터리 대용량",
        reason: "활발한 외출에 필수! 배터리 걱정 없이",
        link: "https://link.coupang.com/a/dE23JE"
      },
      {
        name: "트렌디한 크로스백",
        reason: "가볍게 외출할 때 센스있게",
        link: "https://link.coupang.com/a/dE24DQ"
      },
      {
        name: "블루투스 스피커",
        reason: "친구들과 함께 음악 들으며 분위기 UP",
        link: "https://link.coupang.com/a/dE25n4"
      }
    ]
  }
};
