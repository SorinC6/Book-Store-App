import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  input {
    width: ${pro => (pro.focused ? "400px" : "200px")};
    height: 30px;
    font-size: 14px;
    border: 2px solid white;
    border-radius: ${pro => (pro.focused ? "20px" : "10px")};
    color: black;
    padding: 0.5rem 0;
    background-color: ${props => (props.focused ? "transparent" : "grey")};
    transition: all 2s;
    outline: none;
    text-align: center;
    color: black;

    ::placeholder {
      color: blue;
      font-style: italic;
      font-size: 20px;
    }
  }
  button {
    padding: 10px;
    background: transparent;
    margin: 10px;
    display: ${props => (props.focused ? "block" : "none")};
  }
`;

const SearchBar = props => {
  const [focused, setFocused] = useState(false);
  return (
    <InputContainer>
      <Form
        onSubmit={e => props.onSubmit(e)}
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
        }}
      >
        <input
          type="text"
          name="searchValue"
          placeholder="search..."
          onChange={e => props.onChange(e)}
          // value={props.searchValue}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
          }}
        />
        {/* <button type="submit">Search</button> */}
      </Form>
    </InputContainer>
  );
};

export default SearchBar;
