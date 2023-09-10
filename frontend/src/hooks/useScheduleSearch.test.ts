import dayjs from "dayjs";
import { ScheduleCondition } from "../pages/scheduleList";
import { useScheduleSearch } from "./useScheduleSearch";

describe("executeSearch", () => {
  const { executeSearch } = useScheduleSearch();
  it("期間検索（開始日時のみ指定）", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: dayjs("2023-08-01"),
      endDate: null,
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: null,
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
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: dayjs("2023-09-01"),
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: null,
    };
    const shedules = [
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-31"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-31 12:00"),
        title: "テストA",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-01"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-01 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-02"),
        desiredLevel: 4,
        id: 3,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-02 14:15"),
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
        date: dayjs("2023-08-31"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-31 12:00"),
        title: "テストA",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-01"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-01 14:15"),
        title: "テスト削除",
      },
    ]);
  });
  it("期間検索（開始期間から終了日時）", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: dayjs("2023-08-25"),
      endDate: dayjs("2023-09-01"),
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: null,
    };
    const shedules = [
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-24"),
        desiredLevel: 1,
        id: 1,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-24 12:00"),
        title: "テストA",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-25"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-25 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-01"),
        desiredLevel: 4,
        id: 3,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-01 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-02"),
        desiredLevel: 4,
        id: 3,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-02 14:15"),
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
        date: dayjs("2023-08-25"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-25 14:15"),
        title: "テスト削除",
      },
      {
        company: {
          id: 1,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-09-01"),
        desiredLevel: 4,
        id: 3,
        jobChangeSite: {
          id: 1,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-09-01 14:15"),
        title: "テスト削除",
      },
    ]);
  });
  it("タイトル検索（部分検索）", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: null,
      companyId: null,
      jobChangeSiteId: null,
      title: "A",
      desiredLevel: null,
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
  it("会社検索", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: null,
      companyId: 1,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: null,
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
          id: 2,
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
    ]);
  });
  it("転職サイト検索", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: null,
      companyId: null,
      jobChangeSiteId: 1,
      title: "",
      desiredLevel: null,
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
          id: 2,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 3,
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
    ]);
  });
  it("希望度検索", () => {
    const scheduleCondition: ScheduleCondition = {
      startDate: null,
      endDate: null,
      companyId: null,
      jobChangeSiteId: null,
      title: "",
      desiredLevel: 4,
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
          id: 2,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 3,
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
          id: 2,
          interestFeatures: "Lambda",
          name: "株式会社",
          url: "https://www.yahoo.co.jp/",
        },
        date: dayjs("2023-08-02"),
        desiredLevel: 4,
        id: 2,
        jobChangeSite: {
          id: 3,
          name: "wantedly",
          url: "https://wanted.jp",
        },
        remarks: "ブラック",
        time: dayjs("2023-08-02 14:15"),
        title: "テストC",
      },
    ]);
  });
});
