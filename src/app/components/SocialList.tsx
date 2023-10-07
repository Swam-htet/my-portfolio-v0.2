import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function SocialList() {
    let list = [
        {
            name: "Facebook",
            type: faFacebook,
            link: "https://facebook.com/"
        },
        {
            name: "Github",
            type: faGithub,
            link: "https://github.com/"
        },
        {
            name: "Twitter",
            type: faTwitter,
            link: "https://twitter.com/"
        },
        {
            name: "Linkedin",
            type: faLinkedin,
            link: "https://linkedin.com/"
        },
        {
            name: "Instagram",
            type: faInstagram,
            link: "https://instagram.com/"
        },
    ];
    return (
        <div className={'flex flex-row gap-10 mt-10'}>
            {
                list.map((item, index) => {
                    return (<div key={index}>
                        <Link href={item.link}>
                            <FontAwesomeIcon icon={item.type} className={'w-5'}/>
                        </Link>
                    </div>)
                })
            }
        </div>
    )
}