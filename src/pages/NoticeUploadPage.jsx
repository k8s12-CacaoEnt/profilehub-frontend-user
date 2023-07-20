import React, { useState } from 'react';
import styled from 'styled-components';

const NoticeUploadPage = () => {
    const [notice, setNotice] = useState({
        noticeTitle: '',
        noticeContent: '',
        filmoType: '',
        filmoName: '',
        filmoRole: '',
        applyDeadlineDt: '',
        filmingStartPeriod: '',
        filmingEndPeriod: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNotice(prevState => ({ ...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // API call to upload the notice
        console.log(`Submitted notice: ${JSON.stringify(notice, null, 2)}`);
        // await uploadNoticeToDB(notice);
    };

    return (
        <NoticeUploadDiv>
            <form onSubmit={handleSubmit}>
                <StyledLabel>공지사항명 :</StyledLabel>
                <StyledInput type="text" name="noticeTitle" value={notice.noticeTitle} onChange={handleChange} />
                <StyledLabel>작품 분류 :</StyledLabel>
                <StyledInput type="text" name="filmoType" value={notice.filmoType} onChange={handleChange} />
                <StyledLabel>작품명 :</StyledLabel>
                <StyledInput type="text" name="filmoName" value={notice.filmoName} onChange={handleChange} />
                <StyledLabel>역할명 :</StyledLabel>
                <StyledInput type="text" name="filmoRole" value={notice.filmoRole} onChange={handleChange} />
                <StyledLabel>지원 마감 일자 :</StyledLabel>
                <StyledInput type="datetime-local" name="applyDeadlineDt" value={notice.applyDeadlineDt} onChange={handleChange} />
                <StyledLabel>촬영 시작(예정)일 :</StyledLabel>
                <StyledInput type="datetime-local" name="filmingStartPeriod" value={notice.filmingStartPeriod} onChange={handleChange} />
                <StyledLabel>촬영 종료(예정)일 :</StyledLabel>
                <StyledInput type="datetime-local" name="filmingEndPeriod" value={notice.filmingEndPeriod} onChange={handleChange} />
                <StyledLabel>상세 내용 :</StyledLabel>
                <StyledTextArea name="noticeContent" value={notice.noticeContent} onChange={handleChange} />
                <button type="submit">공지사항 등록</button>
            </form>
        </NoticeUploadDiv>
    );
};

const NoticeUploadDiv = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 2rem;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 200px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`;

export default NoticeUploadPage;