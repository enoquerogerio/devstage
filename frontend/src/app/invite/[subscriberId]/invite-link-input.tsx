"use client";
import IconButton from "@/components/icon.button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";
import React from "react";

interface InviteLinkInputProps {
  inviteLink: string;
}
const InviteLinkInput = ({ inviteLink }: InviteLinkInputProps) => {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
};

export default InviteLinkInput;
