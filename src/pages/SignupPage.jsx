import React, { useState, useRef, useEffect } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-x])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

const SignupPage = () => {
    // 패스워드 미리보기 구현 
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    // 
    const userRef = useRef();

    // if we get an error, need to focus, acce
    const errRef = useRef();

    // username state
    const [user, setUser] = useState('');
    // 유효한 유저 이름인지 확인
    const [validName, setValidName ] = useState(false);
    // 이름 넣는 곳에 포커스 상태인지 확인
    const [userFocus, setUserFocus] = useState(false);

    // 첫번째 비번 값 확인
    const [pwd, setPwd] = useState('');
    // 유효한 비번  확인
    const [validPwd, setValidPwd ] = useState(false);
    // 첫번째 비번칸에  곳에 포커스 상태인지 확인
    const [pwdFocus, setPwdFocus] = useState(false);

    // 재확인차 비번값
    const [matchPwd, setMatchPwd] = useState('');
    // 유효한 재확인 비번값인지 확인
    const [validMatch, setValidMatch ] = useState(false);
    // 이름 넣는 곳에 포커스 상태인지 확인
    const [matchFocus, setMatchFocus] = useState(false);
    

    
    const [memberType, setmemberType] = useState('');
    const [memberEmail, setmemberEmail] = useState('');
    const [memberPassword, setmemberPassword] = useState('');
    const [memberName, setmemberName] = useState('');
    const [memberGender, setmemberGender] = useState('');
    const [memberTelNo, setmemberTelNo] = useState('');
    const [memberBirthDt, setmemberBirthDt] = useState('');



    // "token": "string",

    // "memberType": "string",
    // "memberEmail": "string",
    // "memberPassword": "string",
    // "memberName": "string",
    // "memberGender": "string",
    // "memberTelNo": "string",
    // "memberBirthDt": "string",
    // "profileId": 0

    // 에러메세지
    const [errMsg, setErrMsg] = useState('');
    // 회원가입 성공 여부
    const [success, setSuccess] = useState(false); 

    // user이름이 변경 될 때 마다 렌더링
    useEffect(()=>{
        // 유효한 이름값이라면 true, false값 넣음 
        setValidName(USER_REGEX.test(user))
    }, [user])

    // pwd, matchPwd 두개 중 하나라도 변경 사항이 있을경우 렌더링
    useEffect(()=>{
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])
    

    // user, pwd, matchPwd 하나 중에 변경사항이 있을경우 에러메세지를 지움
    useEffect(()=>{
        setErrMsg('');
    },[user, pwd, matchPwd])

    // 	- axios.get(URL).then((결과)->{console.log(결과.data)}).catch(()=>{실패내용})
    // submit 버튼을 누르면 비동기로 실행?....이부분 모르겠네
    const handleSubmit = async (e) => {
        // 눌렀을 때 새로고침 방지 
        e.preventDefault();
        console.log( JSON.stringify({memberType,memberEmail,memberPassword,memberName,memberGender,memberTelNo,memberBirthDt}));
        const response = await axios.post("http://172.16.0.185:7002/v1/member", 
        JSON.stringify({memberType,memberEmail,memberPassword,memberName,memberGender,memberTelNo,memberBirthDt,
            
        }),{headers:{'Content-Type':'application/json',

    }, withCredentials:false}
        )

        // axios.get().then(()=>{}).catch(()=>{})

    }

    // 쿠키에다가 토큰 보관하지말고
    // 셋쿠키

    // "token": "string",
    // "memberId": 0,
    // "memberType": "string",
    // "memberEmail": "string",
    // "memberPassword": "string",
    // "memberName": "string",
    // "memberGender": "string",
    // "memberTelNo": "string",
    // "memberBirthDt": "string",
    // "profileId": 0
    // "memberId": 0,
    // "memberType": "string",

    return (<div>
        <section>
         <p ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
         >{errMsg}</p>
        <form onSubmit={handleSubmit}>            




<label htmlFor="memberType">            
  <Select
    id="memberType" // css Id같음
    label="memberType" // label태그와 같아야함
    onChange={(e) => setmemberType(e.target.value)} 
    value={''}
  >
    <MenuItem value={"ACTOR"}>ACTOR</MenuItem>
    <MenuItem value={"PRODUCER"}>PRODUCER</MenuItem>
    <MenuItem value={"ADMIM"}>ADMIM</MenuItem>
  </Select>
  </label>



  <label htmlFor="memberGender">            
  <Select
    id="memberGender" // css Id같음
    label="memberGender" // label태그와 같아야함
    onChange={(e) => setmemberGender(e.target.value)} 
    value={''}
  >
    <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
    <MenuItem value={"MALE"}>MALE</MenuItem>
  </Select>
  </label>


        <label htmlFor="memberEmail">
        <TextField 
    id="memberEmail" 
    label="memberEmail" 
    onChange={(e) => setmemberEmail(e.target.value)} 
    variant="outlined" />

        </label>

        <label htmlFor="memberPassword">
        <TextField 
    id="memberPassword" 
    label="memberPassword" 
    type="password"
onChange={(e) => setmemberPassword(e.target.value)} 
    variant="outlined" />
        </label>
        

        <label htmlFor="passwordMatch">
        <TextField 
    id="memberPassword" 
    label="passwordMatch" 
    type="password"
    onChange={(e) => setmemberPassword(e.target.value)} 
    variant="outlined" />
        </label>        

        <label htmlFor="memberName">
        <TextField 
    id="memberName" 
    label="memberName" 
    onChange={(e) => setmemberName(e.target.value)} 
    variant="outlined" />
        </label>        



        <label htmlFor="memberTelNo">
        <TextField 
    id="memberTelNo" 
    label="memberTelNo" 
    onChange={(e) => setmemberTelNo(e.target.value)} 
    variant="outlined" />
        </label>




        <label htmlFor="memberBirthDt">
        <TextField 
    id="memberBirthDt" 
    label="memberBirthDt" 
    onChange={(e) => setmemberBirthDt(e.target.value)} 
    variant="outlined" />        </label>                


        <button>
            register
        </button>



        </form>


        </section>
    </div>)
}



export default SignupPage;
