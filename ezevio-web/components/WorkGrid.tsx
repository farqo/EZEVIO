"use client";

import Link from "next/link";

import { WorkCardGradient, type WorkCardGradientSpec } from "@/components/WorkCardGradient";

export type WorkTile = {
  href: string;
  title: string;
  caption?: string;
  cardImage: string;
  cardGradient?: WorkCardGradientSpec;
  cardOverlay?: string;
  cardOverlayLarge?: boolean;
};

/** Work index: white tile + title on page background. */
export function WorkGrid({
  tiles,
  itemClassName = "project-link o-col-12 o-col-6--md o-col-4--xlg",
}: {
  tiles: readonly WorkTile[];
  itemClassName?: string;
}) {
  return (
    <>
      {tiles.map((item) => (
        <div
          key={item.href}
          className={itemClassName}
          data-aos-offset="50"
          data-aos="center-hardscale-work_page"
        >
          <Link href={item.href}>
            <figure className="figure-video">
              <span className="work-card-gradient work-card-filler">
                {item.cardGradient ? (
                  <WorkCardGradient
                    id={item.href.replace(/^\//, "").replace(/\W+/g, "-")}
                    spec={item.cardGradient}
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element -- static SVG tiles from /public */}
                    <img
                      src={item.cardImage}
                      alt=""
                      className="work-card-thumb"
                      draggable={false}
                    />
                  </>
                )}
              </span>
              {item.cardOverlay ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element -- static overlay from /public */}
                  <img
                    src={item.cardOverlay}
                    alt=""
                    className={
                      item.cardOverlayLarge
                        ? "work-card-overlay work-card-overlay--large"
                        : "work-card-overlay"
                    }
                    draggable={false}
                  />
                </>
              ) : null}
              <figcaption>
                <span className="figcaption-caption">
                  {item.caption ?? item.title}
                </span>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </>
  );
}
