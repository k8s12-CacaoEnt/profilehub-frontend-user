import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";


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
    member: {
      memberId: 0,
      memberType: "ACTOR",
      memberEmail: 'mail@gmail.com',
      memberName: "string",
      memberBirthDt: "2023-07-14T05:08:18.062Z",
      createDt: "2023-07-14T05:08:18.062Z",
      modifyDt: "2023-07-14T05:08:18.062Z",
      },
      "roleList": [
        '모델','배우','성우'
      ]
    }

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

const NoticeItem = ({ notice }) => {

    return (
        <div>
            <h4>
                <Link to={`/noticeListPage`}>목록으로 돌아가기</Link>
            </h4>
            <h5>
            <Link to={`/notice/${noticeId}/edit`}>글 수정</Link>
            </h5>
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
        </div>
    );
};

const NoticePage = () => {
    const { noticeId } = useParams(); // Now you can use noticeId to get the notice data
    const [notice, setNotice] = React.useState(dummyNotice);
    const getNotice = async () => {
        // TODO: Replace this with your actual logic to get the notice
        setNotice(dummyNotice)
    }
    React.useEffect(() => {
        getNotice();
    }, []);
    

    return (
        <>
        {/* <>App Bar</> */}
        {
            notice ? (
                <NoticeDiv>
                    <NoticeTitleDiv>
                        {notice.noticeTitle}
                    </NoticeTitleDiv>
                    <NoticeContentDiv>
                        {/* {
                            noticeData.map((notice) => (
                                <NoticeItem key={notice.noticeId} notice={notice} />
                             ))
                        } */}
                            <NoticeItem key={notice.noticeId} notice={notice} />
                    </NoticeContentDiv>
                </NoticeDiv>
            ) : (
                <p>Loaging...</p>
            )
        }
        {/* <>Footer</> */}
        </>
  );
};

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
export default NoticePage;
