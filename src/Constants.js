//a constant to describe a specific portfolio project and how ui should respond to it
export const PROJECT_SETTINGS = {
  REDDIT: {
    APP_NAME: "REDDIT",
    WINDOW_SETTINGS: {
      windowTitle: "Basic Reddit Browser",
      height: "400px",
      width: "600px",
      hasPadding: true,
      scrollable: true
    },
    NAVIGATION_LIST_ITEM: {
      NAVIGATION_LIST_ITEM_TITLE: "Reddit Browser",
      ICON: "FaReddit"
    }
  },
  ABOUT: {
    APP_NAME: "ABOUT",
    WINDOW_SETTINGS: {
      windowTitle: "Welcome To My Portfolio!",
      height: "400px",
      width: "600px",
      hasPadding: true,
      scrollable: true
    },
    NAVIGATION_LIST_ITEM: {
      NAVIGATION_LIST_ITEM_TITLE: "About Me & This Portfolio",
      ICON: "FaAddressCard"
    }
  },
  CALCULATOR: {
    APP_NAME: "CALCULATOR",
    WINDOW_SETTINGS: {
      windowTitle: "Basic Calculator",
      height: "330px",
      width: "400px",
      hasPadding: false,
      scrollable: false
    },
    NAVIGATION_LIST_ITEM: {
      NAVIGATION_LIST_ITEM_TITLE: "Basic Calculator",
      ICON: "FaCalculator"
    }
  },
  projectIds: ["CALCULATOR", "ABOUT", "REDDIT"]
};
