import { Outlet } from "react-router";
import { MessageRoomCard } from "../components/message-room-card";
import {
  Sidebar,
  SidebarProvider,
  SidebarMenu,
  SidebarGroup,
  SidebarContent,
} from "~/common/components/ui/sidebar";


export default function MessagesLayout() {
  return (
    <SidebarProvider className="flex max-h-[calc(100vh-14rem)] overflow-hidden h-[calc(100vh-14rem)] min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 20 }).map((_, index) => (
                <MessageRoomCard
                  key={index}
                  id={index.toString()}
                  name={`User ${index}`}
                  lastMessage={`Last message ${index}`}
                  avatarUrl={`https://github.com/serranoarevalo.png`}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className=" h-full flex-1">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}