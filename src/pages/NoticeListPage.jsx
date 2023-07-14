import React from 'react';
import styled from 'styled-components';

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


const NoticeRow = ({ notice }) => {

    let applyDeadlineDt = new Date(notice.applyDeadlineDt);
    let formattedApplyDeadlineDt = applyDeadlineDt.toLocaleDateString('ko-KR');
    let timeApplyDeadlineDt = applyDeadlineDt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    let filmingStartPeriod = new Date(notice.filmingStartPeriod);
    let formattedFilmingStartPeriod = filmingStartPeriod.toLocaleDateString('ko-KR');
    let timeFilmingStartPeriod = filmingStartPeriod.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    let filmingEndPeriod = new Date(notice.filmingEndPeriod);
    let formattedFilmingEndPeriod = filmingEndPeriod.toLocaleDateString('ko-KR');
    let timeFilmingEndPeriod = filmingEndPeriod.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

    return (
        <TableRow>
            <TableCell>{notice.noticeTitle}</TableCell>
            <TableCell>{notice.filmoType}</TableCell>
            <TableCell>{notice.filmoName}</TableCell>
            <TableCell>{notice.filmoRole}</TableCell>
            <TableCell>
                {formattedApplyDeadlineDt}
                <br />
                {timeApplyDeadlineDt}
            </TableCell>
            <TableCell>
                {formattedFilmingStartPeriod}
                <br />
                {timeFilmingStartPeriod}
            </TableCell>
            <TableCell>
                {formattedFilmingEndPeriod}
                <br />
                {timeFilmingEndPeriod}
            </TableCell>
        </TableRow>
    );
};

const NoticeListPage = () => {
    const [noticeData, setNoticeData] = React.useState([dummyNotice]);

    const getNotice = async () => {
        //TODO: getNotice
        setNoticeData([dummyNotice]); // Update real DB
    };

    React.useEffect(() => {
        getNotice();
    }, []);

    return (
        <>
        {/* <>앱바</> */}
        {
            <NoticeDiv>
                <NoticeToolbar>
                Notice Board
            </NoticeToolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Start Period</TableCell>
                            <TableCell>End Period</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {noticeData.map((notice) => (
                            <NoticeRow key={notice.noticeId} notice={notice} />
                        ))}
                    </TableBody>
                </Table>
            </NoticeDiv>
        }
        </>
    );
};

const NoticeDiv = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
`;

const NoticeToolbar = styled.div`
    width: 100%;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #111111;
`;
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    color: #222222;
`;

const TableBody = styled.tbody`
    color: #444444;
`;

const TableRow = styled.tr`
`;

const TableCell = styled.td`
    padding: 10px;
    border: 1px solid #888888;
`;

export default NoticeListPage;
