const queryparams = {
  category: "living_room,bedroom,kitchen",
  colors: "Beige",
};

const queryparamarray = [
  ["category", "living_room,bedroom,kitchen"],
  ["colors", "Beige"],
];

let queryString = "a";
for ([key, value] of queryparamarray) {
  queryString + 5;
}

console.log(queryString);

// const queryString = `category=living_room,bedroom,kitchen`

// URLSearchParams { 'category' => 'living_room,bedroom,kitchen', 'colors' => 'Beige' }
// http://localhost:3000/api/products?category=living_room%2Cbedroom%2Ckitchen&colors=Beige
