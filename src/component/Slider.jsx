import React, { useRef, useState } from 'react';
const Slider = ({ items, path }) => {
    return (
        <div className='container mx-auto flex flex-col'>
            <div className='grid grid-cols-6 place-items-center gap-4'>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
                <div>
                    5
                </div>
                <div>
                    6
                </div>
            </div>
        </div>
    );
}
export default Slider


