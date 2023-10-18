import "./Sidebar.scss";
import {Link} from 'react-router-dom';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarListItem">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="sidebarListItem">
                        <Link to="/adminManage">관리자 계정 목록</Link>
                    </div>
                    <div className="sidebarListItem">
                        <Link to="/roleHistory">역할 관리 이력</Link>
                    </div>
                    <div className="sidebarListItem">
                        <Link to="/authHistory">권한 관리 이력</Link>
                    </div>
                    <div className="sidebarListItem">
                        <Link to="/loginHistory">로그인 이력</Link>             
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;