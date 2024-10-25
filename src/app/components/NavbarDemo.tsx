"use client";

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex">
      <Navbar/>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed border rounded-[150px]  top-2 inset-x-0 max-w-2xl mx-auto z-50 text-lg font-bold", className)}
    >
      <Menu setActive={setActive} >
      <HoveredLink href="/">Home</HoveredLink>
        <MenuItem className='hover:text-xl hover:underline' setActive={setActive} active={active} item="Examples">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Example 01</HoveredLink>
            <HoveredLink href="/interface-design">Example 02</HoveredLink>
            <HoveredLink href="/seo">Example 03</HoveredLink>
            <HoveredLink href="/branding">Example 04</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Basic Plan"
              href="/dashboard/pricing/basic"
              src=""
              description="Affordable plan for individuals."
            />
            <ProductItem
              title="Pro Plan"
              href="/dashboard/pricing/pro"
              src=""
              description="Advanced features for professionals."
            />
            <ProductItem
              title="Enterprise Plan"
              href="/dashboard/pricing/enterprise"
              src=""
              description="Custom solutions for large organizations."
            />
            <ProductItem
              title="Student Discount"
              href="/dashboard/pricing/student"
              src=""
              description="Special pricing for students and educators."
            />
          </div>
        </MenuItem>
        <HoveredLink href="/dashboard/about">About</HoveredLink>
      </Menu>
    </div>
  );
}
