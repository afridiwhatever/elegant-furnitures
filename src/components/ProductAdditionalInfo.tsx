"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductAdditionalInfo = () => {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  const [isQuestionsPanelOpen, setIsQuestionsPanelOpen] = useState(false);
  const [isReviewsPanelOpen, setIsReviewsPanelOpen] = useState(true);
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsOnMobile(mediaQuery.matches);
    const handleResize = () => {
      setIsOnMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setIsInfoPanelOpen(false);
        setIsQuestionsPanelOpen(false);
        setIsReviewsPanelOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative border-b  mb-20">
      <div className="mt-6 flex flex-col md:flex-row md:gap-8">
        {/* Additional Info */}

        <div>
          {/* Header */}
          <div
            className={`flex justify-between min-w-min ${
              isOnMobile ? "border-b border-black" : ""
            }  ${
              isInfoPanelOpen
                ? "font-semibold border-b border-black"
                : "text-muted-foreground"
            }`}
            onClick={() => {
              if (!isOnMobile) {
                setIsInfoPanelOpen(true);
                setIsQuestionsPanelOpen(false);
                setIsReviewsPanelOpen(false);
              } else {
                setIsInfoPanelOpen(!isInfoPanelOpen);
              }
            }}
          >
            <h4 className="text-lg leading-8">Additional Info</h4>
            <ChevronDown
              className={cn("transition-all duration-300 md:hidden", {
                "rotate-180 ": isInfoPanelOpen,
              })}
            />
          </div>

          {/* content */}

          <div
            className={cn(
              `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-10 overflow-hidden`,
              {
                "max-h-[500px]": isInfoPanelOpen,
              }
            )}
          >
            <div className="h-60 w-full flex items-center justify-center">
              Info
            </div>
          </div>
        </div>

        {/* Questions */}
        <div>
          {/* Header */}
          <div
            className={`flex justify-between min-w-min ${
              isOnMobile ? "border-b border-black" : ""
            }  ${
              isQuestionsPanelOpen
                ? "font-semibold border-b border-black"
                : "text-muted-foreground"
            }`}
            onClick={() => {
              if (!isOnMobile) {
                setIsQuestionsPanelOpen(true);
                setIsInfoPanelOpen(false);
                setIsReviewsPanelOpen(false);
              } else {
                setIsQuestionsPanelOpen(!isQuestionsPanelOpen);
              }
            }}
          >
            <h4 className="text-lg leading-8">Questions</h4>
            <ChevronDown
              className={cn("transition-all duration-300 md:hidden", {
                "rotate-180 ": isQuestionsPanelOpen,
              })}
            />
          </div>

          {/* content */}
          <div
            className={cn(
              `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-10 overflow-hidden`,
              {
                "max-h-[500px]": isQuestionsPanelOpen,
              }
            )}
          >
            <div className="h-60 w-full flex items-center justify-center">
              Questions
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div>
          {/* Header */}
          <div
            className={`flex justify-between min-w-min ${
              isOnMobile ? "border-b border-black" : ""
            }  ${
              isReviewsPanelOpen
                ? "font-semibold border-b border-black"
                : "text-muted-foreground"
            }`}
            onClick={() => {
              if (!isOnMobile) {
                setIsReviewsPanelOpen(true);
                setIsQuestionsPanelOpen(false);
                setIsInfoPanelOpen(false);
              } else {
                setIsReviewsPanelOpen(!isReviewsPanelOpen);
              }
            }}
          >
            <h4 className="text-lg leading-8">Reviews</h4>
            <ChevronDown
              className={cn("transition-all duration-300 md:hidden", {
                "rotate-180 ": isReviewsPanelOpen,
              })}
            />
          </div>

          {/* content */}
          <div
            className={cn(
              `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-10 overflow-hidden`,
              {
                "max-h-[500px]": isReviewsPanelOpen,
              }
            )}
          >
            <div className="h-60 w-full flex items-center justify-center">
              Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
