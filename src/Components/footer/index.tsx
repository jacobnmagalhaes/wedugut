import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiTiktok } from "react-icons/si";
import { IconComponent } from "./icon";
import { useRouter } from "next/router";

export function FooterComponent() {


  const router = useRouter()
  // console.log(router.asPath)

  return (
    <div className="flex flex-col justify-center w-full mt-10">
      <p className="w-full m-auto text-center text-white text-[20px] font-light mb-5">
        Connect with us:
      </p>
      <div className="flex gap-7 justify-center items-center m-auto mb-12">
        <IconComponent
          icon={<FaFacebookF size={30} />}
          href={"https://www.facebook.com/wedugut/"}
        />
        <IconComponent
          icon={<BsInstagram size={30} />}
          href={router.asPath == '/kids-'?"https://www.instagram.com/wedugutkids/":"https://www.instagram.com/wedugut/"}
        />
        <IconComponent
          icon={<BsTwitter size={30} />}
          href={'"https://twitter.com/wedugut'}
          hiddenMobile={true}
        />
        <IconComponent
          icon={<SiTiktok size={30} />}
          href={router.asPath == '/kids-'?"https://www.tiktok.com/@wedugutkids":"https://www.tiktok.com/@wedugut"}
        />
        <IconComponent
          icon={<FaYoutube size={30} />}
          href="https://www.youtube.com/channel/UCyg87GirrddSvia8TqeWepA"
        />

        <IconComponent
          icon={<GrLinkedinOption size={30} />}
          href={"https://pt.linkedin.com/company/dugutapp"}
          hiddenMobile={true}
        />
      </div>
      <div className=" flex justify-center items-center w-full text-sm text-white font-light gap-4">
        <a href="https://dugut.app/privacy/DuGut-Privacy-Policy.pdf" target={'blank'}>
          <p className='mr-2 cursor-pointer'>Privacy</p>
        </a>

        <a href="https://dugut.app/data/DuGut-General-Data-Protection-Regulation.pdf" target={'blank'}>

          <p className='mr-2 cursor-pointer'>GDPR</p>
        </a>

        <a href="https://dugut.app/terms/DuGut-Terms-of-Use.pdf" target={'blank'}>

          <p className='mr-2 cursor-pointer'>Terms</p>
        </a>
      </div>
      <div className="w-full flex justify-center items-center bg-black text-white font-light">
        <p>DuGut Ltd 2022. All rights reserved ©</p>
      </div>
    </div>
  );
}
