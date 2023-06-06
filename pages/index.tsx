import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

const Style = {
  Container: styled.div`
    border: 1px solid;
    background: white;
    text-align: center;
  `,
};
const Home: NextPage = () => {
  return <Style.Container>테스트 컴포넌트</Style.Container>;
};

export default Home;
