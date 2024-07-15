import React from "react";
import { useState } from "react";
import styled from "styled-components";

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const handleClickToggleBtn = () => {
        setIsOn(!isOn);
    };
    return (
        <ToggleContainer>
            <ToggleWrapper onClick={handleClickToggleBtn}>
                <div className={isOn ? "toggle-wrapper toggle--checked" : "toggle-wrapper"} />
                <div className={isOn ? "toggle-circle toggle--checked" : "toggle-circle"} />
                <Desc>{isOn ? "전문가" : "사용자"}</Desc>
            </ToggleWrapper>
        </ToggleContainer>
    );
}

export default Toggle;

const ToggleContainer = styled.div``;
const ToggleWrapper = styled.div`
    width: 6rem;
    height: 2.5rem;

    position: absolute;
    top: 38%;
    left: 15%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    > .toggle-wrapper {
        width: 100%;
        height: 100%;

        border: 1px solid grey;
        transition: 0.4s;

        border-radius: 30px;
        background-color: #8b8b8b;

        &.toggle--checked {
            background-color: #6666ff;
            transition: 0.4s;
        }
    }

    > .toggle-circle {
        width: 22px;
        height: 22px;

        transition: 0.4s;
        position: absolute;
        top: 1px;
        left: 1px;

        border-radius: 50%;
        background-color: #ffffff;

        &.toggle--checked {
            left: 27px;
            transition: 0.4s;
        }
    }
`;

const Desc = styled.div`
    font-size: 1.6rem;
    text-align: center;
    margin-top: 0.5rem;
`;
