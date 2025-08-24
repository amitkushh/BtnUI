"use client";
import { toast } from "sonner";
import { useState } from "react";

export function useCopy() {
  const [copyCode, setCopyCode] = useState<string | null>(null);

  const copy = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyCode(name);
      toast.success("Copied to clipboard!");
    } catch (error) {
      toast.error("Falied to copy code");
    }
  };

  const isCopied = (name: string) => copyCode === name;

  return {
    isCopied,
    copy,
  };
}
