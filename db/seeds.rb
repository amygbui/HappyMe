# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
Review.destroy_all

a = User.create(name: "Amy", username: "amy", password: "password", avatar: "https://s3-us-west-1.amazonaws.com/happyme-dev/users/avatars/000/000/001/original/a.jpg")
v = User.create(name: "Vince", username: "vince", password: "password", avatar: "https://s3-us-west-1.amazonaws.com/happyme-dev/users/avatars/000/000/002/original/v.jpeg")
s = User.create(name: "Ashley", username: "ashley", password: "password", avatar: "https://s3-us-west-1.amazonaws.com/happyme-dev/users/avatars/000/000/003/original/s.jpg")
j = User.create(name: "Joseph", username: "joe", password: "password", avatar: "https://s3-us-west-1.amazonaws.com/happyme-dev/users/avatars/000/000/004/original/j.jpg")
g = User.create(name: "Guest", username: "guest", password: "password")

r1 = Restaurant.create(
  name: "Chuck and Blade",
  address: "184 8th Ave",
  city: "New York",
  state: "NY",
  zip: 10011,
  phone_number: "(646) 370-3494",
  lat: 40.743083,
  lng: -73.999881,
  description: "Cheap $1 oysters from 5-8pm, M-F",
  image: "https://s3-media1.fl.yelpcdn.com/bphoto/s5JVd0NNZoUWCk_sXCmbgw/o.jpg"
)


r2 = Restaurant.create(
  name: "Bread and Tulips",
  address: "365 Park Ave S",
  city: "New York",
  state: "NY",
  zip: 10016,
  phone_number: "(212) 532-9100",
  lat: 40.742355,
  lng: -73.984697,
  description: "$5 beer, $7 pizza and wine",
  image: "https://s3-media1.fl.yelpcdn.com/bphoto/9vgkeiPOc5KaTqiM6uqvsw/o.jpg"
)

r3 = Restaurant.create(
  name: "The Cellar",
  address: "900 Broadway",
  city: "New York",
  state: "NY",
  zip: 10003,
  phone_number: "(212) 466-3340",
  lat: 40.739143,
  lng: -73.989677,
  description: "Happy hour every day! Cocktails, beer, wine, food, we have it all!",
  image: "https://s3-media4.fl.yelpcdn.com/bphoto/37fWF-eIVv_wnLOtxG4XiQ/o.jpg"
)


r4 = Restaurant.create(
  name: "Amelie",
  address: "22 W 8th St",
  city: "New York",
  state: "NY",
  zip: 10011,
  phone_number: "(212) 533-2962",
  lat: 40.743083,
  lng: -73.999881,
  description: "$12 wine flight",
  image: "https://s3-media1.fl.yelpcdn.com/bphoto/cSDgVuPMnJgMLTrTNSEXug/o.jpg"
)

r5 = Restaurant.create(
  name: "La Contenta",
  address: "102 Norfolk St",
  city: "New York",
  state: "NY",
  zip: 10002,
  phone_number: "(212) 432-4180",
  lat: 40.718937,
  lng: -73.986971,
  description: "$8 drinks and food",
  image: "https://s3-media2.fl.yelpcdn.com/bphoto/FwZAyPgdKdPGQ8aAGKh3-w/o.jpg"
)

r6 = Restaurant.create(
  name: "Red House",
  address: "98 Winthrop Street",
  city: "Cambridge",
  state: "MA",
  zip: 10002,
  phone_number: "(617) 576-0605",
  lat: 42.372584,
  lng: -71.121202,
  description: "2 for $1 oysters and $5 shrimp cocktail, noon to 5pm",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17265385_396807430688502_6856584717316128768_n.jpg"
)

r7 = Restaurant.create(
  name: "Tropisueno",
  address: "75 Yerba Buena Ln",
  city: "San Francisco",
  state: "CA",
  zip: 94103,
  phone_number: "(415) 243-0299",
  lat: 37.785603,
  lng: -122.403849,
  description: "Great margaritas and amazing Mexican food",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/13584152_1624627431160851_549059540_n.jpg"
)

r8 = Restaurant.create(
  name: "Grendel’s Den",
  address: "89 Winthrop Street",
  city: "Cambridge",
  state: "MA",
  zip: 2138,
  phone_number: "(617) 491-1160",
  lat: 42.372723,
  lng: -71.120840,
  # hours: "Every night 5pm-7:30pm"
  description: "All food 50% off",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17587256_228695394270749_5912825921001226240_n.jpg"
)

r9 = Restaurant.create(
  name: "Nine Tastes Thai Cuisine",
  address: "50 John F Kennedy St",
  city: "Cambridge",
  state: "MA",
  zip: 2138,
  phone_number: "(617) 547-6666",
  lat: 42.372315,
  lng: -71.120419,
  # Hours: "M-W 5pm - 6:30pm"
  description: "Half off chicken satay and spring rolls",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17931917_279164025868632_881906925040566272_n.jpg"
)

r10 = Restaurant.create(
  name: "Russell House Tavern",
  address: "14 John F Kennedy St",
  city: "Cambridge",
  state: "MA",
  zip: 2138,
  phone_number: "(617) 500-3055",
  lat: 42.373298,
  lng: -71.119335,
  # Hours: "Every day after 11pm"
  description: "$1 oysters",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17438037_174235729756520_7376756689095098368_n.jpg"
)


r11 = Restaurant.create(
  name: "Shorty’s",
  address: "576 9th Ave",
  city: "New York",
  state: "NY",
  zip: 10036,
  phone_number: "(212) 967-3055",
  lat: 40.743916,
  lng: -73.986166,
  # Hours: "4-7p"
  description: "$4 fries, beers, and $5 shots",
  image: "https://s3-media2.fl.yelpcdn.com/bphoto/XzCLEjcEdihVoX3jBFGmDw/o.jpg"
)


r12 = Restaurant.create(
  name: "Fresh Salt",
  address: "146 Beekman St",
  city: "New York",
  state: "NY",
  zip: 10038,
  phone_number: "(212) 962-0053",
  lat: 40.707314,
  lng: -74.002524,
  # Hours: "Every day from 4-8p"
  description: "$5 beers, $5 well drinks, and $6 house wines",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17438356_290959817992233_4526387199129681920_n.jpg"
)


r13 = Restaurant.create(
  name: "Bubby’s",
  address: "120 Hudson St",
  city: "New York",
  state: "NY",
  zip: 10013,
  phone_number: "(212) 219-0666",
  lat: 40.720762,
  lng: -74.008441,
  # Hours: "M-F 4-7p"
  description: "All drinks just $7",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17077266_224781064657350_2576181706956472320_n.jpg"
)


r14 = Restaurant.create(
  name: "Bonnie Vee",
  address: "17 Stanton",
  city: "New York",
  state: "NY",
  zip: 10002,
  phone_number: "(917) 639-3352",
  lat: 40.722561,
  lng: -73.992154,
  # Hours: "M-F 4-7p"
  description: "$10 for frozen margaritas, cocktails, and grilled cheese",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17493885_239345539805007_6875673300031242240_n.jpg"
)


r15 = Restaurant.create(
  name: "The Folly",
  address: "92 W Houston St",
  city: "New York",
  state: "NY",
  zip: 10012,
  phone_number: "(646) 726-4740",
  lat: 40.727482,
  lng: -73.999964,
  # Hours: "M-F 4-7p"
  description: "$10 for frozen margaritas, cocktails, and grilled cheese",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17818348_379901972409553_6006843291981578240_n.jpg"
)


r16 = Restaurant.create(
  name: "Freud",
  address: "506 Laguardia Pl",
  city: "New York",
  state: "NY",
  zip: 10012,
  phone_number: "(212) 777-0327",
  lat: 40.727917,
  lng: -73.999556,
  # Hours: "M-F 4-7p"
  description: "$6 beer, $8 wine, $9 cocktails",
  image: "http://oi63.tinypic.com/2l9g6b.jpg"
)


r17 = Restaurant.create(
  name: "Cienfuegos",
  address: "443 E 6th St",
  city: "New York",
  state: "NY",
  zip: 10019,
  phone_number: "(212) 614-6818",
  lat: 40.725879,
  lng: -73.984097,
  # Hours: "Every day 5-7pm, but Sundays - all night!"
  description: "Half priced punch bowls, and $7 cocktails!",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17881954_1828739227447128_6825094377879109632_n.jpg"
)

r18 = Restaurant.create(
  name: "The Misfit Restaurant + Bar",
  address: "225 Santa Monica Blvd",
  city: "Santa Monica",
  state: "CA",
  zip: 90401,
  phone_number: "(310) 656-9800",
  lat: 34.015655,
  lng: -118.495711,
  # Hours: "Every day 5-7pm, but Sundays - all night!"
  description: "Delicious craft cocktails for $4-6, all day until 7pm!",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/18252333_1836586683259401_2484519932264448000_n.jpg"
)

r19 = Restaurant.create(
  name: "Fly ‘N’ Fish Oyster Bar & Grill",
  address: "2304 W Oceanfront",
  city: "Newport Beach",
  state: "CA",
  zip: 92663,
  phone_number: "(949) 673-8400",
  lat: 33.610143,
  lng: -117.930077,
  # Hours: "Every day 5-7pm, but Sundays - all night!"
  description: "Seafood, oysters, drinks, we've got it all!",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17493621_382213762161716_3967091863445307392_n.jpg"
)

r20 = Restaurant.create(
  name: "List",
  address: "2226 1st Ave",
  city: "Seattle",
  state: "WA",
  zip: 98121,
  phone_number: "(206) 441-1000",
  lat: 47.613514,
  lng: -122.345987,
  # Hours: "Every day 5-7pm, but Sundays - all night!"
  description: "50% off everything!!",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/15251657_2217210175170857_4408419883621023744_n.jpg"
)

r21 = Restaurant.create(
  name: "SafeHouse Chicago",
  address: "60 E Ontario St",
  city: "Chicago",
  state: "IL",
  zip: 60611,
  phone_number: "(312) 313-1007",
  lat: 41.893321,
  lng: -87.626084,
  # Hours: "Every day 5-7pm, but Sundays - all night!"
  description: "$5 beers and well drinks, $6 wines",
  image: "https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/17596145_354090554991110_8132904154210238464_n.jpg"
)

review1 = Review.create(
  rating: 3,
  review: "Mediocre oysters at best, but great ambiance",
  restaurant_id: r1.id,
  author_id: a.id
)

review2 = Review.create(
  rating: 4,
  review: "Beautiful interior, and $1 oysters!!",
  restaurant_id: r1.id,
  author_id: v.id
)

review3 = Review.create(
  rating: 3,
  review: "The oysters looked so sad :(",
  restaurant_id: r1.id,
  author_id: s.id
)

review4 = Review.create(
  rating: 4,
  review: "Yum yum yum!",
  restaurant_id: r1.id,
  author_id: j.id
)

review5 = Review.create(
  rating: 5,
  review: "Great food, great wine!",
  restaurant_id: r2.id,
  author_id: v.id
)

review6 = Review.create(
  rating: 4,
  review: "Such great drinks!! Super cool vibe",
  restaurant_id: r2.id,
  author_id: a.id
)

review7 = Review.create(
  rating: 5,
  review: "Bartender is super funny. Jumped into a lot of my conversations with a friend. Made for a great time!",
  restaurant_id: r2.id,
  author_id: j.id
)

review8 = Review.create(
  rating: 5,
  review: "Really yummy pizzas! Will be going here often!",
  restaurant_id: r2.id,
  author_id: s.id
)

review9 = Review.create(
  rating: 5,
  review: "Who doesn't love $12 wine flights?!",
  restaurant_id: r3.id,
  author_id: a.id
)

review10 = Review.create(
  rating: 4,
  review: "Wine wednesdays, anyone?",
  restaurant_id: r3.id,
  author_id: v.id
)

review11 = Review.create(
  rating: 3,
  review: "I thought the wines were just alright. Definitely not your Chateaux de Margaux",
  restaurant_id: r3.id,
  author_id: j.id
)

review12 = Review.create(
  rating: 3,
  review: "Tastes like boxed wine",
  restaurant_id: r3.id,
  author_id: s.id
)

review13 = Review.create(
  rating: 5,
  review: "The coolest place in NYC!",
  restaurant_id: r4.id,
  author_id: a.id
)

review14 = Review.create(
  rating: 4,
  review: "Cocktails here are on point",
  restaurant_id: r4.id,
  author_id: v.id
)

review15 = Review.create(
  rating: 4,
  review: "Classy place with great cocktails",
  restaurant_id: r4.id,
  author_id: j.id
)

review16 = Review.create(
  rating: 5,
  review: "All the cool cats go here",
  restaurant_id: r4.id,
  author_id: s.id
)

review17 = Review.create(
  rating: 3,
  review: "Really solid fish tacos and shrimp enchiladas.  One of my favorite spots in New York.  The Happy Hour unfortunately is only a mediocre value at $8 for food and drink, but food is   good.  3 stars.",
  restaurant_id: r5.id,
  author_id: v.id
)

review18 = Review.create(
  rating: 4,
  review: "I really wanted to love this place as I’m a big fan of Mexican food!  It’s an ok value at $8 during the happy hour but the food is great.  Portions are reasonable and strong cocktails!",
  restaurant_id: r5.id,
  author_id: a.id
)

review19 = Review.create(
  rating: 5,
  review: "Delicious shrimp enchiladas, would definitely repeat!  Come for the happy hour.",
  restaurant_id: r5.id,
  author_id: j.id
)

review20 = Review.create(
  rating: 4,
  review: "Great food!!!",
  restaurant_id: r5.id,
  author_id: s.id
)

review21 = Review.create(
  rating: 5,
  review: "My favorite spot with unbeatable happy hour value for oysters - 2 for $1!!!",
  restaurant_id: r6.id,
  author_id: v.id
)

review22 = Review.create(
  rating: 3,
  review: "The oysters looked so sad :(",
  restaurant_id: r6.id,
  author_id: a.id
)

review23 = Review.create(
  rating: 4,
  review: "Mediocre oysters at best, but great ambiance",
  restaurant_id: r6.id,
  author_id: j.id
)

review24 = Review.create(
  rating: 4,
  review: "Such great drinks!! Super cool vibe",
  restaurant_id: r7.id,
  author_id: v.id
)

review25 = Review.create(
  rating: 5,
  review: "Great spot for groups!",
  restaurant_id: r7.id,
  author_id: a.id
)

review26 = Review.create(
  rating: 5,
  review: "The most amazing and delicious chicken quesadillas ever! And only $5!!!",
  restaurant_id: r7.id,
  author_id: j.id
)

review27 = Review.create(
  rating: 5,
  review: "Wine wednesdays, anyone?",
  restaurant_id: r8.id,
  author_id: v.id
)

review28 = Review.create(
  rating: 5,
  review: "Yum yum yum!",
  restaurant_id: r8.id,
  author_id: a.id
)

review29 = Review.create(
  rating: 5,
  review: "Great spot for groups!",
  restaurant_id: r8.id,
  author_id: j.id
)

review30 = Review.create(
  rating: 5,
  review: "Beautiful interior, and $1 oysters!!!",
  restaurant_id: r9.id,
  author_id: v.id
)

review31 = Review.create(
  rating: 5,
  review: "The oysters looked so sad :(",
  restaurant_id: r9.id,
  author_id: a.id
)

review32 = Review.create(
  rating: 5,
  review: "Delicious food! Will be back every week!",
  restaurant_id: r9.id,
  author_id: j.id
)

review33 = Review.create(
  rating: 5,
  review: "Classy place to go if you wanna impress someone",
  restaurant_id: r10.id,
  author_id: v.id
)

review34 = Review.create(
  rating: 4,
  review: "Mediocre oysters at best, but great ambiance",
  restaurant_id: r10.id,
  author_id: a.id
)

review35 = Review.create(
  rating: 4,
  review: "Great food, great wine!",
  restaurant_id: r11.id,
  author_id: v.id
)

review36 = Review.create(
  rating: 5,
  review: "Classy place to go if you wanna impress someone",
  restaurant_id: r11.id,
  author_id: a.id
)

review37 = Review.create(
  rating: 3,
  review: "The oysters looked so sad :(",
  restaurant_id: r12.id,
  author_id: v.id
)

review38 = Review.create(
  rating: 4,
  review: "Mediocre oysters at best, but great ambiance",
  restaurant_id: r12.id,
  author_id: j.id
)

review39 = Review.create(
  rating: 4,
  review: "Yum yum yum!",
  restaurant_id: r13.id,
  author_id: v.id
)

review40 = Review.create(
  rating: 5,
  review: "The most amazing and yummy oysters ever! Plump, juicy, and absolutely devine!",
  restaurant_id: r13.id,
  author_id: a.id
)

review41 = Review.create(
  rating: 5,
  review: "Delicious food! Will be back every week!",
  restaurant_id: r14.id,
  author_id: v.id
)

review42 = Review.create(
  rating: 5,
  review: "Such great drinks!! Super cool vibe",
  restaurant_id: r14.id,
  author_id: j.id
)

review43 = Review.create(
  rating: 4,
  review: "Yum yum yum!",
  restaurant_id: r15.id,
  author_id: v.id
)
review44 = Review.create(
  rating: 5,
  review: "Beautiful drinks and delicious cocktails!",
  restaurant_id: r15.id,
  author_id: a.id
)

review45 = Review.create(
  rating: 4,
  review: "Classy place to go if you wanna impress someone",
  restaurant_id: r16.id,
  author_id: v.id
)

review46 = Review.create(
  rating: 5,
  review: "Great food, great wine!",
  restaurant_id: r17.id,
  author_id: v.id
)

review47 = Review.create(
  rating: 5,
  review: "Who can say no to PUNCH BOWLS?!",
  restaurant_id: r17.id,
  author_id: v.id
)

review48 = Review.create(
  rating: 4,
  review: "I can practically swim in these punch bowls! They're that big!",
  restaurant_id: r17.id,
  author_id: g.id
)

review49 = Review.create(
rating: 5,
review: "The most amazing and yummy oysters ever! Plump, juicy, and absolutely devine!",
restaurant_id: r10.id,
author_id: g.id
)

review50 = Review.create(
  rating: 4,
  review: "I can practically swim in these punch bowls! They're that big!",
  restaurant_id: r17.id,
  author_id: g.id
)

review51 = Review.create(
  rating: 4,
  review: "Yum yum yum!",
  restaurant_id: r14.id,
  author_id: g.id
)

review51 = Review.create(
  rating: 4,
  review: "Can't complain when these are 50 cents a pop!",
  restaurant_id: r6.id,
  author_id: g.id
)

review52 = Review.create(
  rating: 4,
  review: "Drinks on the beach? Nothing beats this!",
  restaurant_id: r18.id,
  author_id: g.id
)

review53 = Review.create(
  rating: 5,
  review: "All day happy hour? Count me in!",
  restaurant_id: r18.id,
  author_id: a.id
)

review54 = Review.create(
  rating: 5,
  review: "Best happy hour in town!",
  restaurant_id: r18.id,
  author_id: s.id
)

review55 = Review.create(
  rating: 5,
  review: "Fresh seafood on the beach -- AMAZING!",
  restaurant_id: r19.id,
  author_id: g.id
)

review56 = Review.create(
  rating: 5,
  review: "Some of the best oysters I've tasted!",
  restaurant_id: r19.id,
  author_id: j.id
)
review57 = Review.create(
  rating: 4,
  review: "I love food, but I love food more when it's happy hour priced!",
  restaurant_id: r19.id,
  author_id: s.id
)

review58 = Review.create(
  rating: 4,
  review: "Really cool place!",
  restaurant_id: r20.id,
  author_id: g.id
)

review59 = Review.create(
  rating: 3,
  review: "I wanted to love this place, but it's so overrated :(",
  restaurant_id: r20.id,
  author_id: s.id
)

review59 = Review.create(
  rating: 3,
  review: "I wanted to love this place, but it's so overrated :(",
  restaurant_id: r20.id,
  author_id: j.id
)

review60 = Review.create(
  rating: 5,
  review: "James Bond's happy hour spot of choice",
  restaurant_id: r21.id,
  author_id: g.id
)

review61 = Review.create(
  rating: 4,
  review: "I've always wanted to be a spy! Such a cool concept",
  restaurant_id: r21.id,
  author_id: a.id
)

review62 = Review.create(
  rating: 4,
  review: "The drinks were terribly but who cares when you're James Bond!",
  restaurant_id: r21.id,
  author_id: a.id
)
