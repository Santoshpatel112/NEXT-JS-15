import "use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products (example public API). Replace URL with your API or /api route.
  async function fetchProducts(signal) {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products?limit=5", { signal });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      const data = await res.json();
      // normalize to simple shape used below
      setProducts(
        data.map((p, i) => ({
          id: p.id ?? i + 1,
          name: p.title ?? p.name ?? `Product ${i + 1}`,
        }))
      );
    } catch (err) {
      if (err.name === "AbortError") return;
      console.error("fetchProducts error:", err);
      setError(err.message || "Failed to load products");
      setProducts([]); // clear stale data
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const ctrl = new AbortController();
    fetchProducts(ctrl.signal);
    return () => ctrl.abort();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          padding: "32px 40px",
          minWidth: "320px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Products</h2>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        {error && (
          <div style={{ marginBottom: 16, color: "#a00", textAlign: "center" }}>
            <p>Failed to load products: {error}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
              <button
                onClick={() => fetchProducts()}
                style={{
                  padding: "8px 12px",
                  background: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {products.length === 0 && (
              <li style={{ padding: "10px 0" }}>No products available.</li>
            )}
            {products.map((p) => (
              <li
                key={p.id}
                style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}
              >
                <Link href={`/product/${p.id}`}>{p.name}</Link>
              </li>
            ))}
            {/* keep a static fallback item */}
            <li style={{ padding: "10px 0" }}>product5</li>
          </ul>
        )}
      </div>
    </div>
  );
}