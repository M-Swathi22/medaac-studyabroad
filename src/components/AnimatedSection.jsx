import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimatedSection({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.97)",
        filter: isVisible ? "brightness(1)" : "brightness(0.5)",
        transition: `opacity 0.8s ease ${delay}ms,
                     transform 0.8s ease ${delay}ms,
                     filter 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;