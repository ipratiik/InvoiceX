# InvoiceX Frontend

<p align="center">
  <img src="./public/logo.png" alt="InvoiceX Logo" width="150"/>
</p>

<h3 align="center">A modern and intuitive application for creating, managing, and exporting professional invoices.</h3>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite Badge">
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm Badge">
</p>

---

## ✨ Features

- **Effortless Invoice Creation**: A user-friendly form to create detailed invoices quickly.
- **Multiple Templates**: Choose from a variety of professional invoice templates.
- **Live Preview**: See real-time changes to your invoice as you type.
- **PDF Export**: Download your invoices as high-quality PDF files.
- **Secure Authentication**: User management powered by Clerk.
- **Cloud Storage**: Invoice thumbnails are saved to Cloudinary for easy previewing.

---

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/), [React Router](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: CSS, [Bootstrap](https://getbootstrap.com/), [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons
- **HTTP Client**: [Axios](https://axios-http.com/)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) & [html2canvas](https://html2canvas.hertzen.com/)
- **Authentication**: [Clerk](https://clerk.com/)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or later recommended)
- [pnpm](https://pnpm.io/installation)

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd frontend
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the `frontend` directory. This file will store your application's secret keys and configuration variables.

```bash
touch .env
```

Add the following variables to your `.env` file. These are required for the application to connect to the backend API and other services.

```env
# Clerk Authentication Public Key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend API Base URL
VITE_API_BASE_URL=http://localhost:8080/api

# Cloudinary Configuration
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_API_URL=https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload
```

**Note**: You will need to update the services (`src/service/cloudinaryService.js`, `src/service/invoiceService.js`) to use these environment variables instead of the current hardcoded values.

**Example (`invoiceService.js`):**
Replace `baseURL` parameter with `import.meta.env.VITE_API_BASE_URL`.

**Example (`cloudinaryService.js`):**
Replace hardcoded `upload_preset`, `cloud_name` and the URL with the corresponding `import.meta.env.VITE_...` variables.

### 4. Run the Development Server

```bash
pnpm dev
```

The application should now be running on [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

---

## 📜 Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the app for production.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm preview`: Serves the production build locally for preview.

---

## 📁 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── components/     # Reusable React components
│   ├── context/        # React context providers
│   ├── pages/          # Main page components
│   ├── service/        # API service calls (Axios, Cloudinary)
│   ├── templates/      # Invoice template components
│   └── utils/          # Utility functions
├── .env                # Environment variables (local)
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.