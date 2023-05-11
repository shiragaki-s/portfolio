import Image from "next/image";
import { Inter } from "next/font/google";
import { ScheduleList } from "@/components/Schedule/ScheduleList";
// @を使わないと全部相対パスで書く
// import { Inter } from '../../../hoge'
// @を使うと、基点のフォルダからのパスだけでいい
// import { Inter } from '@/components/hoge'

const inter = Inter({ subsets: ["latin"] });

export default function scheduleList() {
  return <ScheduleList />;
}
