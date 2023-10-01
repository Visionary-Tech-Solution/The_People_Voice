import React, { useRef, useState } from 'react';
import { AiFillSound } from 'react-icons/ai';
import audio from '../../Assets/People House Image & Data/we the people front page.mpeg'
import { MdOutlineReadMore } from 'react-icons/md';
const PeopleHousemodal = () => {
    return (
        <> <span><MdOutlineReadMore size={18} />
        </span>


            <label htmlFor="my-modal-3" className="text-[10px] text-[#00000080]  hover:underline">Read more</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <p className="py-4 text-justify">Once upon a time, in a land of vast beauty and untamed wilderness, brave men and women dared to dream. They dreamt of a nation that would stand for freedom, justice, and the unalienable rights of every individual. A nation where people from all walks of life could come together and build a better future, united in the pursuit of happiness.

                        These fearless patriots, undeterred by the seemingly insurmountable challenges before them, fought valiantly against tyranny and oppression. They believed in a bold and audacious idea: that all men are created equal, and that they are endowed by their Creator with certain inalienable rights. This idea, born in the hearts and minds of the founding fathers, forged the United States of America from the blood, sweat, and tears of its earliest defenders.

                        Today, we find ourselves at a crossroads. The very ideals that shaped our great nation are being challenged, eroded by the grifters and thugs who have infiltrated the halls of government. Our beloved country, once a shining beacon of hope and opportunity, is now mired in corruption and deceit.

                        But we, the people, have not lost our way. In our hearts, we carry the indomitable spirit of those courageous patriots who came before us. Their legacy lives on in our unwavering commitment to liberty, justice, and the pursuit of happiness.

                        We must not stand idly by as our nation's values are tarnished by the selfish ambitions of a few. We must rise, as one, and take back the hallowed halls of our government from those who seek to undermine our democracy. Our love for our country and our fellow citizens demands nothing less.

                        For we are the descendants of those who braved the bitter cold at Valley Forge and stormed the beaches of Normandy. We are the heirs to a legacy of sacrifice, courage, and resilience, born in the blood of patriots.

                        Let us remember the wisdom of our founding fathers, who sought to build a nation that would stand the test of time. A nation where the voice of the people would always be heard, and where the guiding principles of democracy would forever be cherished.

                        We must hold fast to these principles, casting aside the petty divisions that seek to weaken us. For we are stronger together, bound by our shared love of freedom and our unwavering belief in the American dream.
                        Let us stand shoulder to shoulder, hand in hand, as we reclaim our birthright. We, the people, united by the blood of patriots, will rise once more and breathe new life into the nation we hold so dear.

                        So, my fellow Americans, let us come together and take our country back. Let us honor the sacrifices of those who came before us, and build a future worthy of their memory. We the people, born in the blood of patriots, will stand tall and reclaim our beloved United States, for ourselves, and for generations to come.
                        United we stand. God bless America.</p>
                </div>
            </div></>
    );
};

export default PeopleHousemodal;

export const PeopleHouseAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        const audio = audioRef.current;
        audio.pause();
        setIsPlaying(!isPlaying);
    };
    return (
        <>

            <span><AiFillSound size={18} /></span>
            <label htmlFor="my-modal-4" className="text-[10px] text-[#00000080]  hover:underline"> Listen </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={togglePlay}>✕</label>
                    <audio controls ref={audioRef}>
                        <source src={audio} type="audio/mpeg" />
                    </audio>

                </div>
            </div>

        </>
    );
};

