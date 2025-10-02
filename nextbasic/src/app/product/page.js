import Link from "next/link";
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
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}><Link  href="/product/1">product1</Link></li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}><Link href={"/product/2"}>product2</Link></li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}><Link href={"/product/3"}>product3</Link></li>
                    <li style={{ padding: "10px 0", borderBottom: "1px solid #eee" }}><Link href={"/product/4"}>product4</Link></li>
                    <li style={{ padding: "10px 0" }}>product5</li>
                </ul>
            </div>
        </div>
    );
}