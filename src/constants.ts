import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";
import IconZenn from "@/assets/icons/IconZenn.svg";
import IconHatena from "@/assets/icons/IconHatena.svg";
import IconNote from "@/assets/icons/IconNote.svg";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "X",
    href: "https://x.com/55_ymzn", // 自分のXユーザー名に変える
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/55_ymzn", // ZennのURL
    linkTitle: `${SITE.title}`,
    icon: IconZenn,
  },
  {
    name: "Hatena",
    href: "https://yy-world.hatenadiary.com", // はてなのURL
    linkTitle: `${SITE.title}`,
    icon: IconHatena,
  },
  {
    name: "Note",
    href: "https://note.com/55_ymzn", // noteのURL
    linkTitle: `${SITE.title}hate`,
    icon: IconNote,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {∏
    name: "Hatena",
    href: "https://b.hatena.ne.jp/entry/",
    linkTitle: `Share this post on Hatena Bookmark`,
    icon: IconHatena, // シェアボタンにもはてなを追加
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
