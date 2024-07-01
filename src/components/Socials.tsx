import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type SocialsProps = {
  containerStyles?: string;
};

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href='https://www.youtube.com/' target='_blank'>
          <FaYoutube />
        </Link>
      </li>
      <li>
        <Link href='https://www.facebook.com/' target='_blank'>
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link href='https://www.instagram.com/' target='_blank'>
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link href='https://twitter.com/' target='_blank'>
          <FaTwitter />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
