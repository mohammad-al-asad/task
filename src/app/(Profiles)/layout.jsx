import HeaderNav from "@/components/HeaderNav";
import ProfileNavigation from "@/components/ProfileNavigation";

export default function RootLayout({ children }) {
  return (
    <div className="bg-[#ed6a2338] flex p-[35px] gap-[74px]">
      <ProfileNavigation/>
      {children}
    </div>
  );
}
