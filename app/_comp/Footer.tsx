import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <div className="w-full min-h-[10vh] md:min-h-[16vh] bg-[#131425] py-5 md:py-10">
      <div className="w-full flex justify-between px-12 md:px-24">
          <p className="text-white">Copyright &#169; by Aakash Saini</p>
          <div className="flex justify-between min-w-32 items-center">
              <a className="cursor-pointer" target="_blank" href="https://discordapp.com/users/1243529310351130704"> <FaDiscord className="text-3xl text-white hover:text-purple-700"/></a>
              <a className="cursor-pointer" href=""><FaFacebook className="text-2xl text-white hover:text-purple-700"/></a>
              <a className="cursor-pointer" target="_blank" href="https://www.instagram.com/_aakashsaini/"><BsInstagram className="text-2xl text-white hover:text-purple-700"/></a>
          </div>
      </div>
    </div>
  </>
)
}

export default Footer
