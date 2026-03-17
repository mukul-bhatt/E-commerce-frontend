const colors = {
  primary: "#6A4C93",
  defaultGray: "#D9D9D9",

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

  timer: {
    textPink: "#CE307A",
    // Use hex — rgba() is not supported in Tailwind config.
    // Apply opacity via className: bg-timer-textPinkBg/30
    textPinkBg: "#CE307A",
  }
};

module.exports = { colors };
