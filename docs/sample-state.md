```javascript
{
  currentUser: {
    id: 1
    name: "Amy"
    username: "amygbui"
  },

  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createReview: { errors: [] }
  },

  businesses: {
    1: {
      name: "Van Leeuwen Artisan Ice Cream",
      address: "152 W 10th St",
      city: "New York",
      state: "NY",
      zip: 10014,
      phone_number: "(917) 475-1448",
      lat: 323415,
      lon: 341351,
      description: "Artisan ice cream. Started in Brooklyn, and slowly taking over the world.",
      profile_pic_url: "some_link_here"
      photos: {
        1: {
          image_url: "another_link_here"
        }
      }
    }
  },

  reviews: {
    1: {
      rating: 5,
      review: "The honeycomb ice cream is LIFE-CHANGING!",
      reviewer_id: 1,
      business_id: 1
    }
  }
}
```
