import React from "react";
import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";

const SearchBar = () => {
  return (
    <Container>
      <form>
        <div className="searchbar">
          <button type="submit">
            <IoSearch />
          </button>

          <input placeholder="Search for the Store" />

          <button type="reset">
            <IoClose />
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: block;
  background: #a3b18a;
  width: 400px;
  /* height:  */
  input {
    width: 300px;
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }
    // 버튼을 제외한 영역 모두 차지
    flex: 1;
  }

  button {
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: white;
    color: #588157;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    font-size: 1.2rem;
    display: inline;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;

    &:hover {
      color: #344e41;
    }
  }
`;