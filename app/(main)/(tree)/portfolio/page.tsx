import PortfolioItem from "@/components/portfolio/items";
import Empty from "@/components/shared/empty";
import { developerMeta } from "@/lib/constants";
import { ProjectItemProps } from "@/lib/interfaces";
const Page = () => {
  const projectItems: ProjectItemProps[] = developerMeta.projects;
  return (
    <article className="portfolio bg-eerie-black-2">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        {projectItems.length > 0 ? (
          <ul className="project-list">
            {projectItems.map(
              (
                { name, category, imgSrc, description }: ProjectItemProps,
                key,
              ) => {
                return (
                  <PortfolioItem
                    key={`item_${name}_${key}`}
                    name={name}
                    category={category}
                    imgSrc={imgSrc}
                    description={description}
                  />
                );
              },
            )}
          </ul>
        ) : (
          <Empty />
        )}
      </section>
    </article>
  );
};

export default Page;
