import HeaderNav from "@/components/HeaderNav";

export default function RootLayout({ children }) {
  return (
    <div className="bg-linear-to-l from-[#ed6a2338] to-[#fff]">
      <HeaderNav />
      {children}
    </div>
  );
}
