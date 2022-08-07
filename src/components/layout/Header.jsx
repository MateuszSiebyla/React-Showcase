import styled from 'styled-components';
import { HeaderMenu } from './';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
`;

const HeaderTitle = styled.h1`
    margin: 0;
    font-size: 24px;
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>
                React Showcase
            </HeaderTitle>
            <HeaderMenu />
        </HeaderWrapper>
    )
}