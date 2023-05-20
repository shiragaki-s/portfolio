import { Box, Button, FormControl, TextField } from "@mui/material";

export const EditSchedule = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "80%" }}>
        <TextField
          name="fbname"
          label="面接日"
          placeholder="面接日"
          variant="filled"
          margin="dense"
          size="small"
          defaultValue={"6月1日"}
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
          defaultValue={"株式会社ABC"}
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
          defaultValue={"https://aaaaaaa/"}
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
          defaultValue={"green"}
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
          defaultValue={"https://bbbbbb/"}
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
          defaultValue={"pythonとReactを使用している"}
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
          defaultValue={"5段階"}
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
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
          defaultValue={"カジュアル面談で感触良かった"}
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
            編集
          </Button>
          <Button variant="outlined" sx={{ width: 100, padding: 1, margin: 2 }}>
            キャンセル
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
