"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/modal";
import SearchForm  from "./search-form";
import { Button } from "../ui/button";

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
        <SearchForm
          wrapperClassName="p-5"
          onSuccess={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
