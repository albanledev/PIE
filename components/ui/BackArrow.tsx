import React from "react";
import Image from "next/image";

            interface BackArrowProps {
                onClick?: () => void;
                className?: string;
                ariaLabel?: string;
                iconSrc?: string;
                iconAlt?: string;
                iconWidth?: number;
                iconHeight?: number;
            }

            const BackArrow: React.FC<BackArrowProps> = ({
                onClick = () => (window.location.href = "/"),
                className = "",
                ariaLabel = "Back",
                iconSrc = "/icons/BackArrow.svg",
                iconAlt = "Back",
                iconWidth = 18,
                iconHeight = 17,
            }) => (
                <button
                    type="button"
                    onClick={onClick}
                    className={`bg-[var(--color-text)] rounded-md w-10 h-10 flex justify-center items-center mb-8 cursor-pointer ${className}`}
                    aria-label={ariaLabel}
                >
                    <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={iconWidth}
                        height={iconHeight}
                        className="mx-auto"
                    />
                </button>
            );

            export default BackArrow;