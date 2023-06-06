import { useDesktop } from "@core/hook/use-desktop";

const Header = () => {
  const { isDesktop } = useDesktop();
  return <>Header</>;
};
export default Header;
