/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-first-image-mobile':"url('../src/assets/home/mobile/create-and-share.jpg')",
        'home-first-image-desktop':"url('../src/assets/home/desktop/create-and-share.jpg')",
        'home-first-image-tablet':"url('../src/assets/home/tablet/create-and-share.jpg')",

        'home-second-image-mobile':"url('../src/assets/home/mobile/beautiful-stories.jpg')",
        'home-second-image-desktop':"url('../src/assets/home/desktop/beautiful-stories.jpg')",
        'home-second-image-tablet':"url('../src/assets/home/tablet/beautiful-stories.jpg')",

        'home-third-image-mobile':"url('../src/assets/home/mobile/designed-for-everyone.jpg')",
        'home-third-image-desktop':"url('../src/assets/home/desktop/designed-for-everyone.jpg')",
        'home-third-image-tablet':"url('../src/assets/home/tablet/designed-for-everyone.jpg')",

        'features-first-image-mobile':"url('../src/assets/features/mobile/hero.jpg')",
        'features-first-image-tablet':"url('../src/assets/features/tablet/hero.jpg')",
        'features-first-image-desktop':"url('../src/assets/features/desktop/hero.jpg')",

        'stories-hero-image-mobile':"url('../src/assets/stories/mobile/moon-of-appalacia.jpg')",
        'stories-hero-image-desktop':"url('../src/assets/stories/desktop/moon-of-appalacia.jpg')",
        'stories-hero-image-tablet':"url('../src/assets/stories/tablet/moon-of-appalacia.jpg')",

        'pricing-hero-image-mobile':"url('../src/assets/pricing/mobile/hero.jpg')",
        'pricing-hero-image-desktop':"url('../src/assets/pricing/desktop/hero.jpg')",
        'pricing-hero-image-tablet':"url('../src/assets/pricing/tablet/hero.jpg')",
        
        'bg-beta-image-mobile':"url('../src/assets/shared/mobile/bg-beta.jpg')",
        'beta-image-desktop':"url('../src/assets/shared/desktop/bg-beta.jpg')",
        'beta-image-tablet':"url('../src/assets/shared/tablet/bg-beta.jpg')",


      }
    },
    fontFamily:{
      'dm':['DM Sans']
    },
    colors:{
      'light-grey':'#DFDFDF',
      'gradient-color-1':'#FFC593',
      'gradient-color-2':'#BC7198',
      'gradient-color-3':'#5A77FF'

    }
  },
  plugins: [],
}
