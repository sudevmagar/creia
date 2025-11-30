import DashboardLayoutWrapper from "./components/DashboardLayoutWrapper";

export const metadata = {
  title: "Dashboard - Creia",
  description: "Your personalized dashboard on Creia.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
    </>
  );
}
