import React, { useState, useRef, useEffect } from "react";
import "./PriceInput.css";

interface PriceInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    min?: number;
    max?: number;
    placeholder?: string;
}

const PriceInput: React.FC<PriceInputProps> = ({ min = -Infinity, max = Infinity, placeholder = "Введите сумму", ...props }) => {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const placeholderRef = useRef<HTMLLabelElement>(null);
    const [inputWidth, setInputWidth] = useState<number>(0);

    useEffect(() => {
        if (placeholderRef.current) {
            const observer = new ResizeObserver(() => {
                if (placeholderRef.current) {
                    setInputWidth(placeholderRef.current.offsetWidth);
                }
            });

            observer.observe(placeholderRef.current);

            return () => observer.disconnect();
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            const valueLength = value.length || 1;
            const newWidth = Math.max(valueLength * 8, inputWidth);
            inputRef.current.style.width = `${newWidth}px`;
        }
    }, [value, inputWidth]);

    const formatNumber = (num: string) => {
        if (!num) return "";
        let number = num.replace(/\s+/g, "");
        const negative = number[0] === "-";
        if (negative) number = number.slice(1);

        let formatted = number;
        if (number.length > 4) {
            formatted = "";
            for (let i = number.length; i > 0; i -= 3) {
                formatted = " " + number.slice(Math.max(i - 3, 0), i) + formatted;
            }
        }

        return (negative ? "-" : "") + formatted.trim();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let rawValue = event.target.value.replace(/[^\d-]/g, "");

        if (rawValue.includes("-") && rawValue.indexOf("-") !== 0) {
            rawValue = rawValue.replace("-", "");
        }

        setValue(formatNumber(rawValue));
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (value.trim() === "") {
            setValue("");
        } else {
            let num = parseFloat(value.replace(/\s+/g, "")) || 0;
            if (num < min) num = min;
            if (num > max) num = max;
            setValue(formatNumber(num.toString()));
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className="price-input-container">
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className="price-input"
                {...props}
            />
            <label
                ref={placeholderRef}
                className={`price-placeholder ${isFocused || value ? "active" : ""}`}
            >
                {placeholder}
            </label>
        </div>
    );
};

export default PriceInput;
