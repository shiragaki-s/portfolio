import { Box, Button, FormControl, Rating, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const RegisterSchedule = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "80%" }}>
        <label>面接日</label>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={"jaJP"}
          dateFormats={{ monthAndYear: "YYYY年 MM月" }}
          localeText={{
            previousMonth: "前月を表示",
            nextMonth: "次月を表示",
          }}
        >
          <DatePicker />
        </LocalizationProvider>
        <TextField 
            name="fbname"
            label="面接日"
            placeholder="面接日"
            variant="filled"
            margin="dense"
            size="small"
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={"jaJP"}
            dateFormats={{ monthAndYear: "YYYY年 MM月" }}
            localeText={{
              previousMonth: "前月を表示",
              nextMonth: "次月を表示",
            }}
          >
            <DatePicker />
          </LocalizationProvider>
        </TextField>
        <TextField
          name="fbname"
          label="面接日"
          placeholder="面接日"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbname}
          //   onChange={handleChange}
        />
        <TextField
          name="fbemail"
          id="fbemail"
          label="会社名"
          placeholder="会社名"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbemail}
          //   onChange={handleChange}
          //   error={((regexpEmail.test(values.email) && (values.email)) || !(values.email)) ? false : true}
          //   helperText={((regexpEmail.test(values.fbemail) && (values.fbemail)) || !(values.fbemail)) ? null : "Incorrect Email address format."}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="会社公式サイト"
          placeholder="会社公式サイト"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="転職サイト"
          placeholder="転職サイト"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="求人内容 URL"
          placeholder="求人内容 URL"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
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
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
        <TextField
          name="fbmessage"
          id="fbmessage"
          label="希望度"
          placeholder="希望度"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
        <Rating
          name="simple-controlled"
          value={3}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
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
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
        <Box display={"flex"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: 100, padding: 1, margin: 2 }}
          >
            登録
          </Button>
          <Button variant="outlined" sx={{ width: 100, padding: 1, margin: 2 }}>
            キャンセル
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
