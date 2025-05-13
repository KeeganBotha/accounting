import { getSideMenu } from "@/app/private/action";
import { InferSafeActionFnResult } from "next-safe-action";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import { Icon } from "../icon";

type SideBarButtonProps = {
  item: NonNullable<InferSafeActionFnResult<typeof getSideMenu>["data"]>[0];
};

export function SideBarButton({ item }: SideBarButtonProps) {
  return (
    <Collapsible
      key={item.id}
      asChild
      defaultOpen={false}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.name}>
            <Icon iconName={item.iconName as any} />
            <span>{item.name}</span>
            <Icon
              iconName="chevronDown"
              className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.map((subItem) => (
              <SidebarMenuSubItem key={subItem.id}>
                <SidebarMenuSubButton asChild>
                  <a href={subItem.path}>
                    <span>{subItem.name}</span>
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
