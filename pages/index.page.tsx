import type { NextPage } from "next";
import styled from "@emotion/styled";
import { useDesktop } from "@core/hook/use-desktop";

const Style = {
  Container: styled.div`
    border: 1px solid;
    text-align: center;
  `,
};
const MainPage: NextPage = () => {
  const { isDesktop } = useDesktop();
  console.log(isDesktop);

  return <></>;
};

export default MainPage;
