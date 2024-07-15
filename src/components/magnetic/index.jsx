import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, dragLimit = 100 }) {
    const magnetic = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const element = magnetic.current;
        if (!element) return;

        const isMobile = 'ontouchstart' in window;

        const moveMagnetic = (clientX, clientY) => {
            if (isDragging || isMobile) return;
            const { width, height, left, top } = element.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const x = (clientX - centerX) * 0.35;
            const y = (clientY - centerY) * 0.35;
            gsap.to(element, { x, y, duration: 0.3, ease: "power2.out" });
        };

        const resetPosition = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
                onComplete: () => {
                    currentPos.current = { x: 0, y: 0 };
                }
            });
        };

        const startDrag = (clientX, clientY) => {
            setIsDragging(true);
            const { x, y } = currentPos.current;
            dragStartPos.current = { x: clientX - x, y: clientY - y };
        };

        const drag = (clientX, clientY) => {
            if (!isDragging) return;
            let newX = clientX - dragStartPos.current.x;
            let newY = clientY - dragStartPos.current.y;
            newX = Math.max(-dragLimit, Math.min(dragLimit, newX));
            newY = Math.max(-dragLimit, Math.min(dragLimit, newY));
            currentPos.current = { x: newX, y: newY };
            gsap.to(element, { x: newX, y: newY, duration: 0.1 });
        };

        const endDrag = () => {
            setIsDragging(false);
            resetPosition();
        };

        const handleMouseMove = (e) => isDragging ? drag(e.clientX, e.clientY) : moveMagnetic(e.clientX, e.clientY);
        const handleMouseLeave = resetPosition;
        const handleMouseDown = (e) => startDrag(e.clientX, e.clientY);
        const handleMouseUp = endDrag;

        const handleTouchStart = (e) => {
            if (e.touches.length > 0) {
                e.preventDefault();
                startDrag(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                e.preventDefault();
                drag(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        const handleTouchEnd = (e) => {
            e.preventDefault();
            endDrag();
        };

        if (!isMobile) {
            element.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);
            element.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
        }

        element.addEventListener("touchstart", handleTouchStart, { passive: false });
        element.addEventListener("touchmove", handleTouchMove, { passive: false });
        element.addEventListener("touchend", handleTouchEnd);

        return () => {
            if (!isMobile) {
                element.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener("mouseleave", handleMouseLeave);
                element.removeEventListener("mousedown", handleMouseDown);
                window.removeEventListener("mouseup", handleMouseUp);
            }
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchmove", handleTouchMove);
            element.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, dragLimit]);

    return (
        <div
            ref={magnetic}
            style={{
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                touchAction: 'none'
            }}
        >
            {React.cloneElement(children, {
                style: {
                    ...children.props.style,
                    pointerEvents: 'none'
                }
            })}
        </div>
    );
}