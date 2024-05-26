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
              setIsInfoPanelOpen(!isInfoPanelOpen);
              if (!isOnMobile) {
                setIsQuestionsPanelOpen(false);
                setIsReviewsPanelOpen(false);
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
              "w-full duration-300 transition-max-h max-h-0 overflow-hidden md:absolute inset-x-0 top-10",
              {
                "max-h-[500px]": isInfoPanelOpen,
              }
            )}
          >
            <div className="h-full w-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat itaque totam aliquid velit porro dicta dolore cum maxime
              expedita dignissimos molestias iure minus fugit quia, veritatis
              sit enim est! Exercitationem possimus quis, voluptates unde
              dolorum, inventore sapiente expedita molestiae nam voluptas aut
              neque laborum et eius repellat. Nostrum illum, natus autem aliquam
              sint nihil ipsum nam sunt impedit laboriosam? Maxime eum
              laudantium modi vel esse illo magni perferendis quam cupiditate
              quisquam excepturi voluptatum repellendus eligendi explicabo
              animi, perspiciatis velit unde eveniet nihil quasi libero culpa.
              Molestias voluptatem eum suscipit. Dolorum quas doloremque quo
              nisi, iusto facilis modi inventore pariatur, molestiae nobis
              itaque impedit iste aliquam? Suscipit architecto tempora sapiente.
              Facilis enim iure error ad rem repudiandae, soluta possimus quae.
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
              setIsQuestionsPanelOpen(!isQuestionsPanelOpen);
              if (!isOnMobile) {
                setIsInfoPanelOpen(false);
                setIsReviewsPanelOpen(false);
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
              "w-full duration-300 transition-max-h max-h-0 overflow-hidden md:absolute  inset-x-0 top-10",
              {
                "max-h-[800px]": isQuestionsPanelOpen,
              }
            )}
          >
            <div className="h-full w-full bg-green-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat itaque totam aliquid velit porro dicta dolore cum maxime
              expedita dignissimos molestias iure minus fugit quia, veritatis
              sit enim est! Exercitationem possimus quis, voluptates unde
              dolorum, inventore sapiente expedita molestiae nam voluptas aut
              neque laborum et eius repellat. Nostrum illum, natus autem aliquam
              sint nihil ipsum nam sunt impedit laboriosam? Maxime eum
              laudantium modi vel esse illo magni perferendis quam cupiditate
              quisquam excepturi voluptatum repellendus eligendi explicabo
              animi, perspiciatis velit unde eveniet nihil quasi libero culpa.
              Molestias voluptatem eum suscipit. Dolorum quas doloremque quo
              nisi, iusto facilis modi inventore pariatur, molestiae nobis
              itaque impedit iste aliquam? Suscipit architecto tempora sapiente.
              Facilis enim iure error ad rem repudiandae, soluta possimus quae.
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
              setIsReviewsPanelOpen(!isReviewsPanelOpen);
              if (!isOnMobile) {
                setIsQuestionsPanelOpen(false);
                setIsInfoPanelOpen(false);
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
              "w-full duration-300 transition-max-h max-h-0 overflow-hidden md:absolute inset-x-0 top-10",
              {
                "max-h-[800px]": isReviewsPanelOpen,
              }
            )}
          >
            <div className="h-full w-full bg-yellow-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quaerat itaque totam aliquid velit porro dicta dolore cum maxime
              expedita dignissimos molestias iure minus fugit quia, veritatis
              sit enim est! Exercitationem possimus quis, voluptates unde
              dolorum, inventore sapiente expedita molestiae nam voluptas aut
              neque laborum et eius repellat. Nostrum illum, natus autem aliquam
              sint nihil ipsum nam sunt impedit laboriosam? Maxime eum
              laudantium modi vel esse illo magni perferendis quam cupiditate
              quisquam excepturi voluptatum repellendus eligendi explicabo
              animi, perspiciatis velit unde eveniet nihil quasi libero culpa.
              Molestias voluptatem eum suscipit. Dolorum quas doloremque quo
              nisi, iusto facilis modi inventore pariatur, molestiae nobis
              itaque impedit iste aliquam? Suscipit architecto tempora sapiente.
              Facilis enim iure error ad rem repudiandae, soluta possimus quae.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
