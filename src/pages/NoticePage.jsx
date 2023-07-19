import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const dummyNotice = {
    noticeId: 1,
    noticeTitle: '니케 모델 모집합니다.',
    noticeContent: `이번 2023 S/S 니케 모델을 찾고 있습니다.
    본인의 스타일이 니케에 가장 어울리고 잘 맞는다고 생각하시는 분들, 나의 가치관이 니케와
    일치한다고 생각하시는 분들 등 많은 분들의 지원 부탁드립니다.`,
    filmoType:'모델',
    filmoName:'니케 S/S 모델 구인',
    filmoRole:'니케 남성 모델',
    applyDeadlineDt:'2023-08-01T12:00:00.000Z',
    filmingStartPeriod:'2023-09-01T12:00:00.000Z',
    filmingEndPeriod: '2023-10-01T12:00:00.000Z',
    createDt: '2023-07-01T12:00:00.000Z',
    modifyDt: '2023-07-01T12:00:00.000Z',
};

const formatDateTime = (dateStr) => {
    let date = new Date(dateStr);
    let formattedDate = date.toLocaleDateString('ko-KR');
    let formattedTime = date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    
    return `${formattedDate} ${formattedTime}`;
}

const formatDateTimeIfExist = (dateStr) => {
    if (dateStr) {
        let date = new Date(dateStr);
        let formattedDate = date.toLocaleDateString('ko-KR');
        let formattedTime = date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        return `${formattedDate} ${formattedTime}`;
    }
    return '';
}

const NoticeItem = ({ notice, isEditing, onChange, onSubmit }) => {
    if (isEditing) {
        return (
            <form onSubmit={onSubmit}>
                <NoticeDiv>
                    <NoticeTitleDiv>
                        <StyeldLabel>
                            Title:
                            <StyledInput type="text" name="noticeTitle" value={notice.noticeTitle} onChange={onChange} />
                        </StyeldLabel>
                    </NoticeTitleDiv>
                    <NoticeContentDiv>
                        <StyeldLabel>
                            작품 분류 : 
                            <StyledInput type="text" name="filmoType" value={notice.filmoType} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            작품명 : 
                            <StyledInput type="text" name="filmoName" value={notice.filmoName} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            역할명 : 
                            <StyledInput type="text" name="filmoRole" value={notice.filmoRole} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            지원 마감 일자 :
                            <StyledInput type="text" name="applyDeadlineDt" value={notice.applyDeadlineDt} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            촬영 시작(예정)일 :
                            <StyledInput type="text" name="filmingStartPeriod" value={notice.filmingStartPeriod} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            촬영 종료(예정)일 :
                            <StyledInput type="text" name="filmingEndPeriod" value={notice.filmingEndPeriod} onChange={onChange} />
                        </StyeldLabel>
                        <StyeldLabel>
                            상세 내용 :
                            <StyledTextArea name="noticeContent" value={notice.noticeContent} onChange={onChange} />
                        </StyeldLabel>
                        <button type="submit">수정하기</button>
                    </NoticeContentDiv>
                </NoticeDiv>
            </form>
        );
    } else {
        return (
            <NoticeDiv>
                <NoticeTitleDiv>
                    {notice.noticeTitle}
                </NoticeTitleDiv>
                <NoticeContentDiv>
                    <p>
                        작품 분류 : 
                        {notice.filmoType}
                        </p>
                    <p>
                        작품명 : 
                        {notice.filmoName}
                        </p>
                    <p>
                        역할명 : 
                        {notice.filmoRole}
                        </p>
                    <p>
                        지원 마감 일자 :
                        {formatDateTime(notice.applyDeadlineDt)}
                    </p>
                    <p>
                        촬영 시작(예정)일 :
                        {formatDateTime(notice.filmingStartPeriod)}
                    </p>
                    <p>
                        촬영 종료(예정)일 :
                        {formatDateTime(notice.filmingEndPeriod)}
                    </p>
                    <p>
                        작성일 :
                        {formatDateTime(notice.createDt)}
                    </p>
                    {notice.modifyDt && (
                        <p>
                            수정일 :
                            {formatDateTimeIfExist(notice.modifyDt)}
                        </p>
                    )}
                    <p>
                        상세 내용 :
                        {notice.noticeContent}
                    </p>
                </NoticeContentDiv>
            </NoticeDiv>
        );
    }
};

function NoticePage() {
    const { noticeId } = useParams();
    const navigate = useNavigate();
    const [notice, setNotice] = useState(dummyNotice); // null?
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // TODO: API call to get the notice info
        setNotice(dummyNotice);
    }, [noticeId]);

    // useEffect(() => {
    //     const fetchNotice = async () => {
    //         const noticeFromDB = await getNoticeFromDB(noticeId);
    //         setNotice(noticeFromDB);
    //     }
    //     fetchNotice();
    // }, [noticeId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNotice(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: API call to update the notice
        console.log(`Updated notice: ${JSON.stringify(notice, null, 2)}`);
        //         await updateNoticeInDB(notice);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        // TODO: API call to delete the notice
        console.log(`Deleted notice: ${noticeId}`);
        //         await deleteNoticeInDB(noticeId);
        // Redirect to the notice list page after successful deletion
        navigate('/noticeListPage');
    };

    if (notice === null) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Link to="/noticeListPage">목록으로 돌아가기</Link>
            <NoticeItem notice={notice} isEditing={isEditing} onChange={handleChange} onSubmit={handleSubmit} />
            {!isEditing && (
                <>
                    <button onClick={() => setIsEditing(true)}>글 수정</button>
                    <button onClick={handleDelete}>글 삭제</button>
                </>
            )}
        </>
    );
}

const NoticeDiv = styled.div`
    width: 100%;
    background-color: white;

`;
const NoticeTitleDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    font-weight : bold;
    text-align: center;
    padding: 20px;
    background-color: white;
    color: #222222;
    border: 1px solid #888888;
`;
const NoticeContentDiv = styled.div`
    box-sizing: border-box;
    width: 100%; // 100% vs 100vw 
    flex-direction: column;
    text-align: left;
    padding: 20px;
    color: #444444;
    border: 1px solid #888888;
`;
const StyeldLabel = styled.label`
    display : white;
    margin-bottom: 10px
`;
const StyledInput = styled.input`
    display : block;
    width:100%
    margin-bottom: 20px
`;
const StyledTextArea = styled.textarea`
    display: block;
    width: 100%
    margin-bottom: 20px
`;

export default NoticePage;