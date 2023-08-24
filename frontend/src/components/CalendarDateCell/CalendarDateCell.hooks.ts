import { Dayjs } from "dayjs";
import { MutableRefObject, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scheduleListState } from "../../stores/schedule";

export const useHoverState = (
  ref: MutableRefObject<HTMLElement | undefined>
) => {
  // 何かしらの参照を持つことが出来るhooks
  // 一番よくある使い道がHTMLの要素を直接操作する
  // document.getElementById の代わりに使うことが多い
  const [isHover, setIsHover] = useState(false);
  // useEffectとuseRefはセットで使うことが多い
  useEffect(() => {
    ref.current?.addEventListener("mouseenter", () => {
      setIsHover(true);
    });
    ref.current?.addEventListener("mouseleave", () => {
      setIsHover(false);
    });
  }, []);

  return { isHover };
};

export const useRegistModal = () => {
  const [open, setRegistModalOpen] = useState(false);
  const onClickRegistModal = () => {
    setRegistModalOpen(true);
  };
  return { open, setRegistModalOpen, onClickRegistModal };
};

export const useDateSchedules = (date: Dayjs) => {
  const schedules = useRecoilValue(scheduleListState);

  return {
    schedules: schedules.filter(
      // (schedule) => schedule.date.daysInMonth() === date.daysInMonth()
      (schedule) =>
        schedule.date.format("YYYY年MM月DD日") === date.format("YYYY年MM月DD日")
    ),
  };
};
