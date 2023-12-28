import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppWithNavDemo";

const NoMatch:React.FC = () => {
  const baseUrl = useContext(AppContext)?.baseUrl;
    return (
        <div>
          <h2>Nothing to see here!</h2>
          <p>
            <Link to={`${baseUrl}`}>Go to the home page</Link>
          </p>
        </div>
      );
}

export default NoMatch;