import { Container } from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ location }) => {
    const pagesList = {
        home: "Kenzie Eventos",
        drinks: "Bebidas",
        wedding: "Casamentos",
        graduation: "Formaturas",
        confrat: "Confraternizações",
    };

    return (
        <Container>
            <div>
                <Link to="/">
                    <AiOutlineHome />
                </Link>
            </div>
            <h1>
                {location.pathname === "/"
                    ? pagesList.home
                    : location.pathname === "/drinks"
                    ? pagesList.drinks
                    : location.pathname === "/weddings"
                    ? pagesList.wedding
                    : location.pathname === "/graduation"
                    ? pagesList.graduation
                    : pagesList.confrat}
            </h1>
        </Container>
    );
};

export default Header;
