const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const ADMIN_TOKEN_KEY = "trc_admin_token";

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY);

export const saveAdminToken = (token) => {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
};

export const clearAdminToken = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

const getMessage = async (response) => {
  try {
    const data = await response.json();
    return data.message || "Request failed.";
  } catch {
    return "Request failed.";
  }
};

const getAuthHeaders = () => {
  const token = getAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const fetchDocuments = async (path) => {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(await getMessage(response));
  }

  return response.json();
};

const createDocument = async (path, formData) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!response.ok) {
    throw new Error(await getMessage(response));
  }

  return response.json();
};

const updateDocument = async (path, id, formData) => {
  const response = await fetch(`${API_BASE_URL}${path}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!response.ok) {
    throw new Error(await getMessage(response));
  }

  return response.json();
};

const deleteDocument = async (path, id) => {
  const response = await fetch(`${API_BASE_URL}${path}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error(await getMessage(response));
  }
};

export const loginAdmin = async ({ email, password }) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(await getMessage(response));
  }

  const data = await response.json();
  saveAdminToken(data.token);
  return data;
};

export const fetchPolicies = async () => {
  return fetchDocuments("/api/policies");
};

export const createPolicy = async (formData) => {
  return createDocument("/api/policies", formData);
};

export const updatePolicy = async (id, formData) => {
  return updateDocument("/api/policies", id, formData);
};

export const deletePolicy = async (id) => {
  return deleteDocument("/api/policies", id);
};

export const fetchFinancialReports = async () => {
  return fetchDocuments("/api/financial-reports");
};

export const createFinancialReport = async (formData) => {
  return createDocument("/api/financial-reports", formData);
};

export const updateFinancialReport = async (id, formData) => {
  return updateDocument("/api/financial-reports", id, formData);
};

export const deleteFinancialReport = async (id) => {
  return deleteDocument("/api/financial-reports", id);
};
