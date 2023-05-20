import { Schedule } from '@/types';
import dayjs from 'dayjs';
import { atom } from 'recoil';


export const scheduleListState = atom<Array<Schedule>>({
    key: 'scheduleList',
    default: [
      {
        id: "1",
        title: "カジュアル面談",
        date: dayjs('2020-11-01'),
        company: {
          name:"株式会社ABC",
          url: "https://www.abc/",
          interestFeatures: "React",
        },
        jobChangeSite: {
          name:"green",
          url:"https://www.green/"
        },
        desiredLevel: 3,
      },
      {
        id: "2",
        title:"面接",
        date: dayjs('2020-11-01'),
        company: {
          name:"株式会社DEF",
          url: "https://www.yahoo.co.jp/",
          interestFeatures: "Lambda",
        },
        jobChangeSite: {
          name: "wantedly",
          url: "https://wanted.jp"
        },
        desiredLevel: 4,
        remarks: "ホワイトそう"
      },
    ],
  });