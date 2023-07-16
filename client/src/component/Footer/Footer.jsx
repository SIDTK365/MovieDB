import React from 'react'

const Footer = () => {
    return (
        <>
            <hr class="border-gray-200"></hr>
            <div class="py-3 flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Made by
                        <a href="https://linktr.ee/STK_365" class="text-blueGray-500 hover:text-blue-800 px-1" target="_blank">Siddharth Singh</a>.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer