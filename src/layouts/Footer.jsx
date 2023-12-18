import FacebookIcon from "../assets/svg/fb.svg";
import SkypeIcon from "../assets/svg/skype.svg";
import InstaIcon from "../assets/svg/Insta.svg";
import YoutubeIcon from "../assets/svg/youtube.svg";
import LocationIcon from "../assets/svg/akar-icons_location.svg";
import PhoneIcon from "../assets/svg/clarity_mobile-phone-line.svg";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className='bg-[url("https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI")] bg-no-repeat bg-cover h-40 blur-[2px] bg-center'></div>
      <div className="xs:hidden sm:hidden md:hidden lg:flex justify-between px-20">
        <div className="text-1.8rem w-1/3">
          <h6 className="text-2.4rem my-10">ABOUT US</h6>
          <p className="leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
          <ul className="flex justify-start gap-6 mb-10">
            <li className="w-10 h-10 rounded-md bg-text-dark">
              <img
                src={FacebookIcon}
                alt="eShop"
                className="max-sm:w-24 max-md:w-24 max-lg:w-48"
              />
            </li>
            <li className="w-10 h-10 rounded-md bg-text-dark"></li>
            <li className="w-10 h-10 rounded-md bg-text-dark">
              <img
                src={InstaIcon}
                alt="eShop"
                className="max-sm:w-24 max-md:w-24 max-lg:w-48"
              />
            </li>
            <li className="w-10 h-10 rounded-md bg-text-dark">
              <img
                src={SkypeIcon}
                alt="eShop"
                className="max-sm:w-24 max-md:w-24 max-lg:w-48"
              />
            </li>
            <li className="w-10 h-10 rounded-md bg-text-dark">
              <img
                src={YoutubeIcon}
                alt="eShop"
                className="max-sm:w-24 max-md:w-24 max-lg:w-48"
              />
            </li>
          </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">INFORMATION</h6>
          <ul className="leading-loose">
            <li>About</li>
            <li>Delivery information</li>
            <li>Privacy Policy</li>
            <li>Sales</li>
            <li>Terms & Conditions</li>
            <li>EMI Payment</li>
          </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">ACCOUNT</h6>
          <ul className="leading-loose">
            <li>My Account</li>
            <li>My Orders</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Wishlist</li>
            <li>Account Details</li>
          </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">STORE</h6>
          <ul className="leading-loose">
            <li>Affiliate</li>
            <li>Discounts</li>
            <li>Sale</li>
            <li>Contact</li>
            <li>All Collections</li>
          </ul>
        </div>
        <div className="text-1.8rem w-1/4">
          <h6 className="text-2.4rem my-10">CONTACT US</h6>
          <ul className="leading-loose">
            <li>
              If you have any query, please contact us needus24@gmail.com
            </li>
            <li>
              <i className="w-10 h-10 rounded-md bg-text-dark inline-block align-middle">
                <img
                  src={LocationIcon}
                  alt="eShop"
                  className="max-sm:w-24 max-md:w-24 max-lg:w-48"
                />
              </i>
              California, USA
            </li>
            <li>
              <i className="w-10 h-10 rounded-md bg-text-dark inline-block align-middle">
                <img
                  src={PhoneIcon}
                  alt="eShop"
                  className="max-sm:w-24 max-md:w-24 max-lg:w-48"
                />
              </i>
              +12012987481
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-20 p-20 border-t border-gray xs:hidden sm:hidden md:hidden lg:flex-col text-center">
        <ul className="flex justify-center gap-4 mb-10">
          <li className="w-20 h-12 rounded-md bg-text-dark"></li>
          <li className="w-20 h-12 rounded-md bg-text-dark"></li>
          <li className="w-20 h-12 rounded-md bg-text-dark"></li>
          <li className="w-20 h-12 rounded-md bg-text-dark"></li>
          <li className="w-20 h-12 rounded-md bg-text-dark"></li>
        </ul>
        <p className="text-1.5rem">© Copyright.2022.All Right Reserved</p>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
