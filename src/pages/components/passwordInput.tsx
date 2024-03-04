"use client";
import { IconEyeFilled } from "@tabler/icons-react";
import Inputfield, { InputFieldProps } from "./inputField";
import { IconEye } from "@tabler/icons-react";
import { useState } from "react";

interface PasswordInputProps extends InputFieldProps {}

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(true);
  const IconCmp = showPassword ? IconEyeFilled : IconEye;
  const passwordType = showPassword ? "password" : "text";

  return (
    <div style={{ position: "relative" }}>
      <Inputfield
        {...{ ...props, type: passwordType }}
        placeholder="Password"
      />
      {
        <IconCmp
          style={{
            position: "absolute",
            top: "30%",
            right: "5px",
            color: "#637381",
            cursor: "pointer",
          }}
          onClick={() => setShowPassword((current) => !current)}
        />
      }
    </div>
  );
}
