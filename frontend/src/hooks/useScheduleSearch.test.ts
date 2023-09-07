import dayjs from "dayjs";
import { ScheduleCondition } from "../pages/scheduleList";
import { useScheduleSearch } from "./useScheduleSearch";

describe("executeSearch", () => {
  const { executeSearch } = useScheduleSearch();
  it("期間検索（開始日時のみ指定）", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: dayjs("2023-08-01"),
      endDate: null,
      companyName: "",
      jobChangeSiteName: "",
      title: "",
    };
    const shedules = [
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-07-05"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-07-05 12:00"),
        title: "テストA",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-01"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-01 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-02 14:15"),
        title: "テスト削除",
      },
    ];
    const result = executeSearch(scheduleCondition, shedules);
    expect(result).toStrictEqual([
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-01"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-01 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-02 14:15"),
        title: "テスト削除",
      },
    ]);
  });
  it("期間検索（終了日時のみ指定）", () => {
    expect(1 + 1).toBe(2);
  });
  it("タイトル検索（部分検索）", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: null,
      companyName: "",
      jobChangeSiteName: "",
      title: "A",
    };
    const shedules = [
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-07-05"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-07-05 12:00"),
        title: "テストA",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-01"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-01 14:15"),
        title: "テストB",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-02 14:15"),
        title: "テストC",
      },
    ];
    const result = executeSearch(scheduleCondition, shedules);
    expect(result).toStrictEqual([
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-07-05"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-07-05 12:00"),
        title: "テストA",
      },
    ]);
  });
});
