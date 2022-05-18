import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContextUser } from "../context/User-Context";

const Header = () => {
    const { userData, updateUserData } = useContext(ContextUser);
    console.log("userData", userData);
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo
                    src={require("../assets/images/logo.svg").default}
                    alt="Logo"
                />
            </Link>
            <RightContainer>
                {userData ? (
                    <LoginButton to=""
                        onClick={() => {
                            updateUserData({ type: "LOGOUT" });
                        }}
                    >
                        Logout
                    </LoginButton>
                ) : (
                    <>
                        <LoginButton to="/auth/login/">Login</LoginButton>
                        <LoginButton to="/auth/create/">Register</LoginButton>
                    </>
                )}
            </RightContainer>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.img`
    width: 150px;
    display: block;
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
`;
// const SearchForm = styled.form`
//     &::after {
//         content: "";
//         width: 16px;
//         height: 16px;
//         background: url(${require("../assets/images/search.svg").default});
//         display: inline-block;
//         position: absolute;
//         left: 10px;
//         top: 15px;
//     }
//     position: relative;
//     margin-right: 20px;
// `;
// const SearchInput = styled.input`
//     padding: 15px 35px;
//     width: 250px;
//     outline: none;
//     border: none;
//     appearance: none;
//     background: #f5f5f5;
//     border-radius: 4px;
// font-size: 16px;
// `;
const LoginButton = styled(Link)`
    background: #046bf6;
    border-radius: 4px;
    padding: 13px 45px;
    color: #fff;
    font-size: 18px;
    margin-left: 15px;
    border-radius: 4px;
    font-weight: bold;
`;

export default Header;
