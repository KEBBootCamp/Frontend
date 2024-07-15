import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { IcCalendar } from "../../assets/svg/icon";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <DatePickerWrapper>
            <DatePicker
                dateFormat="yyyy-MM-dd" // 날짜 형태
                locale={ko}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()} //현재 날짜 이전은 모두 선택 불가
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                // className={styles.datePicker}
            />
            <StyledCalendar />
        </DatePickerWrapper>
    );
};

export default Calendar;

const DatePickerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    color: white;
    cursor: pointer;

    padding: 2rem;
`;

const StyledCalendar = styled(IcCalendar)`
    width: 2rem;
    height: 2rem;
`;
