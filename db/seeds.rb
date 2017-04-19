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
s = User.create(name: "Student", username: "student", password: "password")

r1 = Restaurant.create(
  name: "Chuck and Blade",
  address: "184 8th Ave",
  city: "New York",
  state: "NY",
  zip: 10011,
  phone_number: "(646)370-3494",
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
  phone_number: "(212)532-9100",
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
  phone_number: "(212)466-3340",
  lat: 40.739143,
  lng: -73.989677,
  description: "Happy hour every day!Cocktails, beer, wine, food, we have it all!"
)

r4 = Restaurant.create(
  name: "Amelie",
  address: "22 W 8th St",
  city: "New York",
  state: "NY",
  zip: 10011,
  phone_number: "(212)533-2962",
  lat: 40.743083,
  lng: -73.999881,
  description: "$12 wine flight"
)

# r5 = Restaurant.create(
#   name: "Chuck and Blade",
#   address: "184 8th Ave",
#   city: "New York",
#   state: "NY",
#   zip: 10011,
#   phone_number: "(646)370-3494",
#   lat: 40.743083,
#   lng: -73.999881,
#   description: "Cheap $1 oysters from 5-8pm, M-F"
# )
#
# r6 = Restaurant.create(
#   name: "Chuck and Blade",
#   address: "184 8th Ave",
#   city: "New York",
#   state: "NY",
#   zip: 10011,
#   phone_number: "(646)370-3494",
#   lat: 40.743083,
#   lng: -73.999881,
#   description: "Cheap $1 oysters from 5-8pm, M-F"
# )
#
# r7 = Restaurant.create(
#   name: "Chuck and Blade",
#   address: "184 8th Ave",
#   city: "New York",
#   state: "NY",
#   zip: 10011,
#   phone_number: "(646)370-3494",
#   lat: 40.743083,
#   lng: -73.999881,
#   description: "Cheap $1 oysters from 5-8pm, M-F"
# )
