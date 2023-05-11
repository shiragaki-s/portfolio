import { Box, FormControl, TextField } from "@mui/material";

export const RegisterSchedule = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth>
        <TextField
          name="fbname"
          id="fbname"
          label="お名前"
          placeholder="お名前"
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
          label="メールアドレス"
          placeholder="メールアドレス"
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
          label="メッセージ"
          multiline
          minRows={3}
          placeholder="メッセージ"
          variant="filled"
          margin="dense"
          size="small"
          //   InputProps={{ style: textfieldStyles }}
          //   InputLabelProps={{ style: textlabelStyles }}
          //   value={values.fbmessage}
          //   onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
};
