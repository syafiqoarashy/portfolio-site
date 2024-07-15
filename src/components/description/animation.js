export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const fadeInSlideUp = {
    initial: {
        opacity: 0,
        y: 50
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        }
    },
    closed: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.6
        }
    }
}