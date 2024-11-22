import { CreateSessionModal } from "@/features/sessions/components/create-session-modal";

interface DashboardLayoutProps {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return ( 
    <div className="min-h-screen">
      <CreateSessionModal />
      <div className="flex w-full h-full">

        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <main className="h-full py-8 px-6 flex flex-col">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default DashboardLayout;
