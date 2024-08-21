import React from 'react'

interface linkProps {
    href: string,
    background: string,
    label: string
}

const Button = (data: linkProps) => {
    return (
        <a href={data.href} className={`px-[32px] py-[10px] text-white text-[14px] bg-[${data.background}] rounded-[4px]`}>
            {data.label}
        </a>
    )
}

export default Button