import { WorkGrid } from "@/components/WorkGrid";
import { getMoreWorkTiles } from "@/lib/dumbarCopy";

type Props = { currentHref: string };

/** Case-study footer: other projects, same cards as `/work`, excluding the open one. */
export function MoreWork({ currentHref }: Props) {
  const tiles = getMoreWorkTiles(currentHref);
  if (tiles.length === 0) return null;

  return (
    <section
      className="o-grid work-case__more t-work"
      data-aos="topleft-hardscale-service-step-2"
    >
      <div className="o-col-12 work-case__more-heading">
        <h3>More Work</h3>
      </div>
      <WorkGrid
        tiles={tiles}
        itemClassName="project-link work-case__more-tile o-col-12 o-col-4--md"
      />
    </section>
  );
}
