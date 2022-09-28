export const transitionDuration = 250;
const transitionFunction = 'ease-out';

export const theme = Object.freeze({
  colors: {
    darkText: '#333',
    lightText: '#cdd1d2',
    whiteText: '#fff',
    placeholder: '#8697a6',

    darkBG: '#e6ecf0',
    lightBG: '#f5f8fa',
    whiteBG: '#fff',

    mainAccent: '#2aa3ef',
    mainAccentHovered: '#1f8cd0',

    backdropBG: '#5e5e5ea0',

    lightTransparentBG: '#eeeeee80',

    tableHead: '#11c2bc',
    sortButtonBG: 'transparent',
    tableRowLight: '#f8f8f8',
    tableRowLightHovered: '#dadada',
    tableRowDark: '#eaeaea',
    tableRowDarkHovered: '#cfcfcf',

    callIcon: '#2c9403',
    callIconHovered: '#297a09',

    deleteButtonIcon: '#db1212',
    deleteButtonIconHovered: '#ba0b0b',
    deleteButtonBG: 'transparent',

    success: '#1f941c',
    error: '#c40a0a',
  },

  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],

  sizes: {
    headerH: '70px',

    filterFieldMinW: '184px',
    filterFieldMaxW: '320px',
    filterFieldH: '40px',
    filterFieldIcon: '24px',

    buttonMinW: '80px',
    buttonH: '40px',
    addContactIcon: '30px',

    contactsTableMin: '290px',
    contactsTableMax: '520px',

    sortButton: '26px',
    sortButtonIcon: '22px',

    callLink: '30px',
    callLinkIcon: '22px',

    deleteButton: '32px',
    deleteButtonIcon: '30px',

    noResultIcon: '26px',

    modalContainerMin: '300px',
    modalContainerMax: '400px',

    addFormFieldW: '100%',
    addFormFieldH: '46px',

    addFormFieldIcon: '30px',

    delettingContactIcon: '70px',
  },

  fontSizes: {
    main: '18px',
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },

  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },

  borders: {
    thin: '1px solid #8697a6',

    accent: '2px solid #2aa3ef',
    accentHovered: '2px solid #1f8cd0',
    accentTransparent: '2px solid transparent',

    success: '2px solid #1f941c',
    error: '2px solid #c40a0a',

    light: '2px solid #8697a6',
    dark: '2px solid #212121',
  },

  radii: {
    none: '0',
    roundSide: '20px',
    generic: '8px',
    round: '50%',
  },

  shadows: {
    generic:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    genericHovered:
      '0px 1px 1px rgba(0, 0, 0, 0.22), 0px 4px 4px rgba(0, 0, 0, 0.16), 1px 4px 6px rgba(0, 0, 0, 0.26)',
    text: '0px 0px 10px rgba(0, 0, 0, 1)',
  },

  breakPoints: {
    beforeMin: '479.98px',
    midMin: '480px',
    midMax: '767.98px',
    tabletMin: '768px',
    tabletMax: '1279.98px',
    desktopMin: '1280px',
    desctopMax: '1679.98px',
    bigMin: '1680px',
  },

  transitions: {
    opacity: `opacity ${transitionDuration}ms ${transitionFunction}`,
    visibility: `visibility ${transitionDuration}ms ${transitionFunction}`,

    color: `color ${transitionDuration}ms ${transitionFunction}`,
    backgroundColor: `background-color ${transitionDuration}ms ${transitionFunction}`,
    borderColor: `border-color ${transitionDuration}ms ${transitionFunction}`,

    boxShadow: `box-shadow ${transitionDuration}ms ${transitionFunction}`,

    transform: `transform ${transitionDuration}ms ${transitionFunction}`,

    font: `font ${transitionDuration}ms ${transitionFunction}`,

    contactButtonsBackwardOpacity: `opacity ${transitionDuration}ms ${transitionFunction} ${
      transitionDuration / 2
    }ms`,
    contactDataBackwardTransform: `transform ${transitionDuration}ms ${transitionFunction} ${
      transitionDuration / 2
    }ms`,
  },
});
