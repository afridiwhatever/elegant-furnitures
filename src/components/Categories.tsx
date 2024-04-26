import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
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
  );
};

export default Categories;
