import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [isSatisfied, setIsSatisfied] = useState(false);
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const userId = (e) => {
        setId(e.target.value);
    };
    const userPwd = (e) => {
        setPwd(e.target.value);
    };

    useEffect(() => {
        if (id.length >= 5 && pwd.length >= 5) {
            setIsSatisfied(true);
        } else {
            setIsSatisfied(false);
        }
    }, [id, pwd]);

    const handleClickLoginButton = () => {
        if (isSatisfied) {
            navigate("/");
        }
    };

    const handleClickNotMemberButton = () => {
        navigate("/sign-up-usage");
    };

    return (
        <LoginWrapper>
            <Header />
            <BoxContainer>
                <LoginTextWrapper>
                    <LoginText>로그인</LoginText>
                </LoginTextWrapper>
                <LoginBoxContainer>
                    <LoginBoxWrapper>
                        <LoginBox type="text" placeholder="아이디" value={id} onChange={userId} />
                    </LoginBoxWrapper>
                    <LoginBoxWrapper>
                        <LoginBox type="password" placeholder="비밀번호" value={pwd} onChange={userPwd} />
                    </LoginBoxWrapper>
                </LoginBoxContainer>
            </BoxContainer>
            <LoginContainer>
                <LoginButton onClick={handleClickLoginButton} isSatisfied={isSatisfied}>
                    로그인
                </LoginButton>
                <NotMember onClick={handleClickNotMemberButton}>회원이 아닙니다.</NotMember>
            </LoginContainer>
        </LoginWrapper>
    );
}

export default Login;

const LoginWrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    padding: 2rem;
`;

const BoxContainer = styled.div`
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: rgb(245, 245, 247);
`;

const LoginTextWrapper = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 4rem;
`;

const LoginBoxWrapper = styled.div`
    width: 100%;
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
`;

const LoginBox = styled.input`
    width: 90%;
    height: 4.3rem;
    padding: 0 1rem;

    border: 0.05rem solid #9e9e9e;
    border-radius: 0.5rem;
`;

const LoginText = styled.div``;

const LoginBoxContainer = styled.div`
    width: 70%;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;
const LoginContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4rem;
`;

const LoginButton = styled.button`
    width: 100%;
    height: 6rem;

    font-weight: 300;
    font-size: 1.8rem;

    margin-top: 4rem;

    border-radius: 1rem;
    background-color: ${({ isSatisfied }) => (isSatisfied ? "#4784ff" : "#cde9f4")};
    color: white;
    cursor: ${({ isSatisfied }) => (isSatisfied ? "pointer" : "not-allowed")};
`;

const NotMember = styled.button`
    color: rgb(158, 158, 158);

    font-size: 1.4rem;
    text-decoration: underline;
    line-height: 150%;

    cursor: pointer;
`;
