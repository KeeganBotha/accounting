"use client";

import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";

type AppBarProps = {
  children: React.ReactNode;
};

export function AppBar({ children }: AppBarProps) {
  const pathname = usePathname();
  const paths = pathname.split("/");
  paths.shift();
  paths.shift();

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {paths.map((path, index) => {
                const isLastItem = index + 1 === paths.length;

                return (
                  <div key={path} className="flex flex-row items-center gap-4">
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {path}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                    {!isLastItem && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0 flex-grow overflow-auto">
        {children}
      </main>
    </SidebarInset>
  );
}
