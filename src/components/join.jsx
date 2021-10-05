import React, { useEffect, useState } from 'react'


const Join = () => {
    const [addr, setAddr] = useState(''); // 주소
    const [addr2, setAddr2] = useState(''); // 상세주소


    return (
        <div classNameName="form-v6">
            <div className="page-content">
                <div className="form-v6-content">
                    <div className="form-left">

                    </div>
                    <form className="form-detail" action="/users/new" method="post">
                        <h2>회원가입</h2>
                        <div className="form-row">
                            <input type="text" name="userid" id="userid" className="input-text" placeholder="아이디를 입력해주세요" />
                        </div>

                        <div className="form-row">
                            <input type="text" name="username" id="username" className="input-text" placeholder="이름을 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" name="userpasswd" id="userpasswd" className="input-text"
                                placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" name="userpasswdchk" id="userpasswdchk" className="input-text"
                                placeholder="비밀번호를 한번 더 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="text" name="useremail" id="useremail" className="input-text" placeholder="이메일을 입력해주세요" />
                        </div>



                        <div className="form-row">
                            <input className="form-control input-text" style="width: 40%; display: inline; padding:0.3rem;" placeholder="우편번호"
                                name="addr1" id="addr1" type="text" readonly="readonly" />
                            <button type="button" className="btn btn-success input-text" style="margin: 0;" ><i
                                className="fa fa-search"></i>
                                우편번호 찾기</button>

                        </div>

                        <div className="form-row">
                            <input className="form-control input-text" style="padding:0.3rem" placeholder="도로명 주소" name="addr2" id="addr2"
                                type="text" readonly="readonly" />
                        </div>
                        <div className="form-row">
                            <input className="form-control input-text" style="padding:0.3rem" placeholder="상세주소" name="addr3" id="addr3"
                                type="text" />
                        </div>
                        <div className="form-row-last">
                            <button type="submit" className="btn btn-success input-text">가입하기</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Join