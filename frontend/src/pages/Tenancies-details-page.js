import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./pages.css";
import { TenancyDetails } from "../components/Tenancy-details";

export const TenanciesDetailsPage = () => {
  const [tenancy, setTenancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/tenancy/" + id);
      const result = await response.json();
      setTenancy(result);
    })();
  }, [id, tenancy]);

  return (
    <>
      <div className="tenancy-list">
        {tenancy &&
          tenancy.map((t) => (
            <TenancyDetails
              key={t.id}
              {...t}
            />
          ))}
      </div>
    </>
  );
};
