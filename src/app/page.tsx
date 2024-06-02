import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NewArrivals from "@/components/NewArrivals";
import ShopNowButton from "@/components/ShopNowButton";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";
import {
  DeliveryIcon,
  LockIcon,
  MailIcon,
  MoneyIcon,
  PhoneSupportIcon,
} from "../../public/icons/Icons";

const articles = [
  {
    id: 1,
    title: "7 ways to decor your home",
    link: "/blog/ways-to-decor",
    imageUrl: "/articles/decor-article-featured-image.jpg",
  },
  {
    id: 2,
    title: "Kitchen organization",
    link: "/blog/kitchen-organization",
    imageUrl: "/articles/kitchen-featured-image.jpg",
  },
  {
    id: 3,
    title: "Decor your bedroom",
    link: "/blog/decor-your-bedroom",
    imageUrl: "/articles/bedroom-featured-image.jpg",
  },
  {
    id: 4,
    title: "7 ways to decor your home",
    link: "/blog/ways-to-decor",
    imageUrl: "/articles/decor-article-featured-image.jpg",
  },
];

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

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <HeroSectionSlider />

        {/* about */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between pr-32">
          <span className="block text-3xl md:text-7xl font-poppins font-medium">
            Simply Unique<span className="text-[#6C7275]">/</span>
            <br /> Simply Better.
          </span>
          <span className="block text-md sm:text-muted-foreground md:text-xl lg:max-w-[420px] mt-4 lg:mt-0">
            <b>3legant</b> is a gift & decorations store based in HCMC, Vietnam.
            Est since 2019.
          </span>
        </div>

        {/* categories */}
        <div className="grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-6  lg:h-[700px] mt-10">
          <CategoryCard
            bgImageUrl={"/categories/livingroom.png"}
            isTall={true}
            category="Living Room"
            link="/shop/livingroom"
          />
          <CategoryCard
            bgImageUrl={"/categories/bedroom.png"}
            category="Bedroom"
            link="/shop/bedroom"
          />
          <CategoryCard
            bgImageUrl={"/categories/kitchen.png"}
            category="Kitchen"
            link="/shop/kitchen"
          />
        </div>

        <NewArrivals />

        {/* features */}
        <div className="mt-10 grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-x-2 gap-y-6">
          {features.map(({ id, featureTitle, desc, icon: Icon }) => {
            return (
              <div className="px-8 py-12 bg-neutralGray font-poppings" key={id}>
                <Icon />
                <h4 className="lg:text-xl mt-4 mb-1">{featureTitle}</h4>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>

      {/* Sale*/}
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="w-full lg:w-[50%] relative aspect-square">
          <Image src="/sale.jpg" fill alt="sale" />
        </div>
        <div className="flex flex-col pl-8 lg:pl-16 min-w-[50%] justify-center pt-16 pb-16 lg:pb-0 lg:pt-0 bg-neutralGray">
          <div className="max-w-[310px] lg:max-w-[420px] space-y-4">
            <p className="font-bold text-base leading-4 text-customBlue">
              SALE UP TO 35% OFF
            </p>
            <p className="text-3xl lg:text-5xl font-poppins">
              HUNDREDS of New lower prices!
            </p>
            <p className="text-base lg:text-xl font[300] lg:font-[200] leading-8 mb-6">
              Its more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <ShopNowButton to="/shop" color="black" />
          </div>
        </div>
      </div>

      {/* articles */}
      <MaxWidthWrapper>
        <div className="mt-10 lg:mt-20 ">
          <div className="flex justify-between items-end">
            <h2 className="font-poppins text-3xl lg:text-5xl">Articles</h2>
            <div className="hidden md:block">
              <ShopNowButton
                to={"/blog"}
                buttonText="More Articles"
                color="black"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row gap-12">
            {articles.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  link={article.link}
                  imageUrl={article.imageUrl}
                />
              );
            })}
          </div>
          <div className="mt-6 block md:hidden">
            <ShopNowButton
              to={"/blog"}
              buttonText="More Articles"
              color="black"
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <NewsLetter />

      <Footer />
    </>
  );
};

export default HomePage;
