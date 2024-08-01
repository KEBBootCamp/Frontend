import React from "react";
import { styled } from "styled-components";

function Dropdown({ width, value, onChange, options }) {
    return (
        <DropdownWrapper width={width}>
            <SelectBox>
                <StyledSelect value={value} onChange={onChange}>
                    <option value="">선택</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </StyledSelect>
            </SelectBox>
        </DropdownWrapper>
    );
}

export default Dropdown;

const DropdownWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin: 1rem 0;
    width: ${(props) => props.width || "auto"};
`;

const SelectBox = styled.div`
    flex: 1;
    max-width: 12rem;

    padding: 0.5rem;
`;

const StyledSelect = styled.select`
    width: 100%;

    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #333;
    font-size: 1.3rem;

    cursor: pointer;
`;
