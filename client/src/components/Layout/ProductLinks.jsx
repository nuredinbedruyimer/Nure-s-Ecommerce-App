import { Link } from "react-router-dom";
import { footerProductLinks } from "../../static/FooterProductLinks";

const ProductLinks = () => {
  return (
    <ul className="text-center sm:text-start">
      <h1 className="mb-1 font-semibold">Company</h1>
      {footerProductLinks.map((link, index) => (
        <li key={index}>
          <Link
            className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ProductLinks;
