import React from "react";
import styled from "styled-components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import "./datepicker.custom.css";

const Calendar = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onDateChange(date); // 날짜 변경 시 부모 컴포넌트로 전달
    };

    return (
        <DatePickerWrapper>
            <DatePickerContainer>
                <DatePicker
                    dateFormat="yyyy-MM-dd hh:mm"
                    value={selectedDate}
                    showTimeSelect
                    locale={ko}
                    selected={selectedDate}
                    onChange={handleDateChange}
                    minDate={new Date()} //현재 날짜 이전은 모두 선택 불가
                    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                    // className={styles.datePicker}
                />
            </DatePickerContainer>
        </DatePickerWrapper>
    );
};

export default Calendar;

const DatePickerWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 1rem;
    cursor: pointer;
`;

const DatePickerContainer = styled.div`
    width: 15rem;

    padding: 0.5rem;
    background-color: white;
    border: 1px solid #ccc;
`;
