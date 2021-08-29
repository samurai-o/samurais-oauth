import styled from "styled-components";

// 输入框容器
export const InputContainerElement = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.1s ease-in 0s;
  border-radius: 6px;
  border: 2px solid #ddd;
  overflow: hidden;

  // 子级元素获取焦点时改变自身样式
  &:focus-within {
    border: 2px solid #000;
  }
`;


// 输入框
export const InputElement = styled.input`
  width: 100%;
  padding: 6px 10px;
  background: transparent;
  border: none;
  font-family: sans-serif;
  letter-spacing: 2px;
  flex: 1;
  color: #635757;
  &:focus {
    outline: none;
    border: none;
  }
  &::-ms-input-placeholder {
    color: #9a9292;
  }
  &::-webkit-input-placeholder {
    color: #9a9292;
  }
  &::-moz-input-placeholder {
    color: #9a9292;
  }
`;

// 前缀
export const PrefixElement = styled.div``;

// 后缀
export const SuffixElement = styled.div``;