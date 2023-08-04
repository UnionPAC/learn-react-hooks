export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <p className="font-semibold">{children}</p>;
  }

  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
