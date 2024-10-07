module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#F6F8FA',
        'primary-title-color': "#434750",
        'primary-color':"#0C0E12",
        'primary-button-strike':'#AAc8FF',
        'primary-placeholder-color':"#5C5C5C",
        'secondary-button-strike':"#E1E1E1",
        "primary-text-color":"#2A2A2A"
        
      },
      backgroundImage: theme => ({
        
        'primary-button-gradient': 'linear-gradient(to top, #0242B0, #2B74FC)', 
        'primary-button-hover-gradient': 'linear-gradient(to top,  #2B74FC,#2B74FC)',// Add your custom gradient here
        'secondary-button-gradient': 'linear-gradient(to right, #0EB4D1, #7158FF)',
        'secondary-button-hover-gradient': 'linear-gradient(to right, #B5B5B5, #ffffff)',
        'primary-text-gradient':'linear-gradient(to top, #0242B0, #2B74FC)',
        'green-button-gradient':  'linear-gradient(to top,  #007E5C, #00A478)', 
        'green-button-hover-gradient': 'linear-gradient(to top,  #007E5C, #068E69)', 
        'black-buton-gradient':'linear-gradient(to top,  #172B42, #394E66)', 
        'black-buton-hover-gradient':'linear-gradient(to top,  #172B42  , #1C4778)', 
      }),
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}