import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  );
}
