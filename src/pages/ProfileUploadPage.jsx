import React, { useState } from "react";
import styled from "styled-components";


// Main page component
const ProfileUploadPage = () => {
    const [profile, setProfile] = useState({
        title: "",
        content: "",
        memberInfo: {
            memberType: "",
            memberEmail: "",
            memberName: "",
            gender: "",
            telNo: "",
            birthDt: ""
        },
        images: [],
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name in profile.memberInfo) {
            setProfile(prevState => ({ 
                ...prevState, 
                memberInfo: {
                    ...prevState.memberInfo,
                    [name]: value
                }
            }));
        } else {
            setProfile(prevState => ({ ...prevState, [name]: value}));
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setProfile(prevState => ({ 
            ...prevState, 
            images: [...prevState.images, { filePath: URL.createObjectURL(file) }]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted profile: ${JSON.stringify(profile, null, 2)}`);
        // TODO: make API call to upload profile
    };

    return (
        <>
        {
            <ProfileDiv>
                <ProfileMemberDiv>
                    {profile.images.length > 0 ? 
                        profile.images.map((image, index) => <Img key={index} src={image.filePath}/>) :
                        <ImageUpload>
                            <StyledInput type="file" onChange={handleImageUpload} />
                        </ImageUpload>
                    }
                    <InfoDiv>
                        <form onSubmit={handleSubmit}>
                            <StyledInput type="text" placeholder="직업 분류" name="memberType" value={profile.memberInfo.memberType} onChange={handleChange} />
                            <StyledInput type="text" placeholder="이름" name="memberName" value={profile.memberInfo.memberName} onChange={handleChange} />
                            <StyledInput type="text" placeholder="생년월일" name="birthDt" value={profile.memberInfo.birthDt} onChange={handleChange} />
                            <StyledInput type="text" placeholder="이메일" name="memberEmail" value={profile.memberInfo.memberEmail} onChange={handleChange} />
                            <StyledInput type="text" placeholder="핸드폰 번호" name="telNo" value={profile.memberInfo.telNo} onChange={handleChange} />
                            <ProfileContentDiv>
                                <StyledInput type="text" placeholder="제목" name="title" value={profile.title} onChange={handleChange} />
                                <StyledInput type="text" placeholder="내용" name="content" value={profile.content} onChange={handleChange} />
                            </ProfileContentDiv>
                            <button type="submit">프로필 등록</button>
                        </form>
                    </InfoDiv>
                </ProfileMemberDiv>
            </ProfileDiv>
        }
        </>
  );
};

const Img = styled.img`
    width: 45%;
    height: auto;
    border: 1px solid #000; //외곽선 적용
    border-radius: 10px; // 외곽선 라운딩 적용
`;
const ImageUpload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: auto;
    border: 1px solid #000;
    border-radius: 10px;
`;
const InfoDiv = styled.div`
    width: 45%;
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color : #111111;
    border: 1px solid #000; //외곽선 적용
    border-radius: 10px; // 외곽선 라운딩 적용
    padding: 20px; // 외곽선과 콘텐츠 사이의 간격 조정
`;
const ProfileDiv = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 2rem;
    overflow: auto;
    color: #111111;
    background-color: grey;
`;
const ProfileMemberDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;
const ProfileContentDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    background-color: #F0F0F0;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin-bottom: 20px;
`;
export default ProfileUploadPage;
