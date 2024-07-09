import React from "react";
import styled from "styled-components";
import { Ic24 } from "../../assets/png/icon";

function Header() {
    return (
        <HeaderWrapper>
            <HeaderBodyWrapper>
                <HeaderTitle>검수</HeaderTitle>
                <Icon src={Ic24} alt="icon" />
            </HeaderBodyWrapper>
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;

    /* border: 1px solid; */
`;

const HeaderBodyWrapper = styled.div`
    display: flex;
    align-items: center;

    height: 7rem;
`;

const HeaderTitle = styled.div`
    padding-left: 1rem;

    font-size: 2.75rem;
`;

const Icon = styled.img`
    width: 4rem;
    height: 4rem;
`;
