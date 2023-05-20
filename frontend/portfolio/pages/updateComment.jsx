// import { RegisterSchedule } from "@/components/RegisterSchedule/RegisterSchedule";
import {  Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import Modal from 'react-modal';

export default function updateComment() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetData, setTargetData] = useState({
    id: "",
    name: "",
    comment: ""
  });
  const [textComment, setTextComment] = useState("");
  
  const datas = [
    {
      id: "1111",
      name: "パターン１",
      comment: ""
    },
    {
      id: "2222",
      name: "パターン2",
      comment: "test2"
    },
    {
      id: "3333",
      name: "パターン3",
      comment: "test3"
    },
    {
      id: "4444",
      name: "パターン4",
      comment: "test4"
    }
  ];
  const [updateDatas, setUpdateDatas] = useState(datas)
  return <div>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>id</TableCell>
        <TableCell>名前</TableCell>
        <TableCell>コメント</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {updateDatas.map((data) => (
        <TableRow key={data.id}>
          <TableCell>{data.id}</TableCell>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.comment}</TableCell>
          <TableCell>
            <button
              onClick={() => {
                setTargetData(data);
                setIsOpen(true);
              }}
            >
              編集
            </button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  <Modal isOpen={isOpen}>
    <div>
      <h1>コメント編集</h1>
      <textarea
        defaultValue={targetData.comment}
        onChange={(e) => {
          setTextComment(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          const dataList = []
          updateDatas.map((data)=>{
            if (textComment!==""&&targetData.id=== data.id){
              data.comment=textComment
            }
            if (textComment===""&&targetData.id=== data.id&&targetData.comment!==""){
              data.comment=textComment
            }

            dataList.push(data)
          })
          setUpdateDatas(dataList)
          setIsOpen(false);
        }}
      >
        保存
      </button>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        キャンセル
      </button>
    </div>
  </Modal>
</div>;
}
