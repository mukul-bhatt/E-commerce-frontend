const colors = {
  primary: "#6A4C93",
  defaultGray: "#D9D9D9",
  cardStroke: "#E8E8E8",

  textInput: {
    placeHolder: "#888"
  },

  icon: {
    primary: "#444",
    secondary: "#666"
  },

  shopByBrand: {
    background: "#FFF8E4",
  },

  product: {
    headerBackground: "#FFE7C5",
  },

  timer: {
    textPink: "#CE307A",
    // Use hex — rgba() is not supported in Tailwind config.
    // Apply opacity via className: bg-timer-textPinkBg/30
    textPinkBg: "#CE307A",
  },

  discountOnBrands: {
    green: "#219601",
  },
  ratings: {
    star: "#219601"
  },
  error: "#EF4444",
};

module.exports = { colors };
