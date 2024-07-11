import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Calendar() {
    const [input, setInput] = useState({ createdDate: new Date() });

    const getStringedDate = (targetDate) => {
        // 날짜 -> YYYY-MM-DD
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate();

        if (month < 10) {
            month = `0${month}`;
        }
        if (date < 10) {
            date = `0${date}`;
        }

        return `${year}-${month}-${date}`;
    };

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    };
    return (
        <CalendarWrapper>
            <input name="createdDate" onChange={onChangeInput} value={getStringedDate(input.createdDate)} type="date" />
        </CalendarWrapper>
    );
}

export default Calendar;

const CalendarWrapper = styled.div``;
