# ChaloStay 🏠

A modern, full-stack vacation rental platform built with Next.js 15, TypeScript, and Prisma. ChaloStay allows users to discover, book, and manage vacation rentals with a beautiful, responsive interface optimized for both desktop and mobile devices.

![ChaloStay](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.9.0-2D3748?style=for-the-badge&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.7-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🔐 Authentication & User Management

- **NextAuth.js Integration** - Secure authentication with multiple providers
- **User Registration & Login** - Email/password and OAuth support (Google, GitHub)
- **Enhanced Profile Management** - Full-featured profile page for editing user information
- **Image Management** - Update and customize profile images with Cloudinary
- **Password Security** - Secure password change functionality in profile settings
- **Session Management** - Persistent user sessions with secure state handling
- **Avatar Integration** - Consistent user avatars across the platform

### 🏠 Property Listings

- **Property Discovery** - Browse available vacation rentals
- **Advanced Search** - Filter by location, dates, guests, and amenities
- **Property Details** - Comprehensive property information with images
- **Category Filtering** - Filter by property types (apartment, villa, etc.)
- **Location-based Search** - Interactive map integration with Leaflet.js (with cross-platform map markers)

### 📅 Booking System

- **Reservation Management** - Book and manage property reservations
- **Date Selection** - Interactive calendar for date picking
- **Pricing Calculator** - Dynamic pricing based on dates and duration
- **Booking History** - View past and upcoming trips with status indicators (Upcoming/Ongoing/Completed)
- **Conditional Cancellation** - Cancel options available until day before check-in
- **Cancellation Policy** - Dedicated page with detailed guidelines and procedures

### ❤️ Favorites & Wishlists

- **Favorite Properties** - Save properties to personal wishlist
- **Quick Access** - Easy access to saved properties
- **Favorites Management** - Add/remove properties from favorites

### 🎨 User Interface

- **Responsive Design** - Mobile-first approach with Tailwind CSS optimized for all devices
- **Modern UI/UX** - Clean, intuitive interface with enhanced accessibility
- **Mobile-Optimized Components** - Responsive calendar, search, and navigation
- **Improved Navbar** - Fixed overlay with proper z-index and responsive menu
- **Interactive Maps** - Cross-platform map integration with optimized markers
- **Profile Dashboard** - Dedicated section for managing user information
- **Image Upload** - Cloudinary integration for property and profile images
- **Real-time Notifications** - Toast notifications for immediate user feedback
- **Consistent Styling** - Unified button sizes and layout across the application

### 🔧 Admin Features

- **Property Management** - Host dashboard for managing listings
- **Reservation Overview** - Track all bookings and reservations
- **Property Analytics** - View property performance metrics

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript with strict type checking
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Hook Form** - Form handling and validation
- **React Icons** - Comprehensive icon library
- **React Hot Toast** - Toast notifications for user feedback
- **React Date Range** - Mobile-responsive date picker component
- **React Select** - Customizable select component with accessibility features
- **React Leaflet** - Cross-platform interactive maps with custom markers

### Backend

- **Next.js API Routes** - Server-side API endpoints for secure data operations
- **Prisma ORM** - Type-safe database toolkit and ORM
- **MongoDB** - NoSQL database for flexible data storage
- **NextAuth.js** - Authentication solution with multiple provider support
- **bcrypt** - Secure password hashing and verification

### External Services

- **Cloudinary** - Cloud image management for property and user photos
- **World Countries** - Country data for location selection and mapping

### Development Tools

- **ESLint** - Code linting with custom rule configuration
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing for cross-browser compatibility

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/chalostay.git
   cd chalostay
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="your_mongodb_connection_string"

   # NextAuth
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"

   # OAuth Providers (optional)
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   GITHUB_ID="your_github_client_id"
   GITHUB_SECRET="your_github_client_secret"

   # Cloudinary (required for image uploads)
   CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   CLOUDINARY_API_KEY="your_cloudinary_api_key"
   CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push schema to database
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ChaloStay/
├── app/                    # Next.js App Router
│   ├── actions/           # Server actions
│   ├── api/              # API routes
│   │   ├── favorites/    # Favorites API routes
│   │   ├── listings/     # Listings API routes
│   │   ├── profile/      # Profile management API routes
│   │   ├── register/     # User registration API routes
│   │   └── reservations/ # Reservation management API routes
│   ├── components/       # React components
│   │   ├── inputs/       # Form input components
│   │   ├── listings/     # Listing-related components
│   │   ├── modals/       # Modal components
│   │   └── navbar/       # Navigation components
│   ├── favorites/        # Favorites page
│   ├── hooks/            # Custom React hooks
│   ├── libs/             # Utility libraries
│   ├── listings/         # Listing pages
│   ├── profile/          # User profile management pages
│   ├── properties/       # Property management pages
│   ├── reservations/     # Reservation management pages
│   ├── trips/            # User trips pages
│   ├── cancellation/     # Cancellation policy page
│   ├── types/            # TypeScript type definitions
│   ├── globals.css       # Global styles
│   └── animations.css    # Animation styles
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── middleware.ts         # Next.js middleware
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting
- `npx prisma studio` - Open Prisma Studio to view and edit database data
- `npx prisma generate` - Generate Prisma client after schema changes
- `npx prisma db push` - Push schema changes to the database

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �️ Recent Improvements

### UI/UX Enhancements

- **Enhanced Mobile Experience** - Optimized calendar, modals, and navigation for smaller screens
- **Fixed Z-Index Issues** - Properly layered navbar and modal components
- **Consistent Button Styling** - Standardized button sizes and widths throughout the application
- **Map Marker Fix** - Cross-platform Leaflet marker icons with Node.js implementation
- **Content Spacing** - Proper margins to prevent content from appearing behind fixed elements

### New Features

- **Complete Profile Management** - Edit name, email, and profile image
- **Password Change Functionality** - Secure password updates with confirmation
- **Enhanced User Menu** - Direct access to profile through dedicated link
- **Form Improvements** - Consistent validation and reset behavior

### Technical Improvements

- **TypeScript Strictness** - Removed `any` types in favor of proper typing
- **Build Process Optimization** - Cross-platform build compatibility
- **Vercel Deployment Fixes** - Resolved build errors for production deployment
- **ESLint Configuration** - Updated rules for better code quality

## �🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Prisma](https://www.prisma.io/) - Database toolkit
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Image management

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ by the ChaloStay Team**
