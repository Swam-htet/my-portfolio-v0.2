import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Mailto from "@/app/components/UI/Mailto";
import {faBlenderPhone, faPhone} from "@fortawesome/free-solid-svg-icons";

export default function SocialList() {
    let list = [
        {
            name: "Facebook",
            type: faFacebook,
            link: "https://www.facebook.com/profile.php?id=100010587397312"
        },
        {
            name: "Github",
            type: faGithub,
            link: "https://github.com/Swam-htet"
        },
        {
            name: "Twitter",
            type: faTwitter,
            link: "https://twitter.com/alpharboy129"
        },
        // {
        //     name: "Linkedin",
        //     type: faLinkedin,
        //     link: ""
        // },
        {
            name: "Instagram",
            type: faInstagram,
            link: "https://www.instagram.com/alphar_just_acode/?hl=en"
        },
    ];
    return (
        <div className={'my-5'}>
            <div className={'flex gap-3 md:gap-5'}>
                {
                    list.map((item, index) => {
                        return (<div key={index} className={'mt-8 text-black hover:text-slate-950'}>
                            <Link href={item.link}>
                                <FontAwesomeIcon icon={item.type} className={'w-5'}/>
                            </Link>
                        </div>)
                    })
                }

                <Mailto/>

            </div>
            
        </div>
    )
}

