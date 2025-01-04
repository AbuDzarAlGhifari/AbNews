# 📰 AbNews

AbNews is a web-based news application that provides various up-to-date information from various categories. This application is built using React technology. AbNews is designed to provide a responsive, easy-to-use, and informative news reading experience.

## 💻 Preview

![Web Demo](/public/preview-low.gif)

## 🚀 Features

- news aggregation from multiple sources.
- news categories (politics, sports, technology, etc.).
- showing Hot news from several countries.
- attractive and modern appearance.
- responsive design for optimal user experience on any device.

## 👌 API Reference

1. **API sources and documentation**

   ```bash
   https://newsapi.org/
   ```

2. **BaseURL**
   ```bash
   https://newsapi.org/v2
   ```

## 🛠 Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AbuDzarAlGhifari/AbNews.git
   cd AbNews
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Get API [newsapi.org](https://newsapi.org)**:

- Visit NewsAPI.
- Sign up or log in to your account.
- Navigate to the API Keys section in your dashboard.
- Copy the API Key provided.

4. **Setup the .env file**:

- Copy the example .env file provided in the repository:

```bash
cp .env.example .env
```

- Open the .env file and replace the placeholder value with your NewsAPI Key:

```bash
NEXT_PUBLIC_NEWS_API=your_api_key_here
```

- Replace your_api_key_here with the API Key you obtained from NewsAPI.

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Open the app**:

   The app will be running at [http://localhost:3000](http://localhost:3000).

---

## 💥 Depedency

### List of libraries and packages used:

- **Next.js** - React framework for server-side rendering and static site generation.
- **axios** - For making API requests.
- **gsap** - For animations.
- **react-icons** - For a collection of customizable icons.
- **tailwindcss** - For utility-first styling.
