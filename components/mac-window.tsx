import Image from "next/image";
import type { ReactNode } from "react";
import coloredLogo from "@/coloredlogo.png";
import alvarezAvatar from "@/public/avatars/alvarez.webp";
import jordanAvatar from "@/public/avatars/jordan.webp";
import kellerAvatar from "@/public/avatars/keller.webp";
import nguyenAvatar from "@/public/avatars/nguyen.webp";
import reedAvatar from "@/public/avatars/reed.webp";

const avatars = {
  alvarez: alvarezAvatar,
  jordan: jordanAvatar,
  keller: kellerAvatar,
  nguyen: nguyenAvatar,
  reed: reedAvatar,
};

export type AvatarName = keyof typeof avatars;

export function Avatar({ who }: { who: AvatarName }) {
  return (
    <span className="mac-avatar">
      <Image src={avatars[who]} alt="" width={64} height={64} />
    </span>
  );
}

export function HubMark() {
  return (
    <span className="mac-avatar mac-avatar-mark">
      <Image src={coloredLogo} alt="" width={48} height={48} />
    </span>
  );
}

export function MacWindow({
  title,
  aside,
  className,
  children,
}: {
  title: string;
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={["mac-window", "mac-window-plain", className].filter(Boolean).join(" ")}>
      <div className="mac-titlebar is-plain">
        <span />
        <span className="mac-title">{title}</span>
        <span className="mac-titlebar-aside">{aside}</span>
      </div>
      {children}
    </div>
  );
}
