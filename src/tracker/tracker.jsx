import React from 'react'
import { css } from '@emotion/core'

export default function Tracker({ backgroundColor, trackerColor, thickness, width, readingProgress }) {
	const theme = {
		colors: {
			backgroundColor: backgroundColor || "#ffffff",
			trackerColor: trackerColor || "#000000",
			thickness: thickness || 10,
			width: width || '100%',
			scroll: readingProgress
		}
	}
	console.log(readingProgress)
	return (
		<div css={
			css`
						display: flex;
						position: fixed;
						top:0;
						z-index: 1;
            width: ${theme.colors.width};
            border-bottom: .0625rem solid rgba(215,215,215,0.25);
            padding-bottom: 1.5rem;
						flex-wrap: wrap;
						padding: 0;
						margin: 0;
						background: ${theme.colors.backgroundColor};
						height: ${theme.colors.thickness}px;
						div {
							background: ${theme.colors.trackerColor};
							height: 100%;
							width: ${theme.colors.scroll}%;
						}
        `}>
				<div></div>
		</div>
	)
}