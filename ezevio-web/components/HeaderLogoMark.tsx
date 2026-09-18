import Image from "next/image";

type Props = {
  /** LCP: set on the main header instance only */
  priority?: boolean;
};

/** Header wordmark (ezevio-logo-transition.svg). */
export function HeaderLogoMark({ priority = false }: Props) {
  return (
    <span className="header__logo-mark">
      <Image
        className="header__logo-default"
        src="/ezevio-logo-transition.svg"
        alt="EZEVIO"
        width={308}
        height={72}
        priority={priority}
        unoptimized
      />
    </span>
  );
}
