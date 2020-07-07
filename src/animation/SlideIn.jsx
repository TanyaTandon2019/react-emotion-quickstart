import React, { useState } from 'react'
import { css } from '@emotion/core'
import useIntersection from './useIntersection'

const buildThresholdArray = () => Array.from(Array(50).keys(), i => i / 50);

export default function SlideIn({ children,
    duration = " 0.25s",
    curve = "linear",
    triggerOnce = false,
    translateX = "200px",
    translateY = "200px"
}) {

    const [triggered, setTriggered] = useState(false)
    const [ref, entry] = useIntersection({
        threshold: buildThresholdArray()
    });

   
    if (entry.intersectionRatio > 0.5 && !triggered && triggerOnce) {
        setTriggered(true)
    }

    const isVisible = css`
    transform: translate(0, 0);
   `
    const slideIn = css`
        transform: translate(${translateX}, ${translateY});
        transition: transform ${duration} ${curve};
        ${entry.intersectionRatio > 0.5 && !triggered && isVisible};
        ${triggered && isVisible}
    `
   
    

    return (
        <div ref={ref} css={slideIn}>
            {children}
        </div>
    )
}
