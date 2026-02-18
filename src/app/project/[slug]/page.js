import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProjectMediaCarousel from "@/components/ProjectMediaCarousel";
import { projectsData } from "@/data/projectsData";

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const project = getProjectBySlug(slug);
    return {
      title: `${project.frontmatter.title} | Portfolio`,
      description: project.frontmatter.description,
    };
  } catch (error) {
    return {
      title: "Project Not Found | Portfolio",
    };
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch (error) {
    notFound();
  }

  const { frontmatter, content } = project;

  // Get project data for images and video
  const projectData = projectsData.find((p) => p.slug === slug);

  // Compile and run MDX
  let MDXContent;
  try {
    const code = String(
      await compile(content, { outputFormat: "function-body" })
    );
    const { default: Content } = await run(code, runtime);
    MDXContent = Content;
  } catch (error) {
    console.error("Error compiling MDX:", error);
    const ErrorComponent = () => <p>Error loading content</p>;
    ErrorComponent.displayName = "ErrorComponent";
    MDXContent = ErrorComponent;
  }

  return (
    <div className="max-w-3xl w-full mx-auto px-4 py-6">
      {/* Back Navigation */}
      <div className="w-full  pb-6 flex justify-between items-center">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Project Media Carousel - Video and Images */}
      <ProjectMediaCarousel
        video={projectData?.video}
        images={projectData?.images}
        title={frontmatter.title}
      />

      {/* Technology Badges */}
      {frontmatter.technologies && (
        <div className="w-full flex flex-wrap gap-2 mb-6">
          {frontmatter.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1 text-xs bg-white text-gray-900 border border-gray-200 rounded-full font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
      )}

      {/* Project Header */}
      <div className="w-full space-y-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {frontmatter.title}
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {frontmatter.description}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {frontmatter.timeline && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Timeline</p>
              <p className="text-sm font-medium text-gray-900">
                {frontmatter.timeline}
              </p>
            </div>
          )}
          {frontmatter.role && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Role</p>
              <p className="text-sm font-medium text-gray-900">
                {frontmatter.role}
              </p>
            </div>
          )}
          {frontmatter.team && (
            <div>
              <p className="text-xs text-gray-500 mb-1">Team</p>
              <p className="text-sm font-medium text-gray-900">
                {frontmatter.team}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {frontmatter.live && (
            <a
              href={frontmatter.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2  px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Live Demo
            </a>
          )}
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
