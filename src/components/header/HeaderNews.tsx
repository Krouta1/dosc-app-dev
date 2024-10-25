"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "../container";
import { APP_SETTINGS } from "@/lib/app-settings";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

/**
 * HeaderNews component that displays a news banner at the top of the page
 * @returns {JSX.Element} HeaderNews component
 * @public
 * @version 1.0.0
 * @category Components/Header
 * @example
 * return <HeaderNews />
 */

const HeaderNews = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "text-neutral-white flex h-28 items-center bg-slate-800 dark:bg-slate-600 sm:h-16 lg:h-12",
        APP_SETTINGS.news.setNews && pathname === "/" ? "block" : "hidden",
      )}
    >
      <Container className="flex flex-col items-start justify-center text-slate-200 sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-1 w-2/3 sm:w-full sm:pr-5">
          <span className="hidden pr-1 sm:inline">
            {APP_SETTINGS.news.icon}
          </span>
          {APP_SETTINGS.news.text}
        </div>
        <Button asChild className="px-10" size={"sm"} variant={"secondary"}>
          <Link href={"/"}>Read more</Link>
        </Button>
      </Container>
    </div>
  );
};

export default HeaderNews;
