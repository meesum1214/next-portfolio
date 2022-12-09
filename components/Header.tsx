import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header>
            <div className='flex'>
                {/* Social Icons */}
                <SocialIcon
                    url="https://www.linkedin.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.instagram.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://www.twitter.com/"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </div>

            <div className='flex items-center text-gray-300 '>
                <SocialIcon
                    className='cursor-pointer'
                    network="email"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Get in Touch
                </p>
            </div>
        </header>
    )
}