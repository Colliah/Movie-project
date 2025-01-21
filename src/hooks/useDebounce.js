import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Thiết lập timeout để trì hoãn cập nhật giá trị
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup: hủy bỏ timeout khi giá trị thay đổi hoặc component bị unmount
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Re-run effect khi value hoặc delay thay đổi

    return debouncedValue;
};

export default useDebounce;
