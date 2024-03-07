import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("c1", "United States", "https://t4.ftcdn.net/jpg/01/08/63/05/360_F_108630521_vdfiljuKeTMpRsQiwjXwiEptgcYowYFi.jpg"),
  new Country("c2", "Japan", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"),
  new Country("c3", "Turkey", "https://cdn.britannica.com/82/4782-004-4119489D/Flag-Turkey.jpg"), 
  new Country("c4", "Singapore", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/255px-Flag_of_Singapore.svg.png"), 
  new Country("c5", "Indonesia", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png"), 
  new Country("c6", "Petoria", "https://static.wikia.nocookie.net/familyguyfanon/images/a/a9/Petoria_flag.png/revision/latest/scale-to-width-down/1200?cb=20231201131154"), 
  new Country("c7", "Brazil", "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png"), 
  new Country("c8", "Poland", "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png"), 
  new Country("c9", "China", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png"), 
  new Country("c10", "Antarctica", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/220px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png"), 
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Niagara Falls",
    50,
    "$0.00",
    4.5,
    "Great for water lovers",
    "https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
  ),
  new Destination(
    "d2",
    "c2",
    "Saizeriya Italian Restaurant",
    30,
    "$80",
    4.99,
    "Wow guys, this truly is the Italy of Japan",
    "https://cms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/0/1/4/5/29375410-1-eng-GB/%E5%A4%96%E9%A3%9F%E5%90%84%E7%A4%BE%EF%BC%B0%EF%BC%89%E3%82%B5%E3%82%A4%E3%82%BB%E3%82%99%E3%83%AA%E3%83%A4%E3%81%AE%E5%BA%97%E8%88%97%E5%86%99%E7%9C%9F20200915165149248_Datare.jpg"
  ),
  new Destination(
    "d3",
    "c3",
    "Turkish Icecream Guy",
    40,
    "$30",
    4.98,
    "They will teach you patience",
    "https://people.com/thmb/FofP8xb_tgZkk27_xKlXrlE6Dvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(299x0:301x2)/ice-cream-600x450-5991a54884ad4a808265100109fd08ac.jpg"
  ),
  new Destination(
    "d4",
    "c4",
    "Merlion",
    60,
    "$0",
    4.7,
    "Merlion Funny",
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Singapore_Merlion_BCT.jpg"
  ),
  new Destination(
    "d5",
    "c5",
    "Jakarta",
    25,
    "$100",
    3.8,
    "My friend went there once",
    "https://upload.wikimedia.org/wikipedia/commons/b/bf/Busway_in_Bundaran_HI.jpg"
  ),
  new Destination(
    "d6",
    "c6",
    "Griffin Household",
    35,
    "$999",
    5.000000000000001,
    "Hey Lois",
    "https://pbs.twimg.com/media/EaP3edVU8AAjrfR.jpg"
  ),
  new Destination(
    "d7",
    "c7",
    "Christ the Redeemer",
    45,
    "$95",
    4.3,
    "T-Pose",
    "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1625766320/20-Best-Things-To-Do-In-Brazil-Christo/20-Best-Things-To-Do-In-Brazil-Christo.jpg"
  ),
  new Destination(
    "d8",
    "c8",
    "Moszna Castle",
    55,
    "$10",
    4.98,
    "It was built in survival mode",
    "https://handluggageonly.co.uk/wp-content/uploads/2016/10/Hand-Luggage-Only-5-2.jpg"
  ),
  new Destination(
    "d9",
    "c9",
    "Great Wall of China",
    20,
    "$6",
    3.9,
    "It is so big like the backrooms",
    "https://www.his-j.com/theme/world-heritage/asia/china/great-wall/img/main04.jpg"
  ),
  new Destination(
    "d10",
    "c10",
    "Halley Research Station",
    65,
    "$0",
    3.999,
    "The Halley Research Station was established in 1956. It is very cool, pun intended.",
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Halley_VI_Antarctic_Research_Station_-_Science_modules.jpg"
  ),
  new Destination(
    "d11",
    "c1",
    "Grand Canyon",
    40,
    "$35",
    4.2,
    "Said to be one of the grandest canyons in the world",
    "https://ca-times.brightspotcdn.com/dims4/default/6783309/2147483647/strip/true/crop/7116x4744+0+0/resize/2400x1600!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F34%2F17%2F343617d24bf1a7e3689a51249dc5%2Fla-tr-grand-canyon-100-things-10.jpg"
  ),
  new Destination(
    "d12",
    "c2",
    "Cape Soya",
    35,
    "$0",
    4.0,
    "The northernmost point of Japan. You may or may not be able to see Russia from here.",
    "https://www.visit-hokkaido.jp/lsc/upfile/spot/0001/0140/10140_2_l.jpg"
  ),
  new Destination(
    "d13",
    "c3",
    "Istanbul",
    50,
    "$0",
    4.6,
    "Even Istanbul was Constantinople",
    "https://www.onenationtravel.com/wp-content/uploads/2022/07/Istanbul2.jpg.webp"
  ),
  new Destination(
    "d14",
    "c4",
    "Garden by the Bay",
    30,
    "$12",
    4.64,
    "They got cool tree things",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/10/gardens-by-the-bay-image.jpg"
  ),
  new Destination(
    "d15",
    "c5",
    "Bali",
    45,
    "$20",
    4.5,
    "Hey, who split my castle in half",
    "https://media-api.xogrp.com/images/0108e30b-f23f-4d5b-bacb-c13df8215c94~rs_768.h"
  ),
  new Destination(
    "d16",
    "c6",
    "The sideroom",
    55,
    "$999",
    0,
    "What's inside?",
    "https://i.kym-cdn.com/entries/icons/original/000/044/599/familyguysunroom.jpg"
  ),
  new Destination(
    "d17",
    "c7",
    "Ilha Grande",
    25,
    "$850",
    3.8,
    "Great for people who like long walks on the beach",
    "https://destinationlesstravel.com/wp-content/uploads/2017/01/DSC_0720-768x513.jpg.webp"
  ),
  new Destination(
    "d18",
    "c8",
    "Oskar Schindler's Factory",
    60,
    1999,
    4.9,
    "You know, the guy from the movie Schindler's list",
    "https://i.ytimg.com/vi/GgUiJgeoRos/maxresdefault.jpg"
  ),
  new Destination(
    "d19",
    "c9",
    "This Place",
    30,
    "$999",
    3.5,
    "Zhangjiajie rocks",
    "https://content.api.news/v3/images/bin/774b42f7d8c5edf72ddcdf7f31ad37ac"
  ),
  new Destination(
    "d20",
    "c10",
    "Lenin Head",
    40,
    "$0",
    4.4,
    "Located at the point farthest from any water in Antarctica",
    "https://gdb.rferl.org/17ABF203-1FD5-441B-A6D8-A2C01A27F973_w1071_s_d3.jpg"
  ),
  new Destination(
    "d21",
    "c10",
    "Dome Fuji",
    40,
    "$0",
    4.5,
    "Also known as Dome Valkyrie",
    "https://www.eri.u-tokyo.ac.jp/old/wp-content/uploads/2014/06/domefuji.DSC_1984.jpg"
  ),
];