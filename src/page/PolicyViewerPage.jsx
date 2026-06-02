import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEmbeddedPdfUrl } from "../utils/policyViewer";

const PolicyViewerPage = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url") || "";
  const title = searchParams.get("title") || "Policy Document";

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <div className="flex h-16 items-center justify-between gap-4 border-b border-white/10 px-4 md:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#FFF2D5]"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <h1 className="truncate text-right font-montserrat text-sm font-semibold md:text-base">
          {title}
        </h1>
      </div>

      {url ? (
        <iframe
          src={getEmbeddedPdfUrl(url)}
          title={title}
          className="h-[calc(100vh-64px)] w-full border-0 bg-white"
        />
      ) : (
        <div className="flex h-[calc(100vh-64px)] items-center justify-center px-5 text-center font-montserrat text-sm text-white/70">
          Document URL is missing.
        </div>
      )}
    </main>
  );
};

export default PolicyViewerPage;
