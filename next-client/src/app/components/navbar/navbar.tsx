"use client";
import {createDirectus, readItems} from '@directus/sdk';
import {rest} from '@directus/sdk/rest';
import {useEffect} from "react";

const client = createDirectus('https://directus.oscarpalissot.fr').with(rest());


interface NavbarProps {

}

export default function Navbar() {

    useEffect(() => {
        client.request(
            readItems('homepage_content', {
                deep: {
                    translations: {
                        _filter: {
                            languages_code: {
                                _eq: 'en-US'
                            }
                        },
                    },
                },
                fields: ['Sections',
                    {
                        Sections: ['*',
                            {
                                item: ['*',
                                    { translations: ['*']}
                                ]
                            }]
                    }],
            })
        ).then(data => {
            console.log(data)
        })
    }, [])

    return (
        <>
            <nav>
                <div className="logo">
                    <h1>Oscar PALISSOT</h1>
                </div>
                <div className="hamburger__toggle">
                    <div className="hamburger__btn"></div>
                </div>
                <div>

                </div>
            </nav>
        </>
    )
}
