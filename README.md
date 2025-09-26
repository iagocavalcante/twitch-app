# TwitchTV Clone

A React Native mobile application that recreates the Twitch TV interface, built with Expo and modern development practices.

## 🚀 Features

- **Bottom Tab Navigation**: Following, Discover, Browse, and Esports tabs
- **Game Categories**: Display of popular game categories with thumbnails
- **Stream Listings**: Interface for browsing live streams
- **Responsive Design**: Optimized for mobile devices
- **Modern UI**: Clean interface inspired by Twitch's design language

## 🛠 Technology Stack

- **Expo SDK 52** - Latest Expo framework
- **React Native 0.76.3** - Cross-platform mobile development
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.3** - Type-safe development
- **React Navigation 7** - Navigation library
- **Styled Components 6.1** - CSS-in-JS styling
- **Expo Vector Icons** - Icon library

## 📱 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn or npm
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator / Android Emulator or physical device

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd twitch-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```

4. Run on your preferred platform:
   ```bash
   # iOS
   yarn ios
   
   # Android
   yarn android
   
   # Web
   yarn web
   ```

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CategoryList/    # Game categories component
│   ├── ChannelList/     # Channel listing component
│   ├── Header/          # App header component
│   ├── Heading/         # Section headings
│   ├── StreamList/      # Stream listings
│   └── Title/           # Title component
├── pages/               # Screen components
│   ├── Following/       # Following tab screen
│   └── ComingSoon/      # Placeholder screens
├── images/              # Static assets and images
├── styles/              # Global styles and theme
│   └── colors.ts        # Color definitions
└── routes.tsx           # Navigation configuration
```

## 🎨 Design System

The app uses a consistent design system with:
- **Colors**: Purple theme matching Twitch branding
- **Typography**: Roboto font family (400, 500, 700 weights)
- **Icons**: Expo Vector Icons (Ionicons, MaterialCommunityIcons)
- **Components**: Styled Components for consistent styling

## 📚 Learning Resources

This project was built following RocketSeat tutorials and incorporates modern React Native development practices.

## 🔧 Development Commands

```bash
# Start development server
yarn start

# Start with cache cleared
yarn reset

# Run on specific platform
yarn ios          # iOS Simulator
yarn android      # Android Emulator  
yarn web          # Web browser
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**Note**: This is a learning project created for educational purposes to explore React Native and Expo development.