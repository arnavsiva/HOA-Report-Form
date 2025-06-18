# 🏘️ HOA Violation Reporter

A modern, responsive React web application for reporting and managing Homeowners Association (HOA) violations. This demo application provides a user-friendly interface for residents to submit violation reports and administrators to view and manage them.

## ✨ Features

- **🔄 Dual Interface**: Tabbed interface with separate views for violation submission and admin dashboard
- **📝 Comprehensive Form**: Report violations with detailed information including:
  - Property address
  - Violation type (maintenance, noise, parking, pet, trash/debris, or custom)
  - Date picker with calendar interface
  - Detailed description
  - Reporter information
  - Multiple image uploads with preview
- **🖼️ Image Management**: Upload multiple photos with drag-and-drop support and preview thumbnails
- **📊 Admin Dashboard**: View all submitted reports in a clean, sortable table format
- **🎨 Modern UI**: Clean, professional design with a green earth-tone color scheme
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Real-time Updates**: Instant feedback and form validation

## 🛠️ Tech Stack

- **Frontend**: React 19 with modern hooks
- **Build Tool**: Vite for fast development and building
- **Styling**: CSS3 with CSS custom properties (variables)
- **Date Handling**: React DatePicker for intuitive date selection
- **Code Quality**: ESLint for consistent code formatting

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arnavsiva/HOA-Report-Form.git
   cd hoa-violation-reporter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📖 Usage

### For Residents (Submit Violation Tab)

1. **Fill out the violation form**:

   - Enter the property address
   - Select violation type from dropdown (or choose "other" for custom)
   - Pick the violation date using the calendar picker
   - Provide a detailed description
   - Enter your name as the reporter
   - Upload supporting photos (optional)

2. **Submit the report**:
   - Click "Submit Violation Report"
   - Receive confirmation of successful submission
   - Form resets for additional reports

### For Administrators (Admin Dashboard Tab)

1. **View all reports**: Switch to the Admin Dashboard tab
2. **Review details**: See all violation information in an organized table
3. **View images**: Thumbnail previews of uploaded photos
4. **Track reports**: Monitor all submitted violations in chronological order

## 🎨 Design Philosophy

The application uses a professional, earth-tone color palette that conveys trust and authority while remaining approachable for community use. The interface prioritizes clarity and ease of use, ensuring both tech-savvy and less technical users can effectively report violations.

## ⚠️ Demo Limitations

This is a demonstration application with the following limitations:

- **No persistent storage**: Data is lost on page refresh
- **No backend integration**: All data is stored in browser memory
- **No user authentication**: Anyone can access both resident and admin features
- **No email notifications**: Reports are not automatically sent to HOA management

## 🔮 Future Enhancements

- Backend API integration with database storage
- User authentication and role-based access
- Email notifications for new violations
- Report status tracking and updates
- Advanced filtering and search capabilities
- Export functionality for admin reports
- Mobile app version
- Integration with property management systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AdminDashboard.jsx    # Admin interface for viewing reports
│   ├── AdminDashboard.css    # Admin dashboard styling
│   ├── TabContainer.jsx      # Main tab navigation component
│   ├── TabContainer.css      # Tab container styling
│   ├── ViolationForm.jsx     # Violation submission form
│   └── ViolationForm.css     # Form styling
├── assets/
│   └── hoa.png              # Application icon
├── App.jsx                  # Main application component
├── App.css                  # Global app styling
├── main.jsx                 # Application entry point
└── index.css                # Global CSS variables and base styles
```

## 🎯 Built With Love

Created for HOA communities who want to streamline their violation reporting process with modern, user-friendly technology.

---

**Note**: This is a demonstration project showcasing React development skills and modern web application design patterns. For production use in an actual HOA, additional features like data persistence, security, and integration would be required.

