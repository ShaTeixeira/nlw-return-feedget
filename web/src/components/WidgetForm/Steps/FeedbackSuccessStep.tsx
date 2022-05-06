import { CloseButton } from "../../CloseButton";

import checkImageUrl from '../../../assets/check.svg';



interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested: () => void;
}


export function FeedbackSuccessStep( {onFeedbackRestartRequested } : FeedbackSuccessStepProps ){
    return(
        <>
            <header>
                <CloseButton/>
            </header>


            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={checkImageUrl} alt="Imagem de um verificado" />


                <span className="text-xl mt-2">THANKS FOR FEEDBACK</span>

                <button
                    onClick={onFeedbackRestartRequested} 
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hove:bg-brand-500">
                    want to send other feedback
                </button>
            </div>
        </> 
    )
}