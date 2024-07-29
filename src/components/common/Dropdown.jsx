import React, { useState } from "react";
import { styled } from "styled-components";

function Dropdown({ text }) {
    const [option, setOption] = useState("");

    const handleOnChange = (e) => {
        console.log("변경된 값: ", e.target.value);
        setOption(e.target.value);
    };

    return (
        <DropdownWrapper>
            <DropdownBox>
                <select value={option} onChange={handleOnChange}>
                    <option key={"현대"}>현대</option>
                    <option key={"기아"}>기아</option>
                    <option key={"르노삼성"}>르노삼성</option>
                </select>
            </DropdownBox>
        </DropdownWrapper>
    );
}

export default Dropdown;

const DropdownWrapper = styled.div`
    width: calc(100% - 10rem);
`;

const DropdownBox = styled.div``;
