import { useEffect, useMemo, useState } from "react";
import { ExternalLink, FileText, RefreshCw } from "lucide-react";
import Layout from "../components/Layout";
import { fetchPolicies } from "../services/policyApi";
import { getPolicyViewerUrl } from "../utils/policyViewer";
import { sortPoliciesByUpload } from "../utils/policySort";

const getPolicyDate = (policy) =>
  `${policy.monthName || "Month"} ${policy.year || ""}`.trim();

const PoliciesPage = () => {
  const [policies, setPolicies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const sortedPolicies = useMemo(
    () => sortPoliciesByUpload(policies),
    [policies]
  );

  const loadPolicies = async () => {
    setError("");
    setIsLoading(true);

    try {
      const data = await fetchPolicies();
      setPolicies(data);
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPolicies();
  }, []);

  return (
    <Layout>
      <section className="bg-[#08050E] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="font-montserrat text-sm uppercase tracking-[0.22em] text-[#C9B983]">
            Compliance
          </p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-instrument text-5xl leading-none md:text-7xl">
                Policies
              </h1>
              <p className="mt-4 max-w-2xl font-montserrat text-sm leading-7 text-white/65 md:text-base">
                View the latest uploaded policy documents for Arvesta Financial
                Services Private Limited.
              </p>
            </div>

            <button
              type="button"
              onClick={loadPolicies}
              className="inline-flex h-11 items-center justify-center gap-2 border border-[#C9B983] px-4 font-montserrat text-sm font-semibold text-[#FFF2D5]"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5EC] px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          {isLoading ? (
            <p className="font-montserrat text-sm text-[#6B6577]">
              Loading policies...
            </p>
          ) : error ? (
            <div className="border border-red-200 bg-red-50 px-4 py-3 font-montserrat text-sm text-red-700">
              {error}
            </div>
          ) : sortedPolicies.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center border border-dashed border-[#D8CDAF] bg-white text-center">
              <FileText className="mb-3 text-[#AC8A3A]" size={28} />
              <p className="font-montserrat text-sm text-[#6B6577]">
                No policy documents have been uploaded yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {sortedPolicies.map((policy) => (
                <article
                  key={policy.id}
                  className="border border-[#D8CDAF] bg-white p-5 md:p-6"
                >
                  <p className="font-montserrat text-xs uppercase tracking-[0.18em] text-[#8D7C4D]">
                    {getPolicyDate(policy)}
                  </p>
                  <h2 className="mt-2 font-instrument text-3xl leading-tight text-[#17131F]">
                    {policy.name}
                  </h2>
                  <a
                    href={getPolicyViewerUrl(policy.url, policy.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 bg-[#2B2832] px-4 font-montserrat text-sm font-semibold text-white"
                  >
                    View document
                    <ExternalLink size={15} />
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PoliciesPage;
