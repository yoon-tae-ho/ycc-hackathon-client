import { atom } from "recoil";

export const korea = {
  topic0: ["경영수학", "오퍼레이션스관리", "중급회계1"],
  topic1: ["디지털플랫폼비즈니스", "동아시아근대사", "인터페이스디자인"],
  topic2: [
    "기초간호과학1",
    "소비자행동",
    "자료구조",
    "논리설계",
    "데이터분석을위한프로그래밍언어",
  ],
  topic3: ["경영정보시스템", "운영체제", "데이터베이스시스템"],
  topic4: ["간호연구방법론", "역사교과논리및논술", "서양사사료학습론"],
  topic5: ["한중관계사", "2D기초조형", "3D그래픽스"],
  topic6: ["성인간호학실습1", "기계학습"],
  topic7: [
    "기초간호과학4",
    "생명윤리",
    "한일교섭의역사",
    "중국현대사",
    "동남아시아사",
    "4D컴퓨터그래픽",
    "디자인세미나",
  ],
};
export const yonsei = {
  topic0: ["간호학IV", "영양과 식이", "식품영양과체형 ", "대중음악의이해 "],
  topic1: ["영양생리학 ", "비만관리를위한식이조절과운동"],
  topic2: [
    "의류디자인",
    "UT세미나(패션시장과소비자욕구) ",
    "패션디자인 ",
    "패션디자인과제작기법 ",
    "디자인비즈니스 ",
  ],
  topic3: [
    "의류산업과패션 ",
    "UT세미나(메타버스와커뮤니케이션디자인)",
    "운동생리학(1) ",
    "운동역학(2)",
  ],
  topic4: ["병태생리학", "시창.청음(4)"],
  topic5: ["약리학", "화성학(2)", "패션일러스트레이션 "],
  topic6: ["식품미생물학", "입체패턴설계", "체력육성"],
  topic7: [
    "영양사현장실습",
    "음성학 ",
    "실내악(피아노)",
    "피아노문헌(2) ",
    "피아노교수법(2)",
    "음악사",
    "물리치료실습 ",
    "호신술",
  ],
  topic8: [
    "영양교육및상담 ",
    "UT세미나(운동생리학의과학적기초) ",
    "UT세미나(스포츠심리학의응용) ",
  ],
};

export const mileageReadyState = atom({
  key: "mileageReady",
  default: false,
});

export const mileageState = atom({
  key: "mileage",
  default: {},
});

export const searchReadyState = atom({
  key: "searchReady",
  default: false,
});

export const searchState = atom({
  key: "search",
  default: {},
});

export const syllabusLectureReady = atom({
  key: "syllabusLectureReady",
  default: false,
});

export const syllabusLecture = atom({
  key: "syllabusLecture",
  default: {},
});

export const mileageLectureReady = atom({
  key: "mileageLectureReady",
  default: false,
});

export const mileageLecture = atom({
  key: "mileageLecture",
  default: {},
});
