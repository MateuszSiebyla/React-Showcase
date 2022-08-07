import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const MenuElement = styled.li`
    padding: 10px;
`;

export const HeaderMenu = () => {
    return (
        <MenuList>
            <MenuElement>
                <Link to="/">Home</Link>
            </MenuElement>
            <MenuElement>
                <Link to="/news">News</Link>
            </MenuElement>
            <MenuElement>
                <Link to="/contact">Contact</Link>
            </MenuElement>
        </MenuList>
    )
}