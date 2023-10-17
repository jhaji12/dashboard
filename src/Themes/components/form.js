const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)'
};

const Form = {
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles
          }
        },
        'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
          {
            ...activeLabelStyles
          },
        label: {
          top: 0,
          left: 0,
          zIndex: 2,
          position: 'absolute',
          backgroundColor: 'white',
          pointerEvents: 'none',
          mx: 3,
          px: 1,
          my: 2,
          transformOrigin: 'left top',
          fontSize: '14px',
          color: 'gray.400'
        }
      }
    }
  }
};

export default Form;
