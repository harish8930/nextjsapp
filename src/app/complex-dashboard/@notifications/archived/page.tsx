import React from "react";
import { Card } from "@/components/card";
import Link from "next/link";

const Archived = () => {
  return (
    <Card>
      <div>Notification</div>
      <div>
        <Link href="/complex-dashboard">default</Link>
      </div>
    </Card>
  );
};

export default Archived;
