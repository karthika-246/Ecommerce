// Import all 36 product images
import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  // Women
  {
    id: 1,
    name: "Floral Top",
    category: "women",
    image: p1_img,
    new_price: 999,
    old_price: 1499,
    reviews: [
      { user: "Anita", rating: 5, comment: "Lovely floral design, very comfortable." },
      { user: "Meena", rating: 4, comment: "Nice top, but runs slightly small." }
    ]
  },
  {
    id: 2,
    name: "White Shirt",
    category: "women",
    image: p2_img,
    new_price: 499,
    old_price: 699,
    reviews: [
      { user: "Sneha", rating: 4, comment: "Classic look, goes with everything." },
      { user: "Riya", rating: 5, comment: "Great fit and quality!" }
    ]
  },
  {
    id: 3,
    name: "Pink Top",
    category: "women",
    image: p3_img,
    new_price: 400,
    old_price: 330,
    reviews: [
      { user: "Priya", rating: 5, comment: "Pretty color, perfect for summer." },
      { user: "Kavya", rating: 4, comment: "Good fabric, worth the price." }
    ]
  },
  {
    id: 4,
    name: "Sleeveless Top",
    category: "women",
    image: p4_img,
    new_price: 399,
    old_price: 699,
    reviews: [
      { user: "Nisha", rating: 4, comment: "Comfortable for casual wear." },
      { user: "Aarti", rating: 3, comment: "Nice but a bit thin material." }
    ]
  },
  {
    id: 5,
    name: "Striped Shirt",
    category: "women",
    image: p5_img,
    new_price: 499,
    old_price: 699,
    reviews: [
      { user: "Divya", rating: 5, comment: "Trendy and comfortable." },
      { user: "Pooja", rating: 4, comment: "Fabric is soft, looks stylish." }
    ]
  },
  {
    id: 6,
    name: "Beige Top",
    category: "women",
    image: p6_img,
    new_price: 849,
    old_price: 1199,
    reviews: [
      { user: "Simran", rating: 4, comment: "Simple yet elegant." },
      { user: "Shreya", rating: 5, comment: "Very classy design." }
    ]
  },
  {
    id: 7,
    name: "Kurti",
    category: "women",
    image: p7_img,
    new_price: 1249,
    old_price: 1799,
    reviews: [
      { user: "Anjali", rating: 5, comment: "Perfect for festive occasions." },
      { user: "Neha", rating: 4, comment: "Comfortable and stylish." }
    ]
  },
  {
    id: 8,
    name: "Peplum Shirt",
    category: "women",
    image: p8_img,
    new_price: 999,
    old_price: 1399,
    reviews: [
      { user: "Kiran", rating: 5, comment: "Fits perfectly, great quality." },
      { user: "Tina", rating: 4, comment: "Good style, worth buying." }
    ]
  },
  {
    id: 9,
    name: "Polka Top",
    category: "women",
    image: p9_img,
    new_price: 949,
    old_price: 1399,
    reviews: [
      { user: "Swati", rating: 5, comment: "Polka dots never go out of fashion!" },
      { user: "Lata", rating: 4, comment: "Looks cute, material is good." }
    ]
  },
  {
    id: 10,
    name: "Pastel Shirt",
    category: "women",
    image: p10_img,
    new_price: 1199,
    old_price: 1699,
    reviews: [
      { user: "Rachna", rating: 5, comment: "Beautiful pastel shade." },
      { user: "Vani", rating: 4, comment: "Soft fabric, very comfy." }
    ]
  },
  {
    id: 11,
    name: "Red Top",
    category: "women",
    image: p11_img,
    new_price: 999,
    old_price: 1399,
    reviews: [
      { user: "Neelam", rating: 5, comment: "Bright and attractive!" },
      { user: "Sita", rating: 4, comment: "Good fit and fabric." }
    ]
  },
  {
    id: 12,
    name: "Navy Top",
    category: "women",
    image: p12_img,
    new_price: 999,
    old_price: 1499,
    reviews: [
      { user: "Rekha", rating: 5, comment: "Perfect for office wear." },
      { user: "Maya", rating: 4, comment: "Good quality at this price." }
    ]
  },

  // Men
  {
    id: 13,
    name: "Green Jacket",
    category: "men",
    image: p13_img,
    new_price: 350,
    old_price: 499,
    reviews: [
      { user: "Arjun", rating: 5, comment: "Warm and stylish." },
      { user: "Rahul", rating: 4, comment: "Good jacket for the price." }
    ]
  },
  {
    id: 14,
    name: "Black Jacket",
    category: "men",
    image: p14_img,
    new_price: 599,
    old_price: 799,
    reviews: [
      { user: "Karan", rating: 5, comment: "Classic black, looks amazing." },
      { user: "Rohit", rating: 4, comment: "Comfortable but a bit heavy." }
    ]
  },
  {
    id: 15,
    name: "Grey Jacket",
    category: "men",
    image: p15_img,
    new_price: 599,
    old_price: 699,
    reviews: [
      { user: "Sahil", rating: 5, comment: "Perfect winter wear." },
      { user: "Deepak", rating: 4, comment: "Good material, nice fit." }
    ]
  },
  {
    id: 16,
    name: "Brown Coat",
    category: "men",
    image: p16_img,
    new_price: 299,
    old_price: 599,
    reviews: [
      { user: "Vivek", rating: 5, comment: "Formal and elegant." },
      { user: "Ravi", rating: 4, comment: "Looks good, fabric is okay." }
    ]
  },
  {
    id: 17,
    name: "Olive Jacket",
    category: "men",
    image: p17_img,
    new_price: 599,
    old_price: 799,
    reviews: [
      { user: "Aman", rating: 5, comment: "Trendy olive shade." },
      { user: "Mohit", rating: 4, comment: "Nice fit and finish." }
    ]
  },
  {
    id: 18,
    name: "Blue Blazer",
    category: "men",
    image: p18_img,
    new_price: 299,
    old_price: 599,
    reviews: [
      { user: "Suresh", rating: 5, comment: "Perfect for parties." },
      { user: "Aditya", rating: 4, comment: "Good quality blazer." }
    ]
  },
  {
    id: 19,
    name: "Leather Jacket",
    category: "men",
    image: p19_img,
    new_price: 299,
    old_price: 399,
    reviews: [
      { user: "Nikhil", rating: 5, comment: "Stylish leather look." },
      { user: "Varun", rating: 4, comment: "Comfortable, looks premium." }
    ]
  },
  {
    id: 20,
    name: "Long Coat",
    category: "men",
    image: p20_img,
    new_price: 399,
    old_price: 699,
    reviews: [
      { user: "Rajesh", rating: 5, comment: "Great for winter." },
      { user: "Ajay", rating: 4, comment: "Nice coat, runs a bit long." }
    ]
  },
  {
    id: 21,
    name: "Hoodie",
    category: "men",
    image: p21_img,
    new_price: 499,
    old_price: 999,
    reviews: [
      { user: "Sameer", rating: 5, comment: "Super comfy hoodie." },
      { user: "Dev", rating: 4, comment: "Good fit, nice material." }
    ]
  },
  {
    id: 22,
    name: "Cotton Jacket",
    category: "men",
    image: p22_img,
    new_price: 499,
    old_price: 699,
    reviews: [
      { user: "Imran", rating: 4, comment: "Soft cotton, lightweight." },
      { user: "Manoj", rating: 5, comment: "Very breathable jacket." }
    ]
  },
  {
    id: 23,
    name: "Wind Jacket",
    category: "men",
    image: p23_img,
    new_price: 699,
    old_price: 899,
    reviews: [
      { user: "Tarun", rating: 5, comment: "Perfect for windy days." },
      { user: "Gaurav", rating: 4, comment: "Good jacket for jogging." }
    ]
  },
  {
    id: 24,
    name: "Sport Jacket",
    category: "men",
    image: p24_img,
    new_price: 499,
    old_price: 799,
    reviews: [
      { user: "Anand", rating: 5, comment: "Best for sports practice." },
      { user: "Kabir", rating: 4, comment: "Good fabric, dries fast." }
    ]
  },

  // Kids
  {
    id: 25,
    name: "Orange Hoodie",
    category: "kid",
    image: p25_img,
    new_price: 799,
    old_price: 1099,
    reviews: [
      { user: "Ramesh", rating: 5, comment: "My son loves it!" },
      { user: "Pooja", rating: 4, comment: "Bright and comfy." }
    ]
  },
  {
    id: 26,
    name: "Red Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 749,
    old_price: 999,
    reviews: [
      { user: "Kiran", rating: 5, comment: "Perfect for school wear." },
      { user: "Shalini", rating: 4, comment: "Good hoodie, fabric is soft." }
    ]
  },
  {
    id: 27,
    name: "Blue Pullover",
    category: "kid",
    image: p27_img,
    new_price: 849,
    old_price: 999,
    reviews: [
      { user: "Manoj", rating: 5, comment: "Warm and stylish pullover." },
      { user: "Divya", rating: 4, comment: "Good quality for the price." }
    ]
  },
  {
    id: 28,
    name: "Grey Hoodie",
    category: "kid",
    image: p28_img,
    new_price: 799,
    old_price: 1099,
    reviews: [
      { user: "Sunil", rating: 5, comment: "Looks smart and comfy." },
      { user: "Nidhi", rating: 4, comment: "Nice hoodie for winter." }
    ]
  },
  {
    id: 29,
    name: "Yellow Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 899,
    old_price: 1099,
    reviews: [
      { user: "Aarti", rating: 5, comment: "Bright color, my kid loves it." },
      { user: "Deepa", rating: 4, comment: "Good material, worth the price." }
    ]
  },
  {
    id: 30,
    name: "Green Hoodie",
    category: "kid",
    image: p30_img,
    new_price: 449,
    old_price: 749,
    reviews: [
      { user: "Anil", rating: 5, comment: "Affordable and comfortable." },
      { user: "Sneha", rating: 4, comment: "Nice hoodie, fits well." }
    ]
  },
  {
    id: 31,
    name: "Black Hoodie",
    category: "kid",
    image: p31_img,
    new_price: 399,
    old_price: 699,
    reviews: [
      { user: "Raj", rating: 5, comment: "Classic black, looks cool." },
      { user: "Maya", rating: 4, comment: "Good product for daily wear." }
    ]
  },
  {
    id: 32,
    name: "Blue Jacket",
    category: "kid",
    image: p32_img,
    new_price: 599,
    old_price: 799,
    reviews: [
      { user: "Sanjay", rating: 5, comment: "My son loves this jacket." },
      { user: "Kavita", rating: 4, comment: "Good for winter season." }
    ]
  },
  {
    id: 33,
    name: "Red Zip",
    category: "kid",
    image: p33_img,
    new_price: 749,
    old_price: 999,
    reviews: [
      { user: "Vikram", rating: 5, comment: "Stylish zip jacket." },
      { user: "Priya", rating: 4, comment: "Looks nice and comfortable." }
    ]
  },
  {
    id: 34,
    name: "Bear Hoodie",
    category: "kid",
    image: p34_img,
    new_price: 499,
    old_price: 699,
    reviews: [
      { user: "Geeta", rating: 5, comment: "Cute bear design, my kid adores it." },
      { user: "Harish", rating: 4, comment: "Very soft and warm." }
    ]
  },
  {
    id: 35,
    name: "Winter Jacket",
    category: "kid",
    image: p35_img,
    new_price: 400,
    old_price: 799,
    reviews: [
      { user: "Manish", rating: 5, comment: "Excellent quality jacket." },
      { user: "Alka", rating: 4, comment: "Affordable and good for winters." }
    ]
  },
  {
    id: 36,
    name: "Sleeve Jacket",
    category: "kid",
    image: p36_img,
    new_price: 949,
    old_price: 1049,
    reviews: [
      { user: "Geeta", rating: 5, comment: "Premium quality, worth the price." },
      { user: "Harish", rating: 4, comment: "Looks stylish, my daughter loves it." }
    ]
  }
];

export default all_product;
