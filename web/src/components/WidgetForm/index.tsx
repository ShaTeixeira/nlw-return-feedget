import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


export const feedbackTypes = {
    BUG:{
        title: 'Problem',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Idea',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Other',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    //type of feedback
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : (
                        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} onFeedbackSent={ () => setFeedbackSent(true)}/>
                    )}
                </>
            )}

        
            <footer className="text-xs text-neutral-400">
                Created w/ ♥ by <a className="underline underline-offset-2" href="https://github.com/ShaTeixeira">Shayane Teixeira</a>
            </footer>
        </div>
    );
}