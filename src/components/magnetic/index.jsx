import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, dragLimit = 100 }) {
    const magnetic = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const element = magnetic.current;
        if (!element) return;

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const moveMagnetic = (clientX, clientY) => {
            if (isDragging) return;
            const { height, width, left, top } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const resetPosition = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
            setPosition({ x: 0, y: 0 });
        };

        const startDrag = (clientX, clientY) => {
            setIsDragging(true);
            setStartPos({ x: clientX - position.x, y: clientY - position.y });
        };

        const drag = (clientX, clientY) => {
            if (!isDragging) return;
            let newX = clientX - startPos.x;
            let newY = clientY - startPos.y;

            // Limit the dragging range
            newX = Math.max(-dragLimit, Math.min(dragLimit, newX));
            newY = Math.max(-dragLimit, Math.min(dragLimit, newY));

            setPosition({ x: newX, y: newY });
            xTo(newX);
            yTo(newY);
        };

        const endDrag = () => {
            setIsDragging(false);
            resetPosition();
        };

        // Mouse events
        const handleMouseMove = (e) => isDragging ? drag(e.clientX, e.clientY) : moveMagnetic(e.clientX, e.clientY);
        const handleMouseLeave = resetPosition;
        const handleMouseDown = (e) => startDrag(e.clientX, e.clientY);
        const handleMouseUp = endDrag;

        // Touch events
        const handleTouchStart = (e) => {
            if (e.touches.length > 0) {
                startDrag(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                drag(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        const handleTouchEnd = endDrag;
        
        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        element.addEventListener("touchstart", handleTouchStart);
        element.addEventListener("touchmove", handleTouchMove);
        element.addEventListener("touchend", handleTouchEnd);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchmove", handleTouchMove);
            element.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isDragging, position, dragLimit]);

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