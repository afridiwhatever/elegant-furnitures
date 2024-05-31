"use client";
import { useEffect, useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel";
import AdditionalInfo from "./ProductAdditionalInfo";
import ProductQuestions from "./ProductQuestions";
import ProductReviews from "./ProductReviews";
import { ProductReview } from "@/types";

enum Tab {
  Info = "info",
  Questions = "questions",
  Reviews = "reviews",
}

const ProductAuxiliaryInfo = ({
  productAdditionalInfo,
  productQuestions,
  productReviews,
}: {
  productAdditionalInfo: string[];
  productQuestions: string[];
  productReviews: ProductReview[];
}) => {
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

  const generateOnClickFunction = (tab: Tab) => {
    return () => {
      if (!isOnMobile) {
        setIsInfoPanelOpen(tab === Tab.Info);
        setIsQuestionsPanelOpen(tab === Tab.Questions);
        setIsReviewsPanelOpen(tab === Tab.Reviews);
      } else {
        if (tab === Tab.Info) {
          setIsInfoPanelOpen(!isInfoPanelOpen);
        } else if (tab === Tab.Questions) {
          setIsQuestionsPanelOpen(!isQuestionsPanelOpen);
        } else if (tab === Tab.Reviews) {
          setIsReviewsPanelOpen(!isReviewsPanelOpen);
        }
      }
    };
  };

  return (
    <div className="relative  mt-10 mb-10 ">
      <div className="flex flex-col md:flex-row md:gap-8  relative">
        <CollapsiblePanel
          title="Additional Info"
          isOpen={isInfoPanelOpen}
          onClick={generateOnClickFunction(Tab.Info)}
          isOnMobile={isOnMobile}
        >
          <AdditionalInfo />
        </CollapsiblePanel>
        <CollapsiblePanel
          title="Questions"
          isOpen={isQuestionsPanelOpen}
          onClick={generateOnClickFunction(Tab.Questions)}
          isOnMobile={isOnMobile}
        >
          <ProductQuestions />
        </CollapsiblePanel>
        <CollapsiblePanel
          title="Reviews"
          isOpen={isReviewsPanelOpen}
          onClick={generateOnClickFunction(Tab.Reviews)}
          isOnMobile={isOnMobile}
        >
          <ProductReviews productReviews={productReviews} />
        </CollapsiblePanel>
      </div>
    </div>
  );
};

export default ProductAuxiliaryInfo;
