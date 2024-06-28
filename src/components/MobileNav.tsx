import { IoCloseOutline } from "react-icons/io5";

type MobileNavProps = {
  setMobileNav: (value: boolean) => void;
};

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  return (
    <nav className='text-white'>
      <IoCloseOutline
        onClick={() => setMobileNav(false)}
        className='text-4xl cursor-pointer'
      />
    </nav>
  );
};

export default MobileNav;
