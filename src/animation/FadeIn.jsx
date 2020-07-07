import React, { useState } from 'react'
import { css } from '@emotion/core'
import useIntersection from './useIntersection'



const buildThresholdArray = () => Array.from(Array(50).keys(), i => i / 50);

export default function FadeIn({ children,
    duration = " 0.25s",
    curve = "linear",
    triggerOnce = false

}) {

    const [triggered, setTriggered] = useState(false)
    const [ref, entry] = useIntersection({
        threshold: buildThresholdArray()
    });

    const isVisible = css`
    opacity: 1;
    `

    const fadeInAnimation = css`
        opacity: 0;
        margin: 0;
        padding: 0;
        display: inline-block;
        
        transition: opacity ${duration} ${curve};
        ${entry.intersectionRatio > 0.5 && !triggered && isVisible}
        ${triggered && isVisible}
    `
    if (entry.intersectionRatio > 0.5 && !triggered && triggerOnce) {
        setTriggered(true)
    }

    return (
        <div ref={ref} css={fadeInAnimation}>
            {children}
        </div>
    )
}
