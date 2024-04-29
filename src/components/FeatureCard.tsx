import React from "react";

const FeatureCard = ({
  featureTitle,
  desc,
  icon: Icon,
}: {
  featureTitle: string;
  desc: string;
  icon: React.FC;
}) => {
  return (
    <div className="px-8 py-12 bg-neutralGray font-poppings">
      <Icon />
      <h4 className="lg:text-xl mt-4 mb-1">{featureTitle}</h4>
      <p className="text-xs lg:text-sm text-muted-foreground">{desc}</p>
    </div>
  );
};

export default FeatureCard;
