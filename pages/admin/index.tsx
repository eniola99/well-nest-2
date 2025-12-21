import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import { OtpInput } from "@/src/components/OtpInput";

const Index = () => {
  const router = useRouter();
  const [codeSent, setCodeSent] = useState<boolean>(false);
  const [isLoging, setIsLoging] = useState<boolean>(false);

  useEffect(() => {
    if (!codeSent) {
      const verificationCode = async () => {
        const newToken =
          Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        const response = await fetch("/api/token/token", {
          method: "POST",
          body: JSON.stringify(newToken),
        });

        const initData = await response.json();
        console.log({ initData });
        if (initData.success) {
          toast.success(initData.massage);
        } else {
          toast.error("Something went wrong, try again");
        }
        setCodeSent(true);
      };
      verificationCode();
    }
  }, [codeSent]);

  const handleOtp = (code: string) => {
    setIsLoging(true);
    const verifyCode = async () => {
      const response = await fetch("/api/token/verify", {
        method: "POST",
        body: JSON.stringify(+code),
      });

      const initData = await response.json();
      if (initData.success) {
        toast.success(initData.message);
        setIsLoging(false);
        router.push("/dashboard");
      } else {
        setIsLoging(false);
        toast.error(initData.message);
      }
    };
    verifyCode();
  };

  const handleResend = () => {
    setCodeSent(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-3">
        {/* <div className="" onClick={() => router.back()}>
          <span>
            {" "}
            <i className="fa-solid fa-backward"></i> Go Back
          </span>
        </div> */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "90vh" }}
        >
          {isLoging ? (
            <Spinner />
          ) : (
            <div className="d-flex flex-column align-items-center">
              <h4 className="mb-4 text-center">
                A One-Time Password as been sent to the Admin Email
              </h4>
              <OtpInput length={6} onComplete={handleOtp} />
            </div>
          )}
        </div>
        {!isLoging && (
          <p className="text-seondary text-center">
            Didn&apos;t receive any code?{" "}
            <span
              className="text-primary text-decoration-underline"
              role="button"
              onClick={handleResend}
            >
              Click here
            </span>{" "}
            to resend
          </p>
        )}
      </div>
    </>
  );
};

export default Index;
