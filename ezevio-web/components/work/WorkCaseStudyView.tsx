import type { ReactNode } from "react";
import { SplitSection } from "@/components/SplitSection";
import { MoreWork } from "@/components/work/MoreWork";
import { linkifyTech } from "@/lib/outLink";
import type {
  WorkCaseBodyItem,
  WorkCaseMediaCaption,
  WorkCaseMediaSlot,
  WorkCaseStill,
  WorkCaseStudyData,
} from "@/lib/workCaseStudies";

const PLACEHOLDER = "/work/placeholder-case.svg";

/** Same column classes as SplitSection `serviceRevealStep={2}` (Strategy / Design / Results). */
const SPLIT_REST_HEADING =
  "o-col-12--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SPLIT_REST_BODY =
  "o-col-6--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";

/** Matches SplitSection services rows after the first (left title / right body). */
const SERVICES_REST_HEADING =
  "o-col-12--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";
const SERVICES_REST_BODY =
  "o-col-6--xlg u-push-6--xlg o-col-6--md o-col-12 dumbar-col-stack";

const MEDIA_COL = "o-col-12--md o-col-12 dumbar-col-stack";

const PRIMAL_SOCIAL_HREFS = {
  Instagram: "https://www.instagram.com/theprimalapp/",
  TikTok: "https://www.tiktok.com/@theprimalapp",
} as const;

type Linkify = (text: string) => ReactNode;

function CaseStill({
  still,
  rounded = false,
}: {
  still?: WorkCaseStill;
  rounded?: boolean;
}) {
  const isAsset = Boolean(still?.src);
  return (
    <figure
      className={`work-case__figure${isAsset ? " work-case__figure--screenshot" : ""}${rounded ? " work-case__figure--phone" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- case study assets */}
      <img
        src={still?.src ?? PLACEHOLDER}
        alt={
          still?.alt ??
          (isAsset ? "" : "Project still (placeholder)")
        }
        className="work-case__img"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </figure>
  );
}

function MediaCaptionBlock({
  caption,
  linkify,
}: {
  caption: WorkCaseMediaCaption;
  linkify: Linkify;
}) {
  return (
    <>
      <div
        className={`${SERVICES_REST_HEADING} work-case__media-caption-heading`}
      >
        <h3>{caption.title}</h3>
      </div>
      <div
        className={`${SERVICES_REST_BODY} work-case__media-caption-body`}
      >
        {caption.paragraphs.map((paragraph, i) => (
          <p key={i}>{linkify(paragraph)}</p>
        ))}
      </div>
    </>
  );
}

function MediaRowTwo({
  left,
  right,
  dataAos,
  caption,
  compact = false,
  linkify,
}: {
  left?: WorkCaseStill;
  right?: WorkCaseStill;
  dataAos?: string;
  caption?: WorkCaseMediaCaption;
  compact?: boolean;
  linkify: Linkify;
}) {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos={dataAos}
    >
      <div className={MEDIA_COL}>
        <div
          className={
            compact
              ? "work-case__media-pair work-case__media-pair--compact"
              : "work-case__media-pair"
          }
        >
          <div className="work-case__media-pair__cell">
            <CaseStill still={left} />
          </div>
          <div className="work-case__media-pair__cell">
            <CaseStill still={right} />
          </div>
        </div>
      </div>
      {caption ? <MediaCaptionBlock caption={caption} linkify={linkify} /> : null}
    </section>
  );
}

function MediaRowTriple({
  items,
  dataAos,
  caption,
  rounded = false,
  linkify,
}: {
  items:
    | readonly [WorkCaseStill, WorkCaseStill, WorkCaseStill]
    | readonly [WorkCaseStill, WorkCaseStill];
  dataAos?: string;
  caption?: WorkCaseMediaCaption;
  rounded?: boolean;
  linkify: Linkify;
}) {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos={dataAos}
    >
      <div className={MEDIA_COL}>
        <div className="work-case__media-triple">
          {items.map((still) => (
            <div key={still.src} className="work-case__media-triple__cell">
              <CaseStill still={still} rounded={rounded} />
            </div>
          ))}
        </div>
      </div>
      {caption ? <MediaCaptionBlock caption={caption} linkify={linkify} /> : null}
    </section>
  );
}

function MediaRowFull({
  still,
  dataAos,
  caption,
  linkify,
}: {
  still?: WorkCaseStill;
  dataAos?: string;
  caption?: WorkCaseMediaCaption;
  linkify?: Linkify;
}) {
  return (
    <section
      className="o-grid work-case__media-section"
      data-aos={dataAos}
    >
      <div className={MEDIA_COL}>
        <CaseStill still={still} />
      </div>
      {caption && linkify ? (
        <MediaCaptionBlock caption={caption} linkify={linkify} />
      ) : null}
    </section>
  );
}

function MediaSlot({ slot }: { slot: WorkCaseMediaSlot }) {
  if (slot === "full")
    return <MediaRowFull dataAos="topleft-hardscale-service-step-2" />;
  if (slot === "half")
    return <MediaRowTwo dataAos="topleft-hardscale-service-step-1" linkify={linkifyTech} />;
  return null;
}

function CaseBodyList({
  items,
  linkify,
}: {
  items: WorkCaseBodyItem[];
  linkify: Linkify;
}) {
  return (
    <>
      {items.map((item, i) => {
        const dataAos =
          i % 2 === 0
            ? "topleft-hardscale-service-step-1"
            : "topleft-hardscale-service-step-2";
        if (item.type === "split") {
          return (
            <SplitSection
              key={`split-${i}`}
              section={{ heading: item.heading, body: linkify(item.body) }}
              serviceRevealStep={item.serviceRevealStep ?? 2}
            />
          );
        }
        if (item.type === "media-half") {
          return (
            <MediaRowTwo
              key={`half-${i}`}
              left={item.left}
              right={item.right}
              dataAos={dataAos}
              caption={item.caption}
              compact={item.compact}
              linkify={linkify}
            />
          );
        }
        if (item.type === "media-triple") {
          return (
            <MediaRowTriple
              key={`triple-${i}`}
              items={item.items}
              dataAos={dataAos}
              caption={item.caption}
              rounded={item.rounded}
              linkify={linkify}
            />
          );
        }
        return (
          <MediaRowFull
            key={`full-${i}`}
            still={{ src: item.src, alt: item.alt }}
            dataAos={dataAos}
            caption={item.caption}
            linkify={linkify}
          />
        );
      })}
    </>
  );
}

type Props = { data: WorkCaseStudyData; slug?: string };

export function WorkCaseStudyView({ data, slug }: Props) {
  const moreHref = slug ? `/work/${slug}` : undefined;
  const [m0, m1, m2, m3] = data.mediaAfter;
  const useCaseBody = Boolean(data.caseBody?.length);
  const linkify: Linkify = (text) =>
    linkifyTech(text, slug === "primal" ? PRIMAL_SOCIAL_HREFS : undefined);

  return (
    <div className="t-default t-about work-case">
      <div className="o-container">
        <div className="o-grid content">
          <div className="mega-title-wrap o-col-12--md o-col-12">
            <h1 className="mega-title" data-aos="topleft-hardscale">
              {data.megaLine1}
            </h1>
          </div>

          <SplitSection
            section={{
              heading: "Services",
              body: data.servicesLine,
            }}
            serviceRevealStep={1}
          />

          <section
            className="o-grid work-case__intro"
            data-aos="topleft-hardscale-service-step-1"
          >
            <div
              className={`${SPLIT_REST_HEADING} work-case__intro-spacer`}
              aria-hidden
            />
            <div className={SPLIT_REST_BODY}>
              <p>{linkify(data.intro)}</p>
            </div>
          </section>

          {data.heroImage ? (
            <MediaRowFull
              still={{ src: data.heroImage, alt: "" }}
              dataAos="topleft-hardscale-service-step-2"
            />
          ) : null}

          {useCaseBody && data.caseBody ? (
            <CaseBodyList items={data.caseBody} linkify={linkify} />
          ) : (
            <MediaSlot slot={m0} />
          )}

          <SplitSection
            section={{ heading: "Strategy", body: linkify(data.strategy) }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m1} />}

          <SplitSection
            section={{ heading: "Design", body: linkify(data.design) }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m2} />}

          <SplitSection
            section={{ heading: "Results", body: linkify(data.results) }}
            serviceRevealStep={2}
          />

          {useCaseBody ? null : <MediaSlot slot={m3} />}

          {moreHref ? <MoreWork currentHref={moreHref} /> : null}
        </div>
      </div>
    </div>
  );
}
