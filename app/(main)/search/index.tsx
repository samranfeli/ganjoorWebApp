"use client";

import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="ghost"
        type="button"
        aria-label="جستجو"
        onClick={() => {
          setOpen(true);
        }}
      >
        <SearchIcon />
      </Button>

      <Modal
        show={open}
        close={() => {
          setOpen(false);
        }}
      >
            searchForm
      </Modal>
    </>
  );
}
