import dayjs from "dayjs";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNewsCategory } from "@/stores";

export const WordCloudTitle = () => {
  const { date, setDate, resetText } = useNewsCategory();

  return (
    <Container>
      <h1>
        &nbsp;&nbsp;{dayjs(date).get("month") + 1}월 {dayjs(date).get("date")}일 <Span>인기 키워드</Span>
      </h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box width={168}>
          <DatePicker
            value={dayjs(date)}
            format="YYYY-MM-DD"
            slotProps={{ textField: { size: "small" } }}
            maxDate={dayjs()}
            onChange={e => {
              setDate(dayjs(e).format("YYYY-MM-DD"));
              resetText();
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
