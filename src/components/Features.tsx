import React from "react";
import FeatureCard from "./FeatureCard";
import {
  DeliveryIcon,
  MoneyIcon,
  LockIcon,
  PhoneSupportIcon,
} from "../../public/icons/Icons";

const features = [
  {
    id: 1,
    featureTitle: "Free Shipping",
    desc: "Order above $200",
    icon: DeliveryIcon,
  },
  {
    id: 2,
    featureTitle: "Money Back",
    desc: "30 days guaranteee",
    icon: MoneyIcon,
  },
  {
    id: 3,
    featureTitle: "Secure Payments",
    desc: "Secured by Stripe",
    icon: LockIcon,
  },
  {
    id: 4,
    featureTitle: "24/7 Support",
    desc: "Phone and Email Support",
    icon: PhoneSupportIcon,
  },
];

const Features = () => {
  return (
    <div className="mt-10 grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-x-2 gap-y-6">
      {features.map(({ id, featureTitle, desc, icon }) => {
        return (
          <FeatureCard
            key={id}
            featureTitle={featureTitle}
            desc={desc}
            icon={icon}
          />
        );
      })}
    </div>
  );
};

export default Features;
