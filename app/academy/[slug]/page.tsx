import { getCourseBySlug, getRelatedCourses } from "@/lib/academy";
import { notFound } from "next/navigation";
import AcademyCourseClient from "@/components/academy/AcademyCourseClient";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: `${course.title} | EntireFM Academy`,
    description: course.description,
    alternates: { canonical: `https://www.entirefm.com/academy/${slug}` },
  };
}

export default async function AcademyCoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const related = getRelatedCourses(slug);

  return <AcademyCourseClient course={course} related={related} />;
}
