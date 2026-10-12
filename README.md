# Mini Store

### React E-Commerce Assignment | Year 4 | Semester 1 | January 2025

Mini Store is an online shopping frontend built with React. This Year 4, Semester 1 assignment demonstrates reusable components, routing, API integration, shopping cart management, and separate customer and administrator interfaces.

| Assignment information | Details |
| --- | --- |
| Project | Mini Store |
| Study year | Year 4 |
| Semester | Semester 1 |
| Assignment date | January 2025 |
| Main technology | React |
| Application type | E-commerce frontend |

## Contents

- [Technologies used](#technologies-used)
- [Features](#features)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Application routes](#application-routes)
- [Project structure](#project-structure)
- [Backend integration](#backend-integration)
- [Learning outcomes](#learning-outcomes)
- [Current limitations](#current-limitations)
- [Credits](#credits)

## Technologies Used

Versions below are dependency ranges from `package.json`, rather than exact installed versions.

### Core Technologies

| Technology | Declared version | Purpose |
| --- | --- | --- |
| React | `^18.3.1` | Reusable interface components and state management with hooks |
| React DOM | `^18.3.1` | Renders React components in the browser |
| JavaScript / JSX | — | Application logic and component markup |
| HTML5 / CSS3 | — | Page structure and custom styling |
| Vite | `^6.0.1` | Development server and production builds |
| Vite React plugin | `^4.4.1` | React support and Fast Refresh |
| Node.js / npm | — | Development tooling and dependency management |

### Interface, Navigation, and Integrations

| Technology | Declared version | Purpose |
| --- | --- | --- |
| React Router DOM | `^7.0.1` | Client-side navigation and role-dependent routes |
| Bootstrap | `^5.3.3` | Responsive layouts, forms, buttons, and utility classes |
| Ant Design | `^5.24.8` | Tables, menus, layouts, notifications, and confirmation dialogs |
| Ant Design Icons | `^6.0.0` | Administrator navigation icons |
| Font Awesome SVG Core | `^6.7.2` | Supports icon rendering |
| Font Awesome Free Solid Icons | `^6.7.2` | Dashboard icons |
| React Font Awesome | `^0.2.2` | Font Awesome React components |
| Axios | `^1.7.8` | HTTP requests to backend APIs |
| PayPal React SDK | `^8.7.0` | PayPal checkout buttons and payment callbacks |
| Swiper | `^11.1.15` | Included for template slider functionality; CDN assets are also loaded |
| jQuery | `^3.7.1` | Included dependency; the HTML loads a bundled jQuery 1.11.0 script |
| Modernizr | Bundled script | Browser feature detection for the template |
| Google Fonts | — | Jost and Lato typefaces |
| localStorage | Browser API | User profile, role flags, and local cart data in some components |
| FormData | Browser API | Registration fields and profile image upload |

### Development and Code Quality

| Technology | Declared version | Purpose |
| --- | --- | --- |
| ESLint / `@eslint/js` | `^9.15.0` | JavaScript code checks |
| ESLint React plugin | `^7.37.2` | React lint rules |
| ESLint React Hooks plugin | `^5.0.0` | React hook checks |
| ESLint React Refresh plugin | `^0.4.14` | Fast Refresh checks |
| globals | `^15.12.0` | Environment globals for ESLint |
| React type definitions | `^18.3.12` | Development type information |
| React DOM type definitions | `^18.3.1` | Development type information |

The application source uses JavaScript and JSX. The presence of type definition packages does not make this a TypeScript project. The backend framework and database cannot be confirmed from this frontend repository.

## Features

### Customer Interface

- Login form connected to the backend API.
- Registration form with name, email, password, gender, and profile image fields.
- Storefront with navigation, promotional banner, service highlights, product sections, and footer.
- Product listings and images loaded from the backend.
- API-connected add-to-cart action in the main product listing.
- Cart quantity controls and item removal.
- Total quantity and total price calculations.
- PayPal checkout in USD, followed by a backend order request after payment capture.
- Customer logout.

### Administrator Interface

- Separate dashboard layout and navigation.
- Welcome dashboard.
- Product table with images, quantities, prices, descriptions, and category IDs.
- Product deletion through the API with a confirmation dialog.
- User table with account information and roles.
- Administrator logout.

Product editing and user editing/deletion currently display placeholder messages. Registration and checkout require external services and configuration.

## Getting Started

### Prerequisites

- Node.js compatible with Vite 6, such as Node.js 22.
- npm.
- A separate backend providing the endpoints listed below.
- Internet access for Google Fonts, CDN assets, and PayPal.

This repository contains the frontend. Backend source code, database setup, and demo accounts are not included.

### 1. Install dependencies

Open a terminal in the project directory:

```bash
npm install
```

### 2. Configure backend services

Most requests use `http://127.0.0.1:8000`. Registration uses `http://localhost:8070`.

Start the corresponding backend services, or update the hard-coded URLs in `src/Page/` and `src/layouts/`. Configure the backend to allow requests from the frontend origin through CORS.

There is currently no shared API URL configuration or `.env.example`. Creating an environment file alone will not change the hard-coded URLs.

### 3. Start the application

```bash
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

### 4. Sign in

Use an account supplied by the backend. The login response must contain a `user` object. A user whose `role` is `admin` opens the administrator interface; other roles open the customer interface.

### 5. Configure checkout testing

The PayPal client ID is defined in `initialOptions` in `src/Page/Cart.jsx`. Use your PayPal sandbox application's client ID and sandbox buyer accounts when testing payments.

## Available Commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build production assets into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

To build and preview:

```bash
npm run build
npm run preview
```

## Application Routes

| Session | Route | Page |
| --- | --- | --- |
| Signed out | `/` | Login |
| Signed out | `/regi` | Registration |
| Customer | `/` | Storefront |
| Customer | `/cart` | Cart and checkout |
| Administrator | `/` | Welcome dashboard |
| Administrator | `/product` | Product list |
| Administrator | `/users` | User list |

Login stores `profile` and either `is_admin` or `is_client` in localStorage. These flags select the frontend interface. The backend must enforce authorization for protected operations.

## Project Structure

```text
Mini-Store/
├── public/                      # Public assets
├── src/
│   ├── assets/                  # Images, template CSS, and scripts
│   ├── layouts/
│   │   ├── LayoutOne.jsx        # Administrator layout
│   │   ├── UserLogin.jsx        # Login form
│   │   ├── UserRegister.jsx     # Registration and image upload
│   │   └── *.css                # Layout and form styles
│   ├── Page/
│   │   ├── admin/
│   │   │   ├── HomePageWel.jsx
│   │   │   ├── Product_display.jsx
│   │   │   └── UserDisplay.jsx
│   │   ├── MainLayout.jsx       # Storefront composition
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Slide.jsx
│   │   ├── CompanyService.jsx
│   │   ├── JeweleryProduct.jsx
│   │   ├── ElectronicProduct.jsx
│   │   ├── ClothProduct.jsx
│   │   ├── Cart.jsx
│   │   ├── NewYears.jsx
│   │   └── LastestPost.jsx
│   ├── App.jsx                  # Role-dependent routes
│   ├── main.jsx                 # React entry point
│   ├── App.css
│   └── index.css
├── index.html                   # HTML entry and template assets
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lockfile
├── vite.config.js               # Vite configuration
├── eslint.config.js             # Lint configuration
└── README.md
```

`ClothProduct`, `NewYears`, and `LastestPost` exist in the source but are not currently rendered by `MainLayout`.

## Backend Integration

These endpoints are referenced by the frontend. They describe the required integrations; their implementations are not included in this repository.

### Main API: `http://127.0.0.1:8000`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/login` | Submit email and password |
| GET | `/api/products` | Load product lists |
| GET | `/api/title/alls` | Load product section title data |
| GET | `/api/lastest` | Load latest products; spelling matches the source |
| GET | `/api/users` | Load user records |
| DELETE | `/api/products/{id}` | Delete a product |
| POST | `/api/cart/add` | Add a cart item |
| GET | `/api/cart/{user_id}` | Load a user's cart |
| POST | `/api/cart/update` | Change quantity |
| POST | `/api/cart/remove` | Remove an item |
| POST | `/api/order/{user_id}` | Create an order after the payment callback |
| GET | `/storage/images/{filename}` | Load product images |

The administrator tables expect `products` and `users` arrays in their responses. The cart expects a `cart` array with fields including `product_id`, `product_name`, `image`, `price`, and `quantity`.

### Registration API: `http://localhost:8070`

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/api/user/signup` | Submit registration fields and an image using FormData |

### Sample Product API

`ClothProduct.jsx` references `https://fakestoreapi.com/products/category/men's clothing?limit=4`. This component is currently outside the rendered storefront.

## Learning Outcomes

- Building reusable React components and page layouts.
- Managing state with `useState`.
- Loading API data with `useEffect` and Axios.
- Handling forms, file uploads, and user input.
- Creating client-side routes and role-dependent interfaces.
- Displaying data in product cards and tables.
- Updating cart quantities and calculating totals.
- Integrating third-party checkout.
- Combining Bootstrap, Ant Design, and custom CSS.
- Using Vite and ESLint in the development workflow.

## Current Limitations

- Backend source code, database setup, and demo credentials are not included.
- Registration uses a different backend port and redirects to `/loginpage`, which is not defined in `App.jsx`.
- Registration accesses the uploaded image without first checking whether a file was selected.
- Product editing and user editing/deletion are placeholders.
- Some product components use a localStorage cart, while checkout uses the backend cart. These paths need to be unified for consistent behavior.
- LocalStorage role flags control the frontend view; they do not provide server-side authorization.
- Checkout requires working PayPal and backend configuration. The frontend alone does not establish server-side payment verification.
- Template assets mix npm dependencies, bundled scripts, and CDN versions of jQuery and Swiper.
- No automated test script is defined in `package.json`.

## Credits

The storefront footer credits **TemplatesJungle** for the design and **ThemeWagon** for distribution. Preserve the template attribution and review the original license terms when reusing its assets.

Prepared for the **Year 4, Semester 1 React assignment — January 2025**.

# Ministore-Assignment-A3
