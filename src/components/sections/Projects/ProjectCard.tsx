import CarouselCard from "@/components/sections/Projects/CarouselCard";
import ListRowCard from "@/components/sections/Projects/ListRowCard";
import type { ProjectCardProps } from "@/types/index";

const ProjectCard = ({ view, ...rest }: ProjectCardProps) => {
  console.log(rest.image);
  console.log("Rendering project:", rest.title, "| image:", rest.image);

  return view === "carousel" ? (
    <CarouselCard
      title={rest.title}
      image={rest.image}
      description={rest.description}
      keyfeatures={rest.keyfeatures}
      techstack={rest.techstack}
      link={rest.link}
    />
  ) : (
    <ListRowCard
      title={rest.title}
      image={rest.image}
      description={rest.description}
    />
  );
};

export default ProjectCard;
