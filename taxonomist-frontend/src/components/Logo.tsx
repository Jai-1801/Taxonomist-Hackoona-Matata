
import { Link } from "react-router-dom";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className="inline-block">
      <img 
        src="/images/logo.png" 
        alt="Taxonomist Logo" 
        className={`h-10 ${className}`}
      />
    </Link>
  );
};

export default Logo;