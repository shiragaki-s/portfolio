import { Schedule } from "@/types";
import { Box, Button, FormControl, Rating, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { useScheduleList } from "../ScheduleList/ScheduleList.hooks";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


type Props = {
  handleClose: () => void;
  date:Dayjs,
}

export const RegisterSchedule = ({handleClose, date}:Props) => {
  const [newSchedule,setNewSchedule] = useState<Schedule>({
    id: "",
    title: "",
    date: date,
    time: "",
    company: {
      name:"",
      url: "",
      interestFeatures: "",
    },
    jobChangeSite: {
      name:"",
      url:"",
    },
    desiredLevel: 0,
    remarks: "",
})
  const {schedules, setSchedules} = useScheduleList()
  const [desiredLevel, setDesiredLevel] = useState(0)
  const [timeValue, setTimeValue] = useState("")
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "80%" }}>
        <Box>
          <label>面接日</label>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", margin: "auto", width: "300px" }}
            gutterBottom
          >
            {date.format("YYYY年MM月DD日")}
          </Typography>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={['TimePicker']}> */}
            <TimePicker 
              label="時間"
              value={timeValue}
              onChange={(value) => {
                if(value !== null){
                  setTimeValue(value)
                }
                console.log(value)
              }}
            />
          {/* </DemoContainer> */}
        </LocalizationProvider>
        {/* <TextField 
            name="fbname"
            label="時間"
            placeholder="面接日"
            variant="filled"
            margin="dense"
            size="small"
            onChange={(e)=>{
              newSchedule.time=e.target.value
              setNewSchedule(newSchedule)
            }}
        /> */}
        <TextField 
            name="fbname"
            label="タイトル"
            placeholder="タイトル"
            variant="filled"
            margin="dense"
            size="small"
            onChange={(e)=>{
              newSchedule.title=e.target.value
              setNewSchedule(newSchedule)
            }}
        />   
        {/* <label>面接日</label>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={"jaJP"}
          dateFormats={{ monthAndYear: "YYYY年 MM月" }}
          localeText={{
            previousMonth: "前月を表示",
            nextMonth: "次月を表示",
          }}
        >
          <DatePicker 
            value={date}
            onChange={(date)=>{dateChange}}
          />
        </LocalizationProvider> */}
        <TextField
          name="fbemail"
          id="fbemail"
          label="会社名"
          placeholder="会社名"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.company.name=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="会社公式サイト"
          placeholder="会社公式サイト"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.company.url=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="転職サイト"
          placeholder="転職サイト"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.jobChangeSite.name=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="求人内容 URL"
          placeholder="求人内容 URL"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.jobChangeSite.url=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="求人内容の気になる点"
          multiline
          minRows={3}
          placeholder="求人内容の気になる点"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.company.interestFeatures=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <label>希望度</label>
        <Rating
          name="simple-controlled"
          value={desiredLevel}
          onChange={(event, newValue) => {
            if( newValue !== null){
              setDesiredLevel(newValue);
            }
          }}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="備考欄"
          multiline
          minRows={3}
          placeholder="備考欄"
          variant="filled"
          margin="dense"
          size="small"
          onChange={(e)=>{
            newSchedule.remarks=e.target.value
            setNewSchedule(newSchedule)
          }}
        />
        <Box display={"flex"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 100, padding: 1, margin: 2 }}
            onClick={()=>{
              newSchedule.date = date
              newSchedule.time = dayjs(timeValue).format("HH時MM分")
              newSchedule.desiredLevel = desiredLevel
              newSchedule.id = (schedules.length+1).toString()
              console.log(newSchedule)
              setSchedules([...schedules, newSchedule])
              handleClose()
            }}
          >
            登録
          </Button>
          <Button 
            variant="outlined" 
            sx={{ width: 100, padding: 1, margin: 2 }}
            onClick={() => {
              setNewSchedule({
                id: "",
                title: "",
                date: date,
                time: "",
                company: {
                  name:"",
                  url: "",
                  interestFeatures: "",
                },
                jobChangeSite: {
                  name:"",
                  url:"",
                },
                desiredLevel: 0,
                remarks: "",
              })
            }}
          >
            キャンセル
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
