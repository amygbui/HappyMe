# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all

a = User.create(name: "Amy", username: "amy", password: "password")
v = User.create(name: "Vince", username: "vince", password: "password")
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
  description: "Cheap $1 oysters from 5-8pm, M-F"
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
  description: "$5 beer, $7 pizza and wine"
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
  description: "Happy hour every day! Cocktails, beer, wine, food, we have it all!"
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
  description: "$12 wine flight"
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
  description: "$8 drinks and food"
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
  description: "2 for $1 oysters and $5 shrimp cocktail, noon to 5pm"
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
  # hours: “Every night 5pm-7:30pm”
  description: "All food 50% off"
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
  # Hours: “M-W 5pm - 6:30pm”
  description: "Half off chicken satay and spring rolls"
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
  # Hours: “Every day after 11pm”
  description: "$1 oysters"
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
  # Hours: “4-7p”
  description: "$4 fries, beers, and $5 shots"
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
  # Hours: “Every day from 4-8p”
  description: "$5 beers, $5 well drinks, and $6 house wines"
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
  # Hours: “M-F 4-7p”
  description: "All drinks just $7"
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
  # Hours: “M-F 4-7p”
  description: "$10 for frozen margaritas, cocktails, and grilled cheese"
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
  # Hours: “M-F 4-7p”
  description: "$10 for frozen margaritas, cocktails, and grilled cheese"
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
  # Hours: “M-F 4-7p”
  description: "$6 beer, $8 wine, $9 cocktails"
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
  # Hours: “Every day 5-7pm, but Sundays - all night!”
  description: "Half priced punch bowls, and $7 cocktails!"
)

review1 = Review.create(
  rating: 3,
  review: "Mediocre oysters at best, but great ambiance",
  restaurant_id: r1.id,
  author_id: a.id
)

review2 = Review.create(
  rating: 5,
  review: "Great food, great wine!",
  restaurant_id: r2.id,
  author_id: v.id
)

review3 = Review.create(
  rating: 5,
  review: "Who doesn't love $12 wine flights?!",
  restaurant_id: r3.id,
  author_id: a.id
)

review4 = Review.create(
  rating: 4,
  review: "Beautiful interior, and $1 oysters!!",
  restaurant_id: r1.id,
  author_id: v.id
)

review5 = Review.create(
  rating: 5,
  review: "Great spot for groups!",
  restaurant_id: r17.id,
  author_id: v.id
)
