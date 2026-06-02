export const getPolicyViewerUrl = (url, title = "Policy Document") =>
  `/policy-viewer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

export const getEmbeddedPdfUrl = (url) => {
  const separator = url.includes("#") ? "&" : "#";
  return `${url}${separator}toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
};
