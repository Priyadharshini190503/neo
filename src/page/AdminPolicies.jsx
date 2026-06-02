import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Pencil,
  Plus,
  RefreshCw,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import {
  clearAdminToken,
  createFinancialReport,
  createPolicy,
  deleteFinancialReport,
  deletePolicy,
  fetchFinancialReports,
  fetchPolicies,
  getAdminToken,
  loginAdmin,
  updateFinancialReport,
  updatePolicy,
} from "../services/policyApi";
import { getPolicyViewerUrl } from "../utils/policyViewer";
import { sortPoliciesByUpload } from "../utils/policySort";

const initialForm = {
  name: "",
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  policyDate: new Date().toISOString().slice(0, 10),
  reportDate: new Date().toISOString().slice(0, 10),
  file: null,
};

const documentTypes = {
  policies: {
    label: "Policies",
    singular: "Policy",
    fetch: fetchPolicies,
    create: createPolicy,
    update: updatePolicy,
    delete: deletePolicy,
    empty: "Upload your first policy document.",
    loginCopy: "Sign in to upload, update, and delete documents.",
    sidebarCopy: "Upload new documents or edit the selected document.",
    nameLabel: "Policy name",
    placeholder: "Fair Practices Code",
  },
  financialReports: {
    label: "Financial Reporting",
    singular: "Financial Report",
    fetch: fetchFinancialReports,
    create: createFinancialReport,
    update: updateFinancialReport,
    delete: deleteFinancialReport,
    empty: "Upload your first financial reporting document.",
    loginCopy: "Sign in to upload, update, and delete documents.",
    sidebarCopy: "Upload new documents or edit the selected document.",
    nameLabel: "Report name",
    placeholder: "Quarter and Financial Year ended Financial results - March 31, 2026",
  },
};

const months = Array.from({ length: 12 }, (_, index) => ({
  value: index + 1,
  label: new Date(2026, index, 1).toLocaleString("en", { month: "long" }),
}));

const years = Array.from({ length: 12 }, (_, index) => new Date().getFullYear() - index);

const getPolicyDate = (policy) =>
  `${policy.monthName || months[Number(policy.month) - 1]?.label || "Month"} ${policy.year}`;

const isFinancialReportType = (type) => type === "financialReports";

const getFallbackReportDate = (document) => {
  const year = Number(document.year);
  const month = Number(document.month);
  const day = new Date(year, month, 0).getDate();
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
};

const AdminPolicies = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(getAdminToken()));
  const [activeType, setActiveType] = useState("policies");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [documents, setDocuments] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingDocument, setEditingDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const documentConfig = documentTypes[activeType];
  const isFinancialReport = isFinancialReportType(activeType);

  const sortedDocuments = useMemo(
    () => sortPoliciesByUpload(documents),
    [documents]
  );

  const loadDocuments = useCallback(async () => {
    setError("");
    setIsLoading(true);

    try {
      const data = await documentConfig.fetch();
      setDocuments(data);
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setIsLoading(false);
    }
  }, [documentConfig]);

  useEffect(() => {
    if (isAuthenticated) {
      loadDocuments();
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, loadDocuments]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");
    setIsSaving(true);

    try {
      await loginAdmin(loginForm);
      setIsAuthenticated(true);
      setNotice("Admin login successful.");
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    clearAdminToken();
    setIsAuthenticated(false);
    setDocuments([]);
    resetForm();
    setNotice("");
    setError("");
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingDocument(null);
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
    resetForm();
    setNotice("");
    setError("");
  };

  const handleEdit = (document) => {
    setEditingDocument(document);
    setForm({
      name: document.name,
      year: document.year,
      month: document.month,
      policyDate: document.policyDate || getFallbackReportDate(document),
      reportDate: document.reportDate || getFallbackReportDate(document),
      file: null,
    });
    setNotice("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    if (!form.name.trim()) {
      setError(`${documentConfig.singular} name is required.`);
      return;
    }

    if (isFinancialReport && !form.reportDate) {
      setError("Report date is required.");
      return;
    }

    if (!isFinancialReport && !form.policyDate) {
      setError("Policy date is required.");
      return;
    }

    if (!editingDocument && !form.file) {
      setError("Please choose a document to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name.trim());

    if (isFinancialReport) {
      const reportDate = new Date(`${form.reportDate}T00:00:00`);
      formData.append("reportDate", form.reportDate);
      formData.append("year", reportDate.getFullYear());
      formData.append("month", reportDate.getMonth() + 1);
    } else {
      const policyDate = new Date(`${form.policyDate}T00:00:00`);
      formData.append("policyDate", form.policyDate);
      formData.append("year", policyDate.getFullYear());
      formData.append("month", policyDate.getMonth() + 1);
    }

    if (form.file) {
      formData.append("file", form.file);
    }

    setIsSaving(true);

    try {
      if (editingDocument) {
        await documentConfig.update(editingDocument.id, formData);
        setNotice(`${documentConfig.singular} updated.`);
      } else {
        await documentConfig.create(formData);
        setNotice(`${documentConfig.singular} uploaded.`);
      }

      resetForm();
      await loadDocuments();
    } catch (apiError) {
      setError(apiError.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5EC] px-5 text-[#17131F]">
        <section className="w-full max-w-md border border-[#D8CDAF] bg-white p-6 md:p-8">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#6E5D2E]"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>

          <h1 className="font-instrument text-4xl leading-tight">
            Admin Login
          </h1>
          <p className="mt-2 font-montserrat text-sm text-[#6B6577]">
            {documentTypes.policies.loginCopy}
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleLogin}>
            <label className="block font-montserrat text-sm font-semibold text-[#2B2832]">
              Email
              <input
                type="email"
                value={loginForm.email}
                onChange={(event) =>
                  setLoginForm({ ...loginForm, email: event.target.value })
                }
                className="mt-2 h-11 w-full border border-[#C9B983] px-3 font-normal outline-none focus:border-[#AC8A3A]"
                placeholder="admin@example.com"
              />
            </label>

            <label className="block font-montserrat text-sm font-semibold text-[#2B2832]">
              Password
              <input
                type="password"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm({ ...loginForm, password: event.target.value })
                }
                className="mt-2 h-11 w-full border border-[#C9B983] px-3 font-normal outline-none focus:border-[#AC8A3A]"
                placeholder="Password"
              />
            </label>

            {error && (
              <p className="border border-red-200 bg-red-50 px-3 py-2 font-montserrat text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex h-12 w-full items-center justify-center bg-[#2B2832] px-5 font-montserrat text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  const handleDelete = async (document) => {
    const confirmed = window.confirm(`Delete "${document.name}"?`);

    if (!confirmed) {
      return;
    }

    setError("");
    setNotice("");

    try {
      await documentConfig.delete(document.id);
      setNotice(`${documentConfig.singular} deleted.`);
      await loadDocuments();
    } catch (apiError) {
      setError(apiError.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5EC] text-[#17131F]">
      <div className="grid min-h-screen lg:grid-cols-[290px_1fr] xl:grid-cols-[390px_1fr]">
        <aside className="hide-scrollbar bg-[#AC8A38] px-5 py-6 text-white xl:px-7 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div className="mb-7">
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-[#D9C381]"
            >
              <ArrowLeft size={16} />
              Back to site
            </Link>

            <h1 className="font-instrument text-4xl leading-tight md:text-5xl">
              Document Admin
            </h1>
            <p className="mt-3 font-montserrat text-sm leading-6 text-white/60">
              {documentConfig.sidebarCopy}
            </p>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-2">
            {Object.entries(documentTypes).map(([type, config]) => (
              <button
                key={type}
                type="button"
                onClick={() => handleTypeChange(type)}
                className={`h-11 border px-3 font-montserrat text-sm font-semibold ${
                  activeType === type
                    ? "border-white bg-white text-[#6E5D2E]"
                    : "border-white/20 text-white"
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={loadDocuments}
              className="inline-flex h-11 items-center justify-center gap-2 border border-white/20 px-4 font-montserrat text-sm font-semibold text-white"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex h-11 items-center justify-center border border-red-300/40 px-4 font-montserrat text-sm font-semibold text-red-100"
            >
              Logout
            </button>
          </div>

          <section className="bg-white p-5 text-[#17131F] shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-instrument text-3xl">
                {editingDocument
                  ? `Update ${documentConfig.singular}`
                  : `Upload ${documentConfig.singular}`}
              </h2>
              {editingDocument && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex h-9 w-9 items-center justify-center border border-[#D8CDAF] text-[#2B2832]"
                  aria-label="Cancel editing"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block font-montserrat text-sm font-semibold text-[#2B2832]">
                {documentConfig.nameLabel}
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-2 h-11 w-full border border-[#C9B983] px-3 font-normal outline-none focus:border-[#AC8A3A]"
                  placeholder={documentConfig.placeholder}
                />
              </label>

              <label className="block font-montserrat text-sm font-semibold text-[#2B2832]">
                {isFinancialReport ? "Report date" : "Policy date"}
                <input
                  type="date"
                  value={isFinancialReport ? form.reportDate : form.policyDate}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      [isFinancialReport ? "reportDate" : "policyDate"]:
                        event.target.value,
                    })
                  }
                  className="mt-2 h-11 w-full border border-[#C9B983] bg-white px-3 font-normal outline-none focus:border-[#AC8A3A]"
                />
              </label>

              <label className="block font-montserrat text-sm font-semibold text-[#2B2832]">
                Document {editingDocument ? "(optional)" : ""}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) =>
                    setForm({ ...form, file: event.target.files?.[0] || null })
                  }
                  className="mt-2 block w-full border border-dashed border-[#C9B983] bg-[#FFFCF4] p-3 text-sm font-normal"
                />
              </label>

              {error && (
                <p className="border border-red-200 bg-red-50 px-3 py-2 font-montserrat text-sm text-red-700">
                  {error}
                </p>
              )}

              {notice && (
                <p className="border border-green-200 bg-green-50 px-3 py-2 font-montserrat text-sm text-green-700">
                  {notice}
                </p>
              )}

              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#AC8A38] px-5 font-montserrat text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {editingDocument ? <Pencil size={17} /> : <Upload size={17} />}
                {isSaving
                  ? "Saving..."
                  : editingDocument
                    ? `Update ${documentConfig.singular.toLowerCase()}`
                    : `Upload ${documentConfig.singular.toLowerCase()}`}
              </button>
            </form>
          </section>
        </aside>

        <section className="px-5 py-6 md:px-4 lg:px-4 xl:px-10">
          <div className="mb-6 flex flex-col gap-3 border-b border-[#D8CDAF] pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-montserrat text-xs uppercase tracking-[0.18em] text-[#8D7C4D]">
                Document Library
              </p>
              <h2 className="mt-1 font-instrument text-4xl leading-tight md:text-5xl">
                Uploaded {documentConfig.label}
              </h2>
            </div>
            <span className="inline-flex h-10 w-fit items-center gap-2 border border-[#D8CDAF] bg-white px-4 font-montserrat text-sm text-[#6E5D2E]">
              <FileText size={16} />
              {documents.length} files
            </span>
          </div>

          <div className="border border-[#D8CDAF] bg-white p-5 md:p-6">
          {isLoading ? (
            <p className="font-montserrat text-sm text-[#6B6577]">
              Loading {documentConfig.label.toLowerCase()}...
            </p>
          ) : sortedDocuments.length === 0 ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center border border-dashed border-[#D8CDAF] text-center">
              <Plus className="mb-3 text-[#AC8A3A]" size={26} />
              <p className="font-montserrat text-sm text-[#6B6577]">
                {documentConfig.empty}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#E8DEC2]">
              {sortedDocuments.map((document) => (
                <article
  key={document.id}
  className="py-4"
>
  <div className="flex flex-col items-center text-center md:items-start md:text-left">
    <p className="font-montserrat text-xs uppercase tracking-[0.18em] text-[#8D7C4D] self-start md:self-auto">
      {getPolicyDate(document)}
    </p>

    <h3 className="mt-1 font-montserrat text-base font-semibold text-[#2B2832] md:text-lg">
      {document.name}
    </h3>

    <a
      href={getPolicyViewerUrl(document.url, document.name)}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex items-center gap-1 font-montserrat text-sm font-semibold text-[#AC8A3A] underline underline-offset-4"
    >
      View document
      <ExternalLink size={14} />
    </a>
  </div>

  <div className="mt-4 flex items-center justify-between md:mt-0 md:justify-end md:gap-2">
    <button
      type="button"
      onClick={() => handleEdit(document)}
      className="inline-flex h-10 items-center justify-center gap-2 border border-[#C9B983] px-3 font-montserrat text-sm font-semibold text-[#2B2832]"
    >
      <Pencil size={15} />
      Edit
    </button>

    <button
      type="button"
      onClick={() => handleDelete(document)}
      className="inline-flex h-10 items-center justify-center gap-2 border border-red-200 px-3 font-montserrat text-sm font-semibold text-red-700"
    >
      <Trash2 size={15} />
      Delete
    </button>
  </div>
</article>
              ))}
            </div>
          )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPolicies;
