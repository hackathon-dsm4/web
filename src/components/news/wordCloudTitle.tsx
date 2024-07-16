import { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const WordCloudTitle = () => {
  const [value, setValue] = useState({
    selected: "",
    recent: "",
    last: "",
  });

  const onChange = (newValue: string) => {
    setValue(old => ({ ...old, selected: dateFormat(newValue) }));
  };
  const dateFormat = (data: string) => {
    return dayjs(data).format("YYYY-MM-DD");
  };

  return (
    <Container>
      <h1>
        &nbsp;&nbsp;{dayjs(new Date("2024-07-24")).get("month") + 1}월 {dayjs("2024-07-24").get("date")}일{" "}
        <Span>인기 키워드</Span>
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box width={168}>
          <DatePicker
            value={dayjs(new Date("2024-07-24"))}
            format="YYYY-MM-DD"
            slotProps={{ textField: { size: "small" } }}
            minDate={dayjs(value.last)}
            maxDate={dayjs(value.recent)}
            onChange={e => {
              onChange("");
            }}
          />
        </Box>
      </LocalizationProvider>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 auto;
  line-height: 0.5;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  font-size: 24px;
  display: inline;
`;
