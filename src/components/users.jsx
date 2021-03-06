import React, { useEffect, useState } from 'react'
import ApiService from '../ApiService';
//import ApiService from '../ApiService';
const Users = () => {
  const [회원목록, setData] = useState([]);
  //useEffect는 비동기적으로 동작
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8080/api/users`)
  //     .then(({ data }) => setData(data))
  //     .catch((err) => { });
  // }, []);

  useEffect(() => {
    console.log("회원목록 불러오기");

    ApiService.getUsers()
      .then(
        ({ data }) => setData(data))
    return () => {
      console.log("회원목록 불러오기 끝");
    }
  },[]);
  const userList = 회원목록.map((user) => (
    <tr key={user.usernum}>
      <td >{user.usernum}</td>
      <td >{user.username}</td>
      <td >{user.userid}</td>
      <td >{user.useremail}</td>
      <td >{user.userpasswd}</td>
      <td >{user.addr1}</td>
      <td >{user.addr2}</td>
      <td >{user.addr3}</td>
      <td >{user.usercreatedate}</td>
    </tr>
  ));

  return (
    <div>
      <h1>회원목록</h1>
      <div className="container">
        <div>
          <table className="table table-dark table-striped table-hover">

            <thead>
              <tr>
                <th scope="col">유저번호</th>
                <th scope="col">이름</th>
                <th scope="col">아이디</th>
                <th scope="col">이메일</th>
                <th scope="col">비밀번호</th>
                <th scope="col">우편번호</th>
                <th scope="col">주소</th>
                <th scope="col">상세주소</th>
                <th scope="col">가입날짜</th>

              </tr>
            </thead>
            <tbody>

              {userList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Users