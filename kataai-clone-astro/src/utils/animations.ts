export const fadeIn = (duration = 0.5) => {
  return {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: `opacity ${duration}s ease, transform ${duration}s ease`,
    animation: 'fadeIn 0.5s forwards',
  };
};

export const slideIn = (direction = 'left', duration = 0.5) => {
  const translateValue = direction === 'left' ? '-100%' : '100%';
  return {
    opacity: 0,
    transform: `translateX(${translateValue})`,
    transition: `opacity ${duration}s ease, transform ${duration}s ease`,
    animation: `slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)} ${duration}s forwards`,
  };
};

export const bounce = (duration = 0.5) => {
  return {
    animation: `bounce ${duration}s infinite`,
  };
};