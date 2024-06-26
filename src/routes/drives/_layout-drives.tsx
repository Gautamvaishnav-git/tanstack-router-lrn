import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Podcast } from "lucide-react";

export const Route = createFileRoute("/drives/_layout-drives")({
  component: LayoutComponent,
  beforeLoad(opts) {
    console.log("opts", { opts });
    if (!localStorage.getItem("authToken")) {
      opts.navigate({ to: "/drives" });
    }
  },
});

function LayoutComponent() {
  return (
    <div className="grid grid-cols-12 gap-1 pt-4 max-w-7xl mx-auto">
      <PostsBreadCrumb />

      <NavigationMenu className="col-span-12">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              className={navigationMenuTriggerStyle()}
              to="/drives/info"
              params={{ driveID: "10" }}
            >
              Info
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              className={navigationMenuTriggerStyle()}
              to="/drives/quizzes"
              params={{ driveID: "10" }}
            >
              Quizzes
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="col-span-12">
        <Outlet />
      </div>
    </div>
  );
}

function PostsBreadCrumb() {
  return (
    <Breadcrumb className="col-span-12">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/" className="flex items-center gap-1">
            <Podcast className="mr-2" /> Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link to="/drives" className="flex items-center gap-1">
            <Podcast className="mr-2" /> Posts
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
