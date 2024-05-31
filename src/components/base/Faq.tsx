import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Accordion from '../shared/Accordion';

const Faq: React.FC = () => {
    return (
        <div className='my-20'>
            <Container>
                <div className='text-center mb-10'>
                    <MainTitle title="FREQUENTLY ASKED QUESTIONS" />
                </div>

                <div className='flex flex-col gap-5 md:mx-28'>
                    <Accordion
                        heading='Is this program suitable for women?'
                        content={
                            <>
                                <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                                <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                            </>} />


                    <Accordion
                        heading='How quickly will I make my money back?'
                        content={
                            <>
                                <p>It depends on how seriously you take The Real World.</p>
                                <p>But many students made their money back in a couple of weeks.</p>
                                <p>Note: Everything taught within The Real World is for education purposes only.</p>
                                <p>It is up to each student to implement and do the work. The Real World team doesn't guarantee any profits or financial success.</p>
                            </>} />


                    <Accordion
                        heading="Do I need money once I’m inside TRW?"
                        content={
                            <>
                                <p>Not necessarily.</p>
                                <p>Once inside The Real World, many of our students chose copywriting and freelancing, which are businesses without money requirements, and saw great success.</p>
                            </>} />

                    <Accordion
                        heading="Does my age really not matter?"
                        content={
                            <>
                                <p>No, but we encourage anyone under the age of 18 to consult a parent or guardian before signing up for TRW.</p>
                                <p>Instead of getting the newest videogames just to find them boring in a week, you can join our community, start your business and shock your friends and family by becoming the kid who’s leveling up in real life.</p>
                            </>} />

                    <Accordion
                        heading="I know nothing about the skills you teach. Is it a problem?"
                        content={
                            <>
                                <p>Of course not. <br />
                                    This is a mentoring program, and you are here to learn from us.<br />
                                    Just follow our step-by-step lessons and guidance, and you will start a profitable business.</p>
                            </>} />


                    <Accordion
                        heading="I don’t have a lot of time available, can I still apply?"
                        content={
                            <>
                                <p>The methods we teach are designed for rapid execution.</p>
                                <p>So all you need is a minimum of 30 minutes a day to listen to your professors and apply what you’ve learned.</p>
                            </>} />

                    <Accordion
                        heading="I live in X country. Is it a problem?"
                        content={
                            <>
                                <p>Not at all.</p>
                                <p>At The Real World, we teach how to make money, so it doesn’t matter where you are.</p>
                                <p>Your location will only change the currency of your earnings.</p>
                            </>} />

                    <Accordion
                        heading="Will I get access to all the courses once I join?"
                        content={
                            <>
                                <p>Yes, when you join The Real World you get access to all of our courses, not just one.</p>
                            </>} />

                    <Accordion
                        heading="Still have questions?"
                        content={
                            <>
                                <p>Click the orange circle on the bottom right of your screen. Ask anything about The Real World to the Live Chat.</p>
                            </>} />
                </div>
            </Container>
        </div>
    );
};

export default Faq;