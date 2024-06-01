import React from "react";
import { ProductQuestionAnswer } from "@/types";

const ProductQuestions = ({
  productQuestionAnswers,
}: {
  productQuestionAnswers: ProductQuestionAnswer[];
}) => {
  return (
    <div className="w-full flex items-center justify-center">Questions</div>
  );
};

export default ProductQuestions;
