import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { AppContext, initialInvoiceData } from "../context/AppContext.jsx";
import { getAllInvoices } from "../service/invoiceService.js";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";
import "./Dashboard.css";

// Helper function to format date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function Dashboard() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();
  const { baseURL, setInvoiceData, setSelectedTemplate, setInvoiceTitle } =
    useContext(AppContext);

  const { getToken } = useAuth();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const token = await getToken();
        const response = await getAllInvoices(baseURL, token);
        setInvoices(response.data);
      } catch (error) {
        console.error("Failed to load invoices", error);
        toast.error("Something went wrong. Unable to load invoices");
      }
    };
    fetchInvoices();
  }, [baseURL, getToken]);

  const handleViewClick = (invoice) => {
    setInvoiceData(invoice);
    setSelectedTemplate(invoice.template || "template1");
    setInvoiceTitle(invoice.title || "View Invoice");
    navigate("/preview");
  };

  const handleCreateNew = () => {
    setInvoiceTitle("Create Invoice");
    setSelectedTemplate("template1");
    setInvoiceData(initialInvoiceData);
    navigate("/generate");
  };

  return (
    <div className="dashboard-container container-fluid">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Your Invoices</h1>
          {/* <p className="dashboard-subtitle">
            Create, manage, and track all your invoices in one place.
          </p> */}
        </div>
        <div className="dashboard-grid">
          {/* Create New Invoice Card */}
          <div className="create-new-card" onClick={handleCreateNew}>
            <Plus className="icon" size={48} strokeWidth={1.5} />
            <p className="create-new-card-text">Create New Invoice</p>
          </div>

          {/* Render Existing Invoices */}
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="invoice-card"
              onClick={() => handleViewClick(invoice)}
            >
              {invoice.thumbnailUrl ? (
                <img
                  src={invoice.thumbnailUrl}
                  className="invoice-card-thumbnail"
                  alt="Invoice Thumbnail"
                />
              ) : (
                <div className="invoice-card-thumbnail-placeholder"></div>
              )}
              <div className="invoice-card-body">
                <h6 className="invoice-card-title" title={invoice.title}>
                  {invoice.title}
                </h6>
                <small className="invoice-card-date">
                  Updated: {formatDate(invoice.lastUpdatedAt)}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
