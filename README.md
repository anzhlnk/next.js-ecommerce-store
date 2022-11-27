# orangeorange<br/>E-commerce store for t-shirts

## Description

This is an E-commerce project for the web development course from https://upleveled.io/.


https://user-images.githubusercontent.com/102800435/204136319-bac5fdad-f409-4a61-afec-1a8c7e72a4ab.mp4


The website is developed for desktop-size devices.

## Screenshots

### Landing Page

![Landing Page](public/Landing%20page.png?raw=true)

### Products Overview Page

![Products Overview Page](public/Product%20overview.png?raw=true)

### Product Page

![Product Page](public/Product%20page.png?raw=true)

### Shopping Cart

![Shopping Cart](public/Shopping%20cart.png?raw=true)

### Checkout Page

![Checkout Page](public/Check%20out%20page.png?raw=true)

### Thank you for your order Page

![Thank you for your order](public/Thank%20you%20for%20your%20order%20page.png?raw=true)

## Technologies

- Next.js
- Emotion for CSS-in-JSX
- Postgres migrations for the database
- Typescript
- Jest for unit testing
- Playwright for end-to-end testing
- Heroku for the deployment

## Functionalities

- A landing page
- A products page where all the products are listed
- Dynamic routes to single product pages. It is possible to add items to the cart
- A Cart page, where the chosen products are listed and the total sum is mentioned. It is possible to change the amount per product and delete products from the cart
- A Checkout page which shows the total and asks for shipping and payment information
- A Thank You page after a checkout has been completed
- A header with a link to the Cart, showing the number of items in the cart

## Setup instructions

- Clone the repository and install all dependencies

```bash
git clone https://github.com/anzhlnk/next.js-ecommerce-store.git
cd next.js-ecommerce-store
yarn
```

- Setup the database by downloading and installing PostgreSQL
- Create a user and a database
- Create a .env file. Check .env.example file to see what info should be provided
- Copy the environment variables from .env-example into .env
- Replace the placeholders xxxxx with your username, password and name of the database
- Install dotenv-cli with yarn add dotenv-cli
- Run the migrations with yarn migrate up
- Start the server by running yarn dev

## Deploy on Heroku

- Sign up at Heroku: https://www.heroku.com/.
- Create a new App
- Choose a name and select the "Europe" Region
- Click "Connect to GitHub"
- Search for your repository and click on "Connect"
- Click on "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres"
- Trigger a deploy by pushing your repo to GitHub
