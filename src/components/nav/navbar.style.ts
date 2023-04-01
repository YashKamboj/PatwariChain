import styled from 'styled-components'; 

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #302F2F;


    @media (max-width: 900px) {
        padding: 2rem 4rem;
        justify-content: space-between;
    }
`;

export const Title = styled.h1`
    letter-spacing: 5px;
    font-size: 2.5rem;
`;

export const NavMain = styled.nav`
    display: flex;
    align-items: center;
`;

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    margin-right: 0rem;
    list-style: none;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    margin-right: 2rem;

    & svg {
        margin-right: 0.75rem;
    }
`;

export const NavItem = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    padding: 1rem;
    transition: all 0.3s;

`;

export const SideBarMenu = styled.div`
    display: none;
    cursor: pointer;

    & div {
        width: 30px;
        height: 2.5px;
        margin: 6px 0;
    }

    @media (max-width: 900px) {
        display: block;
    }
`;

export const UserAuthBtn = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1.2rem 3rem;
    border-radius: 10px;
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;

    & div {
        svg {
            margin-right: 1rem;
        }
        span {
            max-width: 15rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        display: flex;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;
