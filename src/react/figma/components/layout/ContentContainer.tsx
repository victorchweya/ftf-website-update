import type { ReactNode } from "react";

type ContainerSize = "narrow" | "default" | "wide";

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-[960px]",
  default: "max-w-[1184px]",
  wide: "max-w-[1280px]",
};

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ContentContainer({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}) {
  return (
    <div className={cx("relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-10", sizeClasses[size], className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  containerClassName,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: ContainerSize;
}) {
  return (
    <section className={cx("relative w-full", className)}>
      <ContentContainer size={size} className={containerClassName}>
        {children}
      </ContentContainer>
    </section>
  );
}

export const absoluteWideContainerClass =
  "left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)] max-w-[1280px]";
