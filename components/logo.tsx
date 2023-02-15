import Link from 'next/link'

type Props = { 
    className?: string; 
    "symbols-color": string; 
}

export default function Logo(props : Props) {
    return ( 	<svg viewBox="0 0 1531 1055" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor" fill-rule="nonzero">
        <path
            d="M292.1 851.8c27-12.7 47.7-30.9 62-54.7 14.3-23.8 21.4-52.2 21.4-85.4 0-33-7-61.7-21.1-86.1-14-24.4-34.4-43.4-61.1-56.7-26.7-13.4-58.9-20.1-96.6-20.1H0v498.8h105.5V870.8h77l94.5 176.8h116.4L287.5 853.8c1.6-.6 3.1-1.3 4.6-2zM105.5 635h71.1c20.3 0 37.1 3 50.5 8.9 13.4 5.9 23.4 14.6 30 25.9 6.6 11.4 9.9 25.3 9.9 41.9 0 16.4-3.3 30.1-9.9 41.2-6.6 11-16.5 19.3-29.8 24.8s-30 8.3-50.2 8.3h-71.6V635z"
        />
        <path
            d="M691 692.9c-27.5-16.1-60.2-24.2-98-24.2s-70.5 8.1-98 24.2c-27.5 16.2-48.7 38.7-63.7 67.7-14.9 29-22.4 62.8-22.4 101.4 0 38.3 7.5 72 22.4 100.9 14.9 29 36.2 51.6 63.7 67.7 27.5 16.2 60.2 24.2 98 24.2s70.5-8.1 98-24.2 48.8-38.7 63.7-67.7c14.9-29 22.4-62.6 22.4-100.9 0-38.6-7.5-72.5-22.4-101.4-14.9-29-36.2-51.6-63.7-67.7zm-28.2 226.6c-5.9 17-14.7 30.5-26.2 40.3-11.5 9.8-25.9 14.7-43.1 14.7-17.4 0-31.9-4.9-43.7-14.7-11.8-9.8-20.6-23.3-26.5-40.3-5.9-17.1-8.9-36.5-8.9-58.2 0-21.7 3-41.2 8.9-58.2s14.8-30.5 26.5-40.4c11.8-9.9 26.3-14.8 43.7-14.8 17.2 0 31.6 4.9 43.1 14.8s20.3 23.4 26.2 40.4c5.9 17 8.9 36.5 8.9 58.2 0 21.7-3 41.1-8.9 58.2z"
        />
        <path d="M979.3 941.1h-3.9l-77.7-267.6H788.1l130.8 374.1h116.9l130.7-374.1h-109.8z" />
        <path
            d="M1530.5 887.1v-28.5c0-31.8-4.5-59.6-13.4-83.4-8.9-23.8-21.4-43.5-37.4-59.3-16-15.7-34.7-27.6-56-35.4-21.4-7.9-44.4-11.8-69-11.8-36.7 0-68.6 8.1-95.8 24.4-27.2 16.2-48.3 38.9-63.2 67.9-14.9 29.1-22.4 62.8-22.4 101.3 0 39.5 7.5 73.6 22.4 102.4 14.9 28.8 36.2 51.1 63.9 66.7 27.7 15.7 60.8 23.5 99.2 23.5 30.8 0 58.1-4.7 81.7-14.3 23.6-9.5 42.9-22.8 58-39.9 15-17.1 25-37.2 29.8-60.3l-96-6.3c-3.6 9.4-8.8 17.4-15.6 23.9-6.8 6.5-15 11.4-24.6 14.6-9.6 3.2-20.1 4.9-31.7 4.9-17.4 0-32.4-3.7-45.1-11-12.7-7.3-22.4-17.7-29.3-31.2-6.9-13.5-10.3-29.5-10.3-48v-.2h254.8zm-215.9-130.2c12.1-7.2 26-10.8 41.8-10.8 15.1 0 28.4 3.3 39.8 9.9 11.4 6.6 20.4 15.6 26.9 27.2 6.5 11.5 9.7 24.8 9.7 39.7h-157c.6-13.4 4.1-25.7 10.4-36.9 6.9-12.2 16.3-21.9 28.4-29.1z"
        />
        <g>
            <path
                :fill="symbolsColor"
                d="M1529.9 213.9L1319.3 1c-2-2.1-5.5-.6-5.5 2.3v208.6L1105.2 1c-2-2.1-5.5-.6-5.5 2.3v424.3c0 2.9 3.5 4.3 5.5 2.3L1313.7 219v208.6c0 2.9 3.5 4.3 5.5 2.3L1529.8 217c.9-.9.9-2.3.1-3.1z"
            />
            <path
                :fill="symbolsColor"
                d="M978.6 279.5l-156.3-64.1 156.3-64.1c1.8-.7 2.6-2.9 1.6-4.6l-44.3-78.1c-1-1.7-3.2-2.2-4.8-1l-138 100.7L813.6 3.6c.2-1.9-1.3-3.6-3.2-3.6h-90.3c-2 0-3.5 1.7-3.2 3.6l20.6 164.7L599.3 67.6c-1.6-1.1-3.8-.7-4.8 1l-44.3 78.1c-1 1.7-.2 3.8 1.6 4.6l156.3 64.1-156.3 64.1c-1.8.7-2.6 2.9-1.6 4.6l44.3 78.1c1 1.7 3.2 2.2 4.8 1l138.1-100.7-20.6 164.7c-.2 1.9 1.3 3.6 3.2 3.6h90.3c2 0 3.5-1.7 3.2-3.6l-20.6-164.7L931 363.2c1.6 1.1 3.8.7 4.8-1l44.3-78.1c1.1-1.8.3-3.9-1.5-4.6z"
            />
            <path
                :fill="symbolsColor"
                d="M427.6 215.4c1.8 0 3.2-1.5 3.2-3.2C429.9 94.8 334.4 0 216.9 0h-3C96.3 0 .9 94.8 0 212.2c0 1.8 1.4 3.2 3.2 3.2h185.2v1.6C82.9 229.5.9 318.8 0 427.5c0 1.8 1.4 3.2 3.2 3.2h424.3c1.8 0 3.3-1.5 3.2-3.2-.9-108.7-82.9-198.1-188.5-210.6v-1.6h185.4v.1z"
            />
        </g>
    </g>
</svg> )
}