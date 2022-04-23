import React, { useState } from 'react';
import { Input } from 'Components/common/Input';
import Button from 'Components/common/Button';
import { PALLETS } from 'Styles/theme';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userId: '',
    userName: '',
    profileImage: '',
  });

  const { userId, userName } = userData;

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitCheck = userId.length > 0 && userName.length > 0;

  const submitUserData = () => {
    submitCheck
      ? alert(`${userName}님 환영합니다!!`)
      : alert('아이디와 이름 모두 입력해주세요.');
    navigate('/main');
  };

  return (
    <>
      <Input
        type="text"
        name="userId"
        placeholder="Id를 입력하세요."
        onChange={handleUserInput}
      />
      <Input
        type="text"
        name="userName"
        placeholder="이름을 입력하세요."
        onChange={handleUserInput}
      />
      <Button
        Width="300px"
        Height="70px"
        fontSize="30px"
        backgroundColor={PALLETS.BLUE}
        Color={PALLETS.WHITE}
        Content="Login"
        ClickFunc={submitUserData}
        isActive={submitCheck}
      />
    </>
  );
};

export default Login;
