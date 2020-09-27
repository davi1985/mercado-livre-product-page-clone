import styled from "styled-components";
import { HiOutlineSearch } from 'react-icons/hi';

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;


  header {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    align-items: center;
    margin: 0 auto;
    padding: 0 16px;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .input {
    width: 500px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-white);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    align-items: center;
    border-radius: 4px;
  }

  .brand img {
    max-width: 340px;
    max-height: 39px;
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  padding-left: 10px;
  border-left: 1px solid var(--color-border);
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: var(--color-white);
  height: 39px;
  padding: 7px 70px 9px 15px;
`;
