import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../services/apiService";
import { Office } from "../types/type";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const OfficeDetails = () => {
  const baseURL = "http://127.0.0.1:8000/storage/";

  const { slug } = useParams<{ slug: string }>();
  const [office, setOffice] = useState<Office | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get(`/office/${slug}`)
      .then((response) => {
        setOffice(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error loading data: {error}</p>;
  }
  if (!office) {
    return <p>No office found</p>;
  }
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default OfficeDetails;