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
    min-width: 43rem;
    width: 100%;
`;

const HeaderBodyWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderTitle = styled.div`
    font-size: 2.75rem;
`;

const Icon = styled.img`
    width: 4rem;
    height: 4rem;
`;
