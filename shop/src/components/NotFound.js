import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="nf-wrapper">
      <div className="nf-card">
        <h1 className="nf-title">404</h1>
        <p className="nf-text">찾을 수 없는 페이지입니다.</p>

        <Link to="/" className="nf-button">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
