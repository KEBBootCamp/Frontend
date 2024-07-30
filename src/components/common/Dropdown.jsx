import React from "react";
import { styled } from "styled-components";

// 제조사 및 모델 데이터
const models = {
    현대: ["싼타페", "쏘나타", "투싼"],
    기아: ["쏘렌토", "모하비", "K5"],
    르노삼성: ["QM6", "SM6", "XM3"],
};

// 검수 장소 데이터
const locations = ["서울", "경기도", "강원도", "충청도", "전라도", "경상도"];

function Dropdown({ type, value, onChange, options }) {
    return (
        <DropdownWrapper>
            <SelectBox>
                <select value={value} onChange={onChange}>
                    <option value="">선택</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </SelectBox>
        </DropdownWrapper>
    );
}

export default Dropdown;

const DropdownWrapper = styled.div`
    display: flex;
`;

const SelectBox = styled.div`
    flex: 1;

    display: flex;
    justify-content: center;

    padding: 0.5rem;
`;
