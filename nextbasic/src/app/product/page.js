export default function Product() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#f5f5f5"
            }}
        >
            <div
                style={{
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    padding: "32px 40px",
                    minWidth: "320px"
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Products</h2>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>product1</li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>product2</li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>product3</li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}>product4</li>
                    <li style={{ padding: "10px 0" }}>product5</li>
                </ul>
            </div>
        </div>
    );
}