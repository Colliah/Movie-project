import { useEffect } from "react";

const Overlay = ({
    isOpen,
    onClose,
    children,
    position = "center",
    closeOnClickOutside = true,
    overlayClassName = "",
}) => {
    const positionStyles = {
        center: "items-center justify-center",
        top: "items-start justify-center",
        bottom: "items-end justify-center",
        left: "items-center justify-start",
        right: "items-center justify-end",
    };

    const handleOverlayClick = (e) => {
        if (closeOnClickOutside && e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [onClose]);

    return (
        <div
            className={`
        fixed inset-0 z-50 flex ${positionStyles[position]} 
        transition-opacity duration-300 ease-in-out
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        bg-black bg-opacity-50 
        ${overlayClassName}
      `}
            onClick={handleOverlayClick}
        >
            {children}
        </div>
    );
};

export default Overlay;
