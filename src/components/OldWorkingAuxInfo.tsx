// "use client";
// import { cn } from "@/lib/utils";
// import { ChevronDown } from "lucide-react";
// import { useEffect, useState } from "react";
// import AdditionalInfo from "./ProductAdditionalInfo";
// import ProductQuestions from "./ProductQuestions";
// import ProductReviews from "./ProductReviews";

// const ProductAuxiliraryInfo = () => {
//   const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
//   const [isQuestionsPanelOpen, setIsQuestionsPanelOpen] = useState(false);
//   const [isReviewsPanelOpen, setIsReviewsPanelOpen] = useState(true);
//   const [isOnMobile, setIsOnMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 767px)");
//     setIsOnMobile(mediaQuery.matches);
//     const handleResize = () => {
//       setIsOnMobile(mediaQuery.matches);
//       if (!mediaQuery.matches) {
//         setIsInfoPanelOpen(false);
//         setIsQuestionsPanelOpen(false);
//         setIsReviewsPanelOpen(true);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const panelSelector = (tab: "info" | "questions" | "reviews") => {
//     let isPanelOpen: boolean;
//     switch (tab) {
//       case "info":
//         isPanelOpen = isInfoPanelOpen;
//         break;
//       case "questions":
//         isPanelOpen = isQuestionsPanelOpen;
//         break;
//       case "reviews":
//         isPanelOpen = isReviewsPanelOpen;
//         break;
//       default:
//         isPanelOpen = false;
//     }
//     return isPanelOpen;
//   };

//   const generatePanelHeaderClassname = (
//     tab: "info" | "questions" | "reviews",
//     useCase?: "chevronIcon"
//   ) => {
//     const isPanelOpen = panelSelector(tab);

//     if (useCase === "chevronIcon") {
//       return cn("transition-all duration-300 md:hidden", {
//         "rotate-180 ": isPanelOpen,
//       });
//     }

//     return `flex justify-between items-center min-w-min ${
//       isOnMobile ? "border-b border-black" : ""
//     }  ${
//       isPanelOpen
//         ? "font-semibold border-b border-black"
//         : "text-muted-foreground"
//     }`;
//   };

//   const generatePanelContentClassname = (
//     tab: "info" | "questions" | "reviews"
//   ) => {
//     const isPanelOpen = panelSelector(tab);

//     return cn(
//       `w-full duration-300 md:duration-0 transition-max-h md:transition-none max-h-0 md:absolute inset-x-0 top-10 overflow-hidden`,
//       {
//         "max-h-[500px]": isPanelOpen,
//       }
//     );
//   };

//   const generateOnclickFunction = (tab: "info" | "questions" | "reviews") => {
//     return () => {
//       if (!isOnMobile) {
//         setIsInfoPanelOpen(tab === "info");
//         setIsQuestionsPanelOpen(tab === "questions");
//         setIsReviewsPanelOpen(tab === "reviews");
//       } else {
//         if (tab === "info") {
//           setIsInfoPanelOpen(!isInfoPanelOpen);
//         } else if (tab === "questions") {
//           setIsQuestionsPanelOpen(!isQuestionsPanelOpen);
//         } else if (tab === "reviews") {
//           setIsReviewsPanelOpen(!isReviewsPanelOpen);
//         }
//       }
//     };
//   };

//   return (
//     <div className="relative md:border-b mb-20">
//       <div className="mt-6 flex flex-col md:flex-row md:gap-8">
//         {["Additional Info", "Questions", "Reviews"].map((tab) => {
//           let content;
//           let tabKey: "info" | "questions" | "reviews";
//           switch (tab) {
//             case "Additional Info":
//               tabKey = "info";
//               break;
//             case "Questions":
//               tabKey = "questions";
//               break;
//             case "Reviews":
//               tabKey = "reviews";
//               break;
//             default:
//               tabKey = "info";
//           }
//           if (tabKey === "info") {
//             content = <AdditionalInfo />;
//           } else if (tabKey === "questions") {
//             content = <ProductQuestions />;
//           } else if (tabKey === "reviews") {
//             content = <ProductReviews />;
//           }
//           return (
//             <div key={tab}>
//               <div
//                 className={generatePanelHeaderClassname(tabKey)}
//                 onClick={generateOnclickFunction(tabKey)}
//               >
//                 <h4 className="text-lg leading-8">{tab}</h4>
//                 <ChevronDown
//                   className={generatePanelHeaderClassname(
//                     tabKey,
//                     "chevronIcon"
//                   )}
//                 />
//               </div>
//               <div className={generatePanelContentClassname(tabKey)}>
//                 {content}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductAuxiliraryInfo;
