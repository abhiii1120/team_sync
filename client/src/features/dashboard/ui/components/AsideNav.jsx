import {
  Book,
  ChartBar,
  EyeDashed,
  Settings,
  TerminalIcon,
} from "lucide-react";
import React from "react";

const AsideNav = () => {
  let nav = [
    {
      icon: <EyeDashed />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <Book />,
      name: "Tasks",
      link: "/tasks",
    },
    {
      icon: <TerminalIcon />,
      name: "Team",
      link: "/team",
    },
    {
      icon: <ChartBar />,
      name: "Chat",
      link: "/chat",
    },
    {
      icon: <Settings />,
      name: "Settings",
      link: "/settings",
    },
  ];

  return (
    <div className="border-r border-(--lineColor) py-8 flex flex-col gap-8">
      <div className="px-4">AsideNav</div>
      <div className="flex-1 bg-amber-50/10  py-4">
        {
            nav.map((item,key) => {
                return (
                    <div className="p-2  bg-amber-50">{item.name}</div>
                )
            })
        }
      </div>
    </div>
  );
};

export default AsideNav;
