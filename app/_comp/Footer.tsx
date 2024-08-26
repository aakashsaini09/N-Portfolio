import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="w-full min-h-[15vh] bg-[#131425] py-10">
        <div className="w-full flex justify-between px-24">
            <p className="text-white">Copyright &#169; by Aakash Saini</p>
            <div className="flex justify-between min-w-32 items-center">
                <a className="cursor-pointer" href="https://instagram.com" target="_blank"><FaDiscord className="text-3xl text-white"/></a>
                <a className="cursor-pointer" href=""><FaFacebook className="text-2xl text-white"/></a>
                <a className="cursor-pointer" href=""><BsInstagram className="text-2xl text-white"/></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
