"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductAdditionalInfo = () => {
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(true);
  const [isQuestionsPanelOpen, setIsQuestionsPanelOpen] = useState(false);
  const [isReviewsPanelOpen, setIsReviewsPanelOpen] = useState(false);

  return (
    <div className="mt-6">
      {/* Additional Info */}
      <div>
        {/* Header */}
        <div
          className={`flex justify-between border-b border-black  ${
            isInfoPanelOpen ? "font-semibold" : "text-muted-foreground"
          }`}
          onClick={() => {
            setIsInfoPanelOpen(!isInfoPanelOpen);
          }}
        >
          <h4 className="text-lg leading-8">Additional Info</h4>
          <ChevronDown
            className={cn("transition-all duration-300", {
              "rotate-180 ": isInfoPanelOpen,
            })}
          />
        </div>

        {/* content */}
        <div
          className={cn(
            "w-full duration-300 delay-75 transition-max-h max-h-0 overflow-hidden",
            {
              "max-h-[500px]": isInfoPanelOpen,
            }
          )}
        >
          <div className="h-full w-full ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quaerat itaque totam aliquid velit porro dicta dolore cum maxime
            expedita dignissimos molestias iure minus fugit quia, veritatis sit
            enim est! Exercitationem possimus quis, voluptates unde dolorum,
            inventore sapiente expedita molestiae nam voluptas aut neque laborum
            et eius repellat. Nostrum illum, natus autem aliquam sint nihil
            ipsum nam sunt impedit laboriosam? Maxime eum laudantium modi vel
            esse illo magni perferendis quam cupiditate quisquam excepturi
            voluptatum repellendus eligendi explicabo animi, perspiciatis velit
            unde eveniet nihil quasi libero culpa. Molestias voluptatem eum
            suscipit. Dolorum quas doloremque quo nisi, iusto facilis modi
            inventore pariatur, molestiae nobis itaque impedit iste aliquam?
            Suscipit architecto tempora sapiente. Facilis enim iure error ad rem
            repudiandae, soluta possimus quae.
          </div>
        </div>
      </div>

      {/* Questions */}
      <div>
        {/* Header */}
        <div
          className={`flex justify-between border-b border-black  ${
            isQuestionsPanelOpen ? "font-semibold" : "text-muted-foreground"
          }`}
          onClick={() => {
            setIsQuestionsPanelOpen(!isQuestionsPanelOpen);
          }}
        >
          <h4 className="text-lg leading-8">Questions</h4>
          <ChevronDown
            className={cn("transition-all duration-300", {
              "rotate-180 ": isQuestionsPanelOpen,
            })}
          />
        </div>

        {/* content */}
        <div
          className={cn(
            "w-full transition-all duration-500 ease-linear max-h-0 overflow-hidden",
            {
              "max-h-[800px]": isQuestionsPanelOpen,
            }
          )}
        >
          <div className="h-full w-full bg-green-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quaerat itaque totam aliquid velit porro dicta dolore cum maxime
            expedita dignissimos molestias iure minus fugit quia, veritatis sit
            enim est! Exercitationem possimus quis, voluptates unde dolorum,
            inventore sapiente expedita molestiae nam voluptas aut neque laborum
            et eius repellat. Nostrum illum, natus autem aliquam sint nihil
            ipsum nam sunt impedit laboriosam? Maxime eum laudantium modi vel
            esse illo magni perferendis quam cupiditate quisquam excepturi
            voluptatum repellendus eligendi explicabo animi, perspiciatis velit
            unde eveniet nihil quasi libero culpa. Molestias voluptatem eum
            suscipit. Dolorum quas doloremque quo nisi, iusto facilis modi
            inventore pariatur, molestiae nobis itaque impedit iste aliquam?
            Suscipit architecto tempora sapiente. Facilis enim iure error ad rem
            repudiandae, soluta possimus quae.
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div>
        {/* Header */}
        <div
          className={`flex justify-between border-b border-black  ${
            isReviewsPanelOpen ? "font-semibold" : "text-muted-foreground"
          }`}
          onClick={() => {
            setIsReviewsPanelOpen(!isReviewsPanelOpen);
          }}
        >
          <h4 className="text-lg leading-8">Reviews</h4>
          <ChevronDown
            className={cn("transition-all duration-300", {
              "rotate-180 ": isReviewsPanelOpen,
            })}
          />
        </div>

        {/* content */}
        <div
          className={cn(
            "w-full transition-all duration-500 ease-linear max-h-0 overflow-hidden",
            {
              "max-h-[800px]": isReviewsPanelOpen,
            }
          )}
        >
          <div className="h-full w-full bg-green-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quaerat itaque totam aliquid velit porro dicta dolore cum maxime
            expedita dignissimos molestias iure minus fugit quia, veritatis sit
            enim est! Exercitationem possimus quis, voluptates unde dolorum,
            inventore sapiente expedita molestiae nam voluptas aut neque laborum
            et eius repellat. Nostrum illum, natus autem aliquam sint nihil
            ipsum nam sunt impedit laboriosam? Maxime eum laudantium modi vel
            esse illo magni perferendis quam cupiditate quisquam excepturi
            voluptatum repellendus eligendi explicabo animi, perspiciatis velit
            unde eveniet nihil quasi libero culpa. Molestias voluptatem eum
            suscipit. Dolorum quas doloremque quo nisi, iusto facilis modi
            inventore pariatur, molestiae nobis itaque impedit iste aliquam?
            Suscipit architecto tempora sapiente. Facilis enim iure error ad rem
            repudiandae, soluta possimus quae.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
