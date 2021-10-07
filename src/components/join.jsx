import React, { useContext, useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import '../style/join.css'
import { useEffect } from 'react';
import { axios, post } from 'axios';





const Join = () => {
    function userReducer(state, action) {
        switch (action.type) {
            case 'ADD_USER':
                return [...state, {
                    addr1: action.user
                }]

                break;

            default:
                break;
        }
    }
    //리듀서 공부해올것!!


    const [addr1, setAddr1] = useState(''); // 우편번호
    const [addr2, setAddr2] = useState(''); // 도로명주소
    const [addr3, setAddr3] = useState(''); // 상세주소
    const [userid, setUserid] = useState('');
    const [username, setUsername] = useState('');
    const [userpasswd, setUserpasswd] = useState('');
    const [useremail, setUseremail] = useState('');
    const [isOpenPost, setIsPostOpen] = useState(false);

    const [inputs, setInputs] = useState({
        addr1: '',
        addr2: '',
        addr3: '',
        userid: '',
        username: '',
        userpasswd: '',
        useremail: ''
    })

    const onChange = (e) => {
        //input에 name을 가진 요소의 value에 이벤트를 걸었다
        const { name, value } = e.target
        // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
        const nextInputs = {
            //스프레드 문법으로 기존의 객체를 복사한다.
            ...inputs,
            [name]: value,
        }
        //만든 변수를 seInput으로 변경해준다.
        setInputs(nextInputs)

    }

    const onUserid = (e) => {
        setUserid(e.currentTarget.value);
    };

    const onUsername = (e) => {
        setUsername(e.currentTarget.value);
    };

    const onUserpasswd = (e) => {
        setUserpasswd(e.currentTarget.value);
    };

    const onUseremail = (e) => {
        setUseremail(e.currentTarget.value);
    };

    const onAddr1 = (e) => {
        setAddr1(e.currentTarget.value);
    };
    const onAddr2 = (e) => {
        setAddr2(e.currentTarget.value);
    };
    const onAddr3 = (e) => {
        setAddr3(e.currentTarget.value);
    };

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "0",
        width: "60vw",
        height: "100%",
        padding: "10px",
        zIndex: "9999",
    };
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddr1(data.zonecode);
        setAddr2(fullAddress);
        setIsPostOpen(false);
    };



    return (
        <div className="form-v6">
            <div className="page-content">
                <div className="form-v6-content">
                    <div className="form-left">

                    </div>
                    <form className="form-detail">

                        <h2>회원가입</h2>
                        <div className="form-row">
                            <input type="text" onChange={onChange} value={userid} name="userid" id="userid" className="input-text" placeholder="아이디를 입력해주세요" />
                        </div>

                        <div className="form-row">
                            <input type="text" onChange={onChange} value={username} name="username" id="username" className="input-text" placeholder="이름을 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" onChange={onChange} value={userpasswd} name="userpasswd" id="userpasswd" className="input-text"
                                placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" name="userpasswdchk" id="userpasswdchk" className="input-text"
                                placeholder="비밀번호를 한번 더 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="text" onChange={onChange} value={useremail} name="useremail" id="useremail" className="input-text" placeholder="이메일을 입력해주세요" />
                        </div>

                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="우편번호"
                                name="addr1" id="addr1" type="text" disabled onChange={onChange} value={addr1} />
                            <button type="button" className="btn btn-success postsearch" id="postbtn" onClick={handleComplete}>
                                우편번호 찾기</button>
                                <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />

                        </div>

                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="도로명 주소" name="addr2" id="addr2"
                                type="text" disabled onChange={onChange} value={addr2} />
                        </div>
                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="상세주소" name="addr3" id="addr3"
                                type="text" onChange={onChange} value={addr3} />
                        </div>
                        <div className="form-row-last">
                            <button type="submit" className="btn btn-success input-text" id="submit">가입하기</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Join