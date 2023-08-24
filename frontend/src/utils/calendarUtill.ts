import dayjs, { Dayjs } from "dayjs";
/**
 * 対象の月のカレンダーに表示する全ての日付データの配列を返す
 */
export const getMonthlyDateList = (date: Dayjs): Dayjs[] => {
  const dateList: Dayjs[] = [];
  for (let i = date.startOf("M").date(); i < date.endOf("M").date(); i++) {
    if (i === date.startOf("M").date()) {
      dateList.push(date.startOf("M"));
      dateList.push(date.startOf("M").add(i, "day"));
    } else {
      dateList.push(date.startOf("M").add(i, "day"));
    }
  }
  return dateList;
};

export const defaultSchedule = {
  id: -1,
  title: "",
  date: dayjs(),
  time: dayjs(`${dayjs().format("YYYY-MM-DD")} 11:00`),
  company: {
    id: -1,
    name: "",
    url: "",
    interestFeatures: "",
  },
  jobChangeSite: {
    id: -1,
    name: "",
    url: "",
  },
  desiredLevel: 0,
  remarks: "",
} as const;
