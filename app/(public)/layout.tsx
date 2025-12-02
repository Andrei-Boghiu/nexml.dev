import Navbar from "@/components/public-navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
