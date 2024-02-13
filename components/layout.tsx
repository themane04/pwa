type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
            <li className="py-2 hover:bg-indigo-300 rounded">
              <a className="truncate" href="/">
                <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" alt="" />
                <span className="hidden sm:inline">Home</span>
              </a>
            </li>
            <li className="py-2 hover:bg-indigo-300 rounded">
              <a className="truncate" href="/settings">
                <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" className="w-7 sm:mx-2 mx-4 inline" alt="" />
                <span className="hidden sm:inline">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
        {children}
      </main>
    </div>
  );
}