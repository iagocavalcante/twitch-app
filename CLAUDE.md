# Twitch TV Clone - Development Notes

## Project Overview
A React Native mobile app that clones the Twitch TV interface, built with Expo and TypeScript.

## Technology Stack
- **Expo SDK**: ~52.0.0 (latest)
- **React Native**: 0.76.3
- **React**: 18.3.1
- **TypeScript**: ~5.3.0
- **React Navigation**: v7.0.0 (bottom tabs)
- **Styled Components**: ^6.1.0
- **Expo Vector Icons**: ^14.0.0

## Recent Updates (2025)
- Updated from Expo SDK 38 to SDK 52
- Migrated from React 16.11 to React 18.3.1
- Updated React Navigation from v5 to v7
- Replaced deprecated `AppLoading` with `expo-splash-screen`
- Updated font loading to use modern async/await pattern
- Updated babel config for React Native Reanimated v3
- Modernized TypeScript configuration

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── CategoryList/    # Game categories display
│   ├── ChannelList/     # Channel listing
│   ├── Header/          # App header
│   ├── StreamList/      # Stream listings
│   └── Title/           # Title component
├── pages/               # Screen components
│   ├── Following/       # Following tab content
│   └── ComingSoon/      # Placeholder screens
├── images/              # Static image assets
├── styles/              # Global styles and colors
└── routes.tsx           # Navigation configuration
```

## Available Scripts
- `expo start` - Start development server
- `expo start --clear` - Start with cleared cache
- `expo start --android` - Start Android development
- `expo start --ios` - Start iOS development  
- `expo start --web` - Start web development

## Development Commands
- **Install dependencies**: `yarn install` or `npm install`
- **Start development**: `yarn start` or `npm start`
- **Clear cache**: `yarn reset` or `npm run reset`

## Key Features
- Bottom tab navigation (Following, Discover, Browse, Esports)
- Category list with game thumbnails
- Stream listings interface
- Custom styled components
- Responsive design for mobile

## Dependencies Notes
- Uses Expo ecosystem libraries where possible for better integration
- Custom fonts loaded via @expo-google-fonts/roboto
- Vector icons via @expo/vector-icons
- Navigation handled by React Navigation v7
- Styling with styled-components for React Native

## Development Tips
- Run `expo doctor` to check for common issues
- Use `expo install` for Expo-compatible package versions
- The app uses custom font family 'roboto_400', 'roboto_500', 'roboto_700'
- Color scheme defined in src/styles/colors.ts