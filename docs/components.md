## React Components

### path = "/"
1. Header Component
    1. Logo Image
    2. Search Component
    3. Navigation Links Component
    4. User Detail Component || Sign Up button
2. Children Components **
3. Footer Component Container (bonus during freetime)
    1. About Component
        * Various links: About, Careers, Press, Terms of Service, Privacy Policy, etc.
    2. Footer Image

### path = "/sign-up" || "/sign-in"
1. AuthForm Container
    1. AuthForm Component
        1. Error Component

### path = "/restaurants"
1. Search Container
    1. Matched Businesses Container
        1. Business Preview Component
            * Contains business name, profile pic, location, phone number, types, description
    2. Map Component

### path = "/restaurants/:id"
1. Business Info Container Component
    * Business Preview Component (switch out profile pic with map snapshot, change CSS styling)
    1. Write a Review button
    2. Photos Container
        * Photo Component
    2. Dessert Types?
2. Business Detail Container Component
    1. Business Details
3. Review Container Component
    1. Review Component

### path = "/restaurants/:id/photos" --- Necessary or not? Already shown on business show page
1. Photos Container Component
    * Photo Component

### BONUS: path = '/users/:id' (link comes from Review)
1. User Container Component
    1. User Photos
    2. User Details
    3. User Reviews (pull from business reviews, but change styling and include Business Preview Component)
    4. User Bookmarks
