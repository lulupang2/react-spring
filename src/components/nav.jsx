import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/about">소개</Link>
                    </li>
                    <li>
                        <Link to="/users">사용자</Link>
                    </li>
                    <li>
                        <Link to="/join">가입하기</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
