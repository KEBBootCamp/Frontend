import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
import { api } from "../libs/api";

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
            console.log("User ID:", id);
            console.log("Password:", pwd);

            api.post("/users/login", { userId: id, userPwd: pwd }, { withCredentials: true })
                .then((res) => {
                    const { isExpert } = res.data.user;
                    // userType을 sessionStorage에 저장
                    sessionStorage.setItem("userType", isExpert ? "expert" : "user");
                    // 로그인 후 페이지 이동
                    if (isExpert) {
                        navigate("/expert-my-page");
                    } else {
                        navigate("/");
                    }
                })
                .catch((err) => {
                    navigate("/login-please");
                });
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
                <LoginButton onClick={handleClickLoginButton} $isSatisfied={isSatisfied}>
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
    width: 100%;
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    border-radius: 1rem;
    margin-top: 3rem;

    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LoginTextWrapper = styled.div`
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

    border: 1px solid #ccc;
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
    background-color: ${({ $isSatisfied }) => ($isSatisfied ? "#4784ff" : "#cde9f4")};
    color: white;
`;

const NotMember = styled.button`
    color: rgb(158, 158, 158);

    font-size: 1.4rem;
    text-decoration: underline;
    line-height: 150%;

    margin-top: 0.5rem;
    cursor: pointer;
`;
