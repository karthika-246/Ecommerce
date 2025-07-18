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
  { id: 1, name: "Floral Top", category: "women", image: p1_img, new_price: 999, old_price: 1499 },
  { id: 2, name: "White Shirt", category: "women", image: p2_img, new_price: 499, old_price: 699 },
  { id: 3, name: "Pink Top", category: "women", image: p3_img, new_price: 400, old_price: 330 },
  { id: 4, name: "Sleeveless Top", category: "women", image: p4_img, new_price: 399, old_price: 699 },
  { id: 5, name: "Striped Shirt", category: "women", image: p5_img, new_price: 499, old_price: 699 },
  { id: 6, name: "Beige Top", category: "women", image: p6_img, new_price: 849, old_price: 1199 },
  { id: 7, name: "Kurti", category: "women", image: p7_img, new_price: 1249, old_price: 1799 },
  { id: 8, name: "Peplum Shirt", category: "women", image: p8_img, new_price: 999, old_price: 1399 },
  { id: 9, name: "Polka Top", category: "women", image: p9_img, new_price: 949, old_price: 1399 },
  { id: 10, name: "Pastel Shirt", category: "women", image: p10_img, new_price: 1199, old_price: 1699 },
  { id: 11, name: "Red Top", category: "women", image: p11_img, new_price: 999, old_price: 1399 },
  { id: 12, name: "Navy Top", category: "women", image: p12_img, new_price: 999, old_price: 1499 },

  // Men
  { id: 13, name: "Green Jacket", category: "men", image: p13_img, new_price: 350, old_price: 499 },
  { id: 14, name: "Black Jacket", category: "men", image: p14_img, new_price: 599, old_price: 799 },
  { id: 15, name: "Grey Jacket", category: "men", image: p15_img, new_price: 599, old_price: 699 },
  { id: 16, name: "Brown Coat", category: "men", image: p16_img, new_price: 299, old_price: 599 },
  { id: 17, name: "Olive Jacket", category: "men", image: p17_img, new_price: 599, old_price: 799 },
  { id: 18, name: "Blue Blazer", category: "men", image: p18_img, new_price: 299, old_price: 599 },
  { id: 19, name: "Leather Jacket", category: "men", image: p19_img, new_price: 299, old_price: 399 },
  { id: 20, name: "Long Coat", category: "men", image: p20_img, new_price: 399, old_price: 699 },
  { id: 21, name: "Hoodie", category: "men", image: p21_img, new_price: 499, old_price: 999 },
  { id: 22, name: "Cotton Jacket", category: "men", image: p22_img, new_price: 499, old_price: 699 },
  { id: 23, name: "Wind Jacket", category: "men", image: p23_img, new_price: 699, old_price: 899 },
  { id: 24, name: "Sport Jacket", category: "men", image: p24_img, new_price: 499, old_price: 799 },

  // Kids
  { id: 25, name: "Orange Hoodie", category: "kid", image: p25_img, new_price: 799, old_price: 1099 },
  { id: 26, name: "Red Hoodie", category: "kid", image: p26_img, new_price: 749, old_price: 999 },
  { id: 27, name: "Blue Pullover", category: "kid", image: p27_img, new_price: 849, old_price: 999 },
  { id: 28, name: "Grey Hoodie", category: "kid", image: p28_img, new_price: 799, old_price: 1099 },
  { id: 29, name: "Yellow Sweatshirt", category: "kid", image: p29_img, new_price: 899, old_price: 1099 },
  { id: 30, name: "Green Hoodie", category: "kid", image: p30_img, new_price: 449, old_price: 749 },
  { id: 31, name: "Black Hoodie", category: "kid", image: p31_img, new_price: 399, old_price: 699 },
  { id: 32, name: "Blue Jacket", category: "kid", image: p32_img, new_price: 599, old_price: 799 },
  { id: 33, name: "Red Zip", category: "kid", image: p33_img, new_price: 749, old_price: 999 },
  { id: 34, name: "Bear Hoodie", category: "kid", image: p34_img, new_price: 499, old_price: 699 },
  { id: 35, name: "Winter Jacket", category: "kid", image: p35_img, new_price: 400, old_price: 799 },
  { id: 36, name: "Sleeve Jacket", category: "kid", image: p36_img, new_price: 949, old_price: 1049 },
];

export default all_product;
