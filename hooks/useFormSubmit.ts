"use client";

import { useState } from "react";

interface FormData {
  [key: string]: string | number | boolean | undefined;
}

export function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = async (formType: string, data: FormData) => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType,
          ...data,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(result.message || "Thank you! We'll be in touch soon.");
      } else {
        setIsError(true);
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setIsError(true);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setIsError(false);
    setMessage("");
  };

  return {
    submitForm,
    isLoading,
    isSuccess,
    isError,
    message,
    reset,
  };
}
