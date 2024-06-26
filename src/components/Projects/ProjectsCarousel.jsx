import React from "react";
import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip
} from "@material-tailwind/react";

const ProjectsCarousel = ({ projects }) => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Carousel> 
      {projects.map((project) => (
       <div className="project-cards">
        <Card key={project.id} className="bg-menu-shadow shadow-lg" data-aos="fade-down">
        <CardHeader floated={false} color="transparent" className="flex justify-center w-full mt-0 mx-0">
                  <img className="h-full" src={project.imageUrl} alt="project image" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-2">
            <Typography variant="h4" color="white"  className="project-title">
              {project.title}
            </Typography>
            <Typography color="gray"  className="project-texts">
              {project.description}
            </Typography>
            <div className="flex gap-3 mb-4">
              <Tooltip content={project.developed}>
                <span className="cursor-pointer rounded-full border border-pink-900/5 bg-pink-900/50 p-3 text-pink-400 transition-colors hover:border-pink-900/10 hover:bg-pink-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    width="30"
                    height="30"
                    fill="white"
                  >
                    <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content={project.tools}>
                <span className="cursor-pointer rounded-full border border-pink-900/5 bg-pink-900/50 p-3 text-pink-400 transition-colors hover:border-pink-900/10 hover:bg-pink-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="30"
                    height="30"
                    fill="white"
                  >
                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content={project.github}>
                <span
                  onClick={() => handleClick(project.githublink)}
                  className="cursor-pointer rounded-full border border-pink-900/5 bg-pink-900/50 p-3 text-pink-400 transition-colors hover:border-pink-900/10 hover:bg-pink-900/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="30"
                    height="30"
                    fill="white"
                  >
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32c0-14.359-11.641-26-26-26zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                  </svg>
                </span>
              </Tooltip></div>
            </div> 
            <div className="text-center">
            <Button onClick={() => handleClick(project.link)} target="_blank" className="font-audiowide text-[#fffc00] text-[1em] w-48 relative overflow-hidden bg-gradient-to-l from-purple-600 to-pink-600 mt-7">
                    <span className="relative z-10 ">Explore</span>
                    <span className="absolute inset-0 bg-gradient-to-l from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></span>
                  </Button></div>
          </CardBody>
          <CardFooter />
        </Card></div>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
